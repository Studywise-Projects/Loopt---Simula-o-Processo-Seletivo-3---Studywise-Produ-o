import { Header, LeftDrawer, TitleCard } from '@/components';
import useJobsStore from '@/stores/jobs';
import { Stack } from '@mui/material';
import styles from '@/styles/pages/candidates.module.scss';
import CandidatesCard from '@/components/CandidatesCard/CandidatesCard';
import useCandidatesStore from '@/stores/candidates';
import { useEffect, useState } from 'react';
import useGetCandidates from '@/services/api/useGetCandidates';
import shuffleCandidates from '@/utils/shuffleCandidates';
import JobDetailsCard from '@/components/JobDetailsCard/JobDetailsCard';
import searchCandidate from '@/utils/searchCandidate';
import statsCandidates from '@/utils/statsCandidates';

function Candidates() {
  const [randomCandidates, setRandomCandidates]: any = useState();

  const [search, setSearch] = useState('');
  const handleChangeSearch = (event: any) => setSearch(event.target.value);

  const [jobs, selectedJob, setSelectedJob] = useJobsStore((state) => [
    state.jobs,
    state.selectedJob,
    state.setSelectedJob,
  ]);
  const handleChangeSelectedJob = (event: any) =>
    setSelectedJob(event.target.value);

  const candidates = useCandidatesStore((state) => state.candidates);

  const candidatesTotal = statsCandidates(
    candidates,
    selectedJob.id,
    'countTotal',
  );
  const approvedsTotal = statsCandidates(
    candidates,
    selectedJob.id,
    'countApproveds',
  );

  const { refetch } = useGetCandidates();

  useEffect(() => {
    refetch();
    setRandomCandidates(shuffleCandidates(candidates, selectedJob.id, 5));
  }, [randomCandidates === undefined || selectedJob]);

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
          caption={`${candidatesTotal} candidatos.`}
          actionCaption='Clique aqui para ver outros candidatos'
          actionButtonText='Embaralhar'
          handleClick={() => {
            setRandomCandidates(
              shuffleCandidates(candidates, selectedJob.id, 5),
            );
            console.log(approvedsTotal);
          }}
        />
        <Stack className={styles.candidatesContainer}>
          <CandidatesCard
            candidates={searchCandidate(
              search,
              selectedJob,
              candidates,
              randomCandidates,
            )}
          />
          <JobDetailsCard
            job={selectedJob}
            value={search}
            handleChange={handleChangeSearch}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Candidates;
