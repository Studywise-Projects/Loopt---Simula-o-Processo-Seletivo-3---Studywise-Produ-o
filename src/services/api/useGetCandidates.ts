import useCandidatesStore from '@/stores/candidates';
import axios from 'axios';
import { useQuery } from 'react-query';

function useGetCandidates() {
  const setCandidates = useCandidatesStore((state) => state.setCandidates);

  return useQuery(
    'getCandidates',
    () => {
      axios
        .get('http://localhost:5000/candidates')
        .then((res) => {
          setCandidates(res.data);
        })
        .catch(() => {
          return new Error('Erro na query useGetCandidates');
        });
    },
    { enabled: false },
  );
}

export default useGetCandidates;
