import { TitleCard, JobDetailsCard, Layout } from '@/components';
import useJobsStore from '@/stores/jobs';
import { Stack } from '@mui/material';
import styles from '@/styles/pages/candidates.module.scss';
import CandidatesCard from '@/components/CandidatesCard/CandidatesCard';
import useCandidatesStore from '@/stores/candidates';
import { useEffect, useState } from 'react';
import useGetCandidates from '@/services/api/useGetCandidates';
import searchCandidate from '@/utils/searchCandidate';
import statsCandidates from '@/utils/statsCandidates';
import useAuthStore from '@/stores/auth';
import { useRouter } from 'next/router';

function Candidates() {
  const [search, setSearch] = useState('');
  const selectedJob = useJobsStore((state) => state.selectedJob);
  const [candidates, filteredCandidates, setFilteredCandidates] =
    useCandidatesStore((state) => [
      state.candidates,
      state.filteredCandidates,
      state.setFilteredCandidate,
    ]);
  const loggedIn = useAuthStore((state) => state.loggedIn);

  const handleChangeSearch = (event: any) => setSearch(event.target.value);

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

  const { refetch } = useGetCandidates(5);

  const router = useRouter();

  useEffect(() => {
    if (loggedIn === false || candidates.length < 1) {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    refetch();
    setFilteredCandidates(searchCandidate(search, selectedJob, candidates, 5));
  }, [selectedJob]);

  return (
    <Layout variant='main' headerText='Candidatos'>
      <Stack className={styles.contentContainer}>
        <TitleCard
          title={selectedJob.label}
          caption={`${candidatesTotal} candidatos | ${approvedsTotal} aprovados`}
          actionButtonText='Embaralhar'
          handleClick={() => {
            setFilteredCandidates(
              searchCandidate(search, selectedJob, candidates, 5),
            );
          }}
        />
        <Stack className={styles.candidatesContainer}>
          <CandidatesCard
            candidates={
              search.length > 0
                ? searchCandidate(search, selectedJob, candidates, 5)
                : filteredCandidates
            }
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
