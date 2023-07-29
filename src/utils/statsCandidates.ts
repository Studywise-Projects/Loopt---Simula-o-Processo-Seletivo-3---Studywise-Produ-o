import { ICandidate } from '@/interfaces/ICandidate';

function statsCandidates(
  candidates: Array<ICandidate>,
  jobId: number,
  requestedData: 'countTotal' | 'countApproveds',
) {
  const countTotal = candidates.filter(
    (candidate: ICandidate) =>
      candidate.jobId === jobId && candidate.approved === false,
  );

  const countApproveds = candidates.filter((candidate: ICandidate) => {
    candidate.jobId === jobId && candidate.approved === true;
  });

  switch (requestedData) {
    case 'countTotal':
      return countTotal.length;
    case 'countApproveds':
      return countApproveds.length;
  }
}

export default statsCandidates;
