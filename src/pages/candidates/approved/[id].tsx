import { Button, Typography, Layout } from '@/components';
import useCandidatesStore from '@/stores/candidates';
import useJobsStore from '@/stores/jobs';
import formatArrayToString from '@/utils/formatArrayToString';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/pages/approvedCandidate.module.scss';
import { useRouter } from 'next/router';
import { ICandidate } from '@/interfaces/ICandidate';

function ApprovedCandidate() {
  const selectedJob = useJobsStore((state) => state.selectedJob);
  const candidates = useCandidatesStore((state) => state.candidates);

  const approvedCandidate = candidates.filter(
    (candidate: ICandidate) =>
      candidate.jobId === selectedJob.id && candidate.approved === true,
  );

  const router = useRouter();

  return (
    <Layout variant='basic'>
      <Stack className={styles.card}>
        <Image
          src={approvedCandidate[0]?.picture}
          alt={approvedCandidate[0]?.name}
          width={160}
          height={160}
          className={styles.profilePicture}
        />
        <Box className={styles.highlightContent}>
          <Typography variant='subtitle' text={approvedCandidate[0]?.name} />
          <Typography variant='body' text='|' />
          <Typography
            variant='body'
            text={`${approvedCandidate[0]?.age} anos`}
          />
        </Box>
        <Box className={styles.job}>
          <Typography variant='body' text='Vaga Desejada' />
          <Typography variant='caption' text={selectedJob.label} />
        </Box>
        <Box className={styles.skills}>
          <Typography variant='body' text='Habilidades' />
          <Typography
            variant='caption'
            text={formatArrayToString(approvedCandidate[0]?.skills, 0, 50)}
          />
        </Box>
        <Box className={styles.buttons}>
          <Button
            text='Voltar'
            handleClick={() => {
              router.back();
              console.log(approvedCandidate);
            }}
            isSecondaryButton={true}
          />
        </Box>
      </Stack>
    </Layout>
  );
}

export default ApprovedCandidate;
