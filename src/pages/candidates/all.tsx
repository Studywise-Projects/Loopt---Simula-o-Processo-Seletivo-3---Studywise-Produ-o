import {
  CandidatesCard,
  JobDetailsCard,
  Layout,
  TitleCard,
} from '@/components';
import { Stack } from '@mui/material';
import styles from '@/styles/pages/all-candidates.module.scss';
import statsCandidates from '@/utils/statsCandidates';
import useCandidatesStore from '@/stores/candidates';
import useJobsStore from '@/stores/jobs';
import searchCandidate from '@/utils/searchCandidate';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useAuthStore from '@/stores/auth';
import useGetCandidates from '@/services/api/useGetCandidates';

function AllCandidates() {
  const [search, setSearch] = useState('');
  const [candidates, filteredCandidates] = useCandidatesStore((state) => [
    state.candidates,
    state.filteredCandidates,
  ]);
  const selectedJob = useJobsStore((state) => state.selectedJob);
  const loggedIn = useAuthStore((state) => state.loggedIn);

  const handleChangeSearch = (event: any) => {
    setSearch(event.target.value);
  };

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

  const { refetch } = useGetCandidates('all');

  const router = useRouter();

  useEffect(() => {
    refetch();
  }, [selectedJob]);

  useEffect(() => {
    if (loggedIn === false || candidates.length < 1) {
      router.push('/');
    }
  }, []);

  return (
    <Layout
      variant='main'
      headerVariant='return'
      headerText='Todos os candidatos'
    >
      <Stack className={styles.contentContainer}>
        <TitleCard
          title={selectedJob.label}
          variant='withoutAction'
          caption={`${candidatesTotal} candidatos | ${approvedsTotal} aprovados`}
          actionButtonText='Embaralhar'
          handleClick={() => undefined}
        />
        <Stack className={styles.candidatesContainer}>
          <CandidatesCard
            candidates={
              search.length > 0
                ? searchCandidate(search, selectedJob, candidates, 'all')
                : filteredCandidates
            }
            withButton={true}
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

export default AllCandidates;
