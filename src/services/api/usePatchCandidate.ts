import axios from 'axios';
import { useQuery } from 'react-query';
import useGetCandidates from './useGetCandidates';

function usePatchCandidate(id: number) {
  const { refetch } = useGetCandidates();

  return useQuery(
    'patchCandidate',
    () => {
      axios
        .patch(`http://localhost:5000/candidates/${id}`, {
          approved: true,
        })
        .then(() => {
          refetch();
        })
        .catch((error) => {
          return new Error('Erro ao alterar o candidato', error);
        });
    },
    { enabled: false },
  );
}

export default usePatchCandidate;
