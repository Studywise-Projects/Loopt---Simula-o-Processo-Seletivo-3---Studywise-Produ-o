import useCandidatesStore from '@/stores/candidates';
import useJobsStore from '@/stores/jobs';
import searchCandidate from '@/utils/searchCandidate';
import axios from 'axios';
import { useQuery } from 'react-query';

function useGetCandidates(maxCandidates: any) {
  const [setCandidates, setFilteredCandidates] = useCandidatesStore((state) => [
    state.setCandidates,
    state.setFilteredCandidate,
  ]);
  const selectedJob = useJobsStore((state) => state.selectedJob);

  return useQuery(
    'getCandidates',
    () => {
      axios
        .get('http://localhost:5000/candidates')
        .then((res) => {
          setCandidates(res.data);
          setFilteredCandidates(
            searchCandidate('', selectedJob, res.data, maxCandidates),
          );
        })
        .catch(() => {
          return new Error('Erro na query useGetCandidates');
        });
    },
    { enabled: false },
  );
}

export default useGetCandidates;
