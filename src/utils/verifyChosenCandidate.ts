import { ICandidate } from '@/interfaces/ICandidate';

interface IVerifyChosenCandidate {
  candidates: Array<ICandidate>;
  selectedJobId: number;
}

function verifyChosenCandidate({
  candidates,
  selectedJobId,
}: IVerifyChosenCandidate) {
  // filters the approved candidate of the selected vacancy
  const chosenCandidate = candidates.filter(
    (candidate: ICandidate) =>
      candidate.approved === true && candidate.jobId === selectedJobId,
  );

  return chosenCandidate;
}

export default verifyChosenCandidate;
