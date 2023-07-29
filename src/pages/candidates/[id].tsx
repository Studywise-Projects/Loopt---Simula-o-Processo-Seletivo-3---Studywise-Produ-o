import { Button, Typography } from '@/components';
import Layout from '@/components/Layout/Layout';
import useCandidatesStore from '@/stores/candidates';
import useJobsStore from '@/stores/jobs';
import formatArrayToString from '@/utils/formatArrayToString';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/pages/chosenCandidate.module.scss';

function ChosenCandidate() {
  const selectedJob = useJobsStore((state) => state.selectedJob);
  const selectedCandidate = useCandidatesStore(
    (state) => state.selectedCandidate,
  );

  return (
    <Layout variant='basic'>
      <Stack className={styles.card}>
        <Image
          src={selectedCandidate.picture}
          alt={selectedCandidate.name}
          width={160}
          height={160}
          className={styles.profilePicture}
        />
        <Box className={styles.highlightContent}>
          <Typography variant='subtitle' text={selectedCandidate.name} />
          <Typography variant='body' text='|' />
          <Typography variant='body' text={`${selectedCandidate.age} anos`} />
        </Box>
        <Box className={styles.job}>
          <Typography variant='body' text='Vaga Desejada' />
          <Typography variant='caption' text={selectedJob.label} />
        </Box>
        <Box className={styles.skills}>
          <Typography variant='body' text='Habilidades' />
          <Typography
            variant='caption'
            text={formatArrayToString(selectedCandidate.skills, 0, 50)}
          />
        </Box>
        <Box className={styles.buttons}>
          <Button
            text='Voltar'
            handleClick={() => undefined}
            isAuxButton={true}
            isSecondaryButton={true}
          />
          <Button
            text='Confirmar'
            handleClick={() => undefined}
            isAuxButton={true}
          />
        </Box>
      </Stack>
    </Layout>
  );
}

export default ChosenCandidate;
