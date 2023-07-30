import {
  CandidatesCard,
  JobDetailsCard,
  Layout,
  TitleCard,
} from '@/components';
import { Stack } from '@mui/material';
import styles from '@/styles/pages/allCandidates.module.scss';
import statsCandidates from '@/utils/statsCandidates';
import useCandidatesStore from '@/stores/candidates';
import useJobsStore from '@/stores/jobs';
import searchCandidate from '@/utils/searchCandidate';
import { useEffect, useState } from 'react';
import filterCandidates from '@/utils/filterCandidates';
import { useRouter } from 'next/router';
import useAuthStore from '@/stores/auth';
import useGetCandidates from '@/services/api/useGetCandidates';

function AllCandidates() {
  const [search, setSearch] = useState('');
  const candidates = useCandidatesStore((state) => state.candidates);
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

  const filteredCandidates = filterCandidates(
    candidates,
    selectedJob.id,
    'job',
  );

  const { refetch } = useGetCandidates();

  const router = useRouter();

  useEffect(() => {
    refetch();
  }, [selectedJob]);

  useEffect(() => {
    if (loggedIn === false) {
      router.push('/');
    }
  }, [loggedIn]);

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
            candidates={searchCandidate(
              search,
              selectedJob,
              candidates,
              filteredCandidates,
            )}
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
