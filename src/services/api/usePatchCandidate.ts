import axios from 'axios';
import { useMutation } from 'react-query';
import useGetCandidates from './useGetCandidates';
import { ICandidate } from '@/interfaces/ICandidate';

function usePatchCandidate(candidate: ICandidate, maxCandidates: 5 | 'all') {
  const { refetch } = useGetCandidates(maxCandidates);

  return useMutation({
    mutationFn: (patchCandidate: any) =>
      axios
        .patch(`http://localhost:5000/candidates/${candidate.id}`, {
          approved: true,
        })
        .then(() => {
          refetch();
        }, patchCandidate)
        .catch((error) => {
          throw new Error('Erro na mutation PatchCandidate', error);
        }),
  });
}

export default usePatchCandidate;
