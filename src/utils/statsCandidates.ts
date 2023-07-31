import { ICandidate } from '@/interfaces/ICandidate';

function statsCandidates(
  candidates: Array<ICandidate>,
  jobId: number,
  requestedData: 'countTotal' | 'countApproveds',
) {
  // Counts the total number of approved candidates
  const countTotal = candidates.filter(
    (candidate: ICandidate) =>
      candidate.jobId === jobId && candidate.approved === false,
  );

  // Counts the total number of approved candidates
  const countApproveds = candidates.filter(
    (candidate: ICandidate) =>
      candidate.jobId === jobId && candidate.approved === true,
  );

  // Returns the value according to the requested data
  switch (requestedData) {
    case 'countTotal':
      return countTotal.length;
    case 'countApproveds':
      return countApproveds.length;
  }
}

export default statsCandidates;
