import axios from 'axios';
import { useMutation } from 'react-query';
import useGetCandidates from './useGetCandidates';

function usePatchCandidate(id: number) {
  const { refetch } = useGetCandidates();

  return useMutation({
    mutationFn: (patchCandidate: any) =>
      axios
        .patch(`http://localhost:5000/candidades/${id}`, {
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
