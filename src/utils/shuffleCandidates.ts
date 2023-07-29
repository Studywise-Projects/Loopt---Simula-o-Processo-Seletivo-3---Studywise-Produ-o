import { ICandidate } from '@/interfaces/ICandidate';

function shuffleCandidates(
  array: Array<ICandidate>,
  jobId: number,
  limit?: 5 | 'all',
) {
  // generate random order in candidates array
  const newArray: Array<ICandidate> = array
    .filter((candidate) => candidate.jobId === jobId)
    .slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  // generate array with limit
  const fiveRandomCandidates = newArray.slice(0, 5);

  // generate array without limit
  const allRandomCandidates = newArray;

  if (limit !== 'all') {
    return fiveRandomCandidates;
  } else {
    return allRandomCandidates;
  }
}

export default shuffleCandidates;
