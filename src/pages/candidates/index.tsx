import {
  Header,
  LeftDrawer,
  TitleCard,
  JobDetailsCard,
  Layout,
} from '@/components';
import useJobsStore from '@/stores/jobs';
import { Stack } from '@mui/material';
import styles from '@/styles/pages/candidates.module.scss';
import CandidatesCard from '@/components/CandidatesCard/CandidatesCard';
import useCandidatesStore from '@/stores/candidates';
import { useEffect, useState } from 'react';
import useGetCandidates from '@/services/api/useGetCandidates';
import shuffleCandidates from '@/utils/shuffleCandidates';
import searchCandidate from '@/utils/searchCandidate';
import statsCandidates from '@/utils/statsCandidates';
import useAuthStore from '@/stores/auth';
import { useRouter } from 'next/router';

function Candidates() {
  const [randomCandidates, setRandomCandidates]: any = useState();
  const [search, setSearch] = useState('');
  const [jobs, selectedJob, setSelectedJob] = useJobsStore((state) => [
    state.jobs,
    state.selectedJob,
    state.setSelectedJob,
  ]);
  const candidates = useCandidatesStore((state) => state.candidates);
  const loggedIn = useAuthStore((state) => state.loggedIn);

  const handleChangeSearch = (event: any) => setSearch(event.target.value);
  const handleChangeSelectedJob = (event: any) =>
    setSelectedJob(event.target.value);

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

  const router = useRouter();

  useEffect(() => {
    refetch();
    setRandomCandidates(shuffleCandidates(candidates, selectedJob.id, 5));
  }, [randomCandidates === undefined || selectedJob]);

  useEffect(() => {
    if (loggedIn === false) {
      router.push('/');
    }
  }, [loggedIn]);

  return (
    <Layout variant='main' headerText='Candidatos'>
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
          caption={`${candidatesTotal} candidatos | ${approvedsTotal} aprovados`}
          actionButtonText='Embaralhar'
          handleClick={() => {
            setRandomCandidates(
              shuffleCandidates(candidates, selectedJob.id, 5),
            );
            console.log(candidates);
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
    </Layout>
  );
}

export default Candidates;
