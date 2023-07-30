import { Button, Typography, Layout } from '@/components';
import useCandidatesStore from '@/stores/candidates';
import useJobsStore from '@/stores/jobs';
import formatArrayToString from '@/utils/formatArrayToString';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/pages/chosenCandidate.module.scss';
import usePatchCandidate from '@/services/api/usePatchCandidate';
import { useRouter } from 'next/router';
import verifyRoutePath from '@/utils/verifyRoutePath';
import { ICandidate } from '@/interfaces/ICandidate';
import AlertDialog from '@/components/AlertDialog/AlertDialog';

function ChosenCandidate() {
  const selectedJob = useJobsStore((state) => state.selectedJob);
  const [candidates, selectedCandidate] = useCandidatesStore((state) => [
    state.candidates,
    state.selectedCandidate,
  ]);

  const router = useRouter();

  const chosenCandidateVerify = candidates.filter(
    (candidate: ICandidate) =>
      candidate.jobId === selectedJob.id && candidate.approved === true,
  );

  const mutation: any = usePatchCandidate(
    selectedCandidate,
    verifyRoutePath(router.asPath),
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
            handleClick={() => {
              router.back();
            }}
            isAuxButton={true}
            isSecondaryButton={true}
          />
          {chosenCandidateVerify.length > 0 ? (
            <AlertDialog
              buttonText='Confirmar'
              dialogTitle='Candidato já escolhido'
              dialogText='Você já escolheu um candido para esta vaga, deseja substituir o candidato escolhido e prosseguir?'
              disagreeButtonText='Cancelar'
              agreeButtonText='Confirmar'
              handleClickDisagree={() => router.back()}
              handleClickAgree={() => {
                mutation.mutate();
                router.back();
              }}
            />
          ) : (
            <Button
              text='Confirmar'
              handleClick={() => {
                mutation.mutate();
                router.back();
              }}
              isAuxButton={true}
            />
          )}
        </Box>
      </Stack>
    </Layout>
  );
}

export default ChosenCandidate;
