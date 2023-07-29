import { Header, LeftDrawer, TitleCard } from '@/components';
import useJobsStore from '@/stores/jobs';
import { Stack } from '@mui/material';
import styles from '@/styles/pages/candidates.module.scss';
import CandidatesCard from '@/components/CandidatesCard/CandidatesCard';
import useCandidatesStore from '@/stores/candidates';
import { useEffect, useState } from 'react';
import useGetCandidates from '@/services/api/useGetCandidates';
import shuffleCandidates from '@/utils/shuffleCandidates';
import { ICandidate } from '@/interfaces/ICandidate';

function Candidates() {
  const [jobs, selectedJob, setSelectedJob] = useJobsStore((state) => [
    state.jobs,
    state.selectedJob,
    state.setSelectedJob,
  ]);
  const handleChangeSelectedJob = (event: any) =>
    setSelectedJob(event.target.value);

  const [randomCandidates, setRandomCandidates]: any = useState();

  const candidates = useCandidatesStore((state) => state.candidates);

  const { refetch } = useGetCandidates();

  useEffect(() => {
    refetch();
    setRandomCandidates(shuffleCandidates(candidates, 5));
  }, []);

  return (
    <Stack className={styles.main}>
      <Header
        icon={
          <LeftDrawer
            optionsSelect={jobs}
            valueSelect={selectedJob}
            handleChangeSelect={handleChangeSelectedJob}
          />
        }
        text='Candidatos'
      />
      <Stack className={styles.contentContainer}>
        <TitleCard
          title={selectedJob.label}
          caption={`candidatos (5 estão sendo exibidos atualmente)`}
          actionCaption='Clique aqui para ver outros candidatos'
          actionButtonText='Embaralhar'
          handleClick={() => {
            setRandomCandidates(shuffleCandidates(candidates, 5));
          }}
        />
        <Stack>
          <CandidatesCard
            candidates={randomCandidates}
            handleClick={() => undefined}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Candidates;
