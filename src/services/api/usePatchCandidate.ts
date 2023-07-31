import axios from 'axios';
import { useMutation } from 'react-query';
import { ICandidate } from '@/interfaces/ICandidate';
import useCandidatesStore from '@/stores/candidates';
import useJobsStore from '@/stores/jobs';
import verifyChosenCandidate from '@/utils/verifyChosenCandidate';

function usePatchCandidateApproved(candidate: ICandidate) {
  const candidates = useCandidatesStore((state) => state.candidates);
  const selectedJob = useJobsStore((state) => state.selectedJob);

  const chosenCandidate = verifyChosenCandidate({
    candidates: candidates,
    selectedJobId: selectedJob.id,
  });

  if (chosenCandidate.length < 1) {
    return useMutation({
      mutationFn: (patchCandidate: any) =>
        axios
          .patch(`http://localhost:5000/candidates/${candidate.id}`, {
            approved: true,
          })
          .then(() => {}, patchCandidate),
    });
  } else {
    return useMutation({
      mutationFn: (patchCandidate: any) =>
        axios
          .patch(`http://localhost:5000/candidates/${chosenCandidate[0].id}`, {
            approved: false,
          })
          .then(() => {
            axios.patch(`http://localhost:5000/candidates/${candidate.id}`, {
              approved: true,
            });
          }, patchCandidate)
          .catch((error) => {
            throw new Error('Erro na mutation PatchCandidate', error);
          }),
    });
  }
}

export default usePatchCandidateApproved;
