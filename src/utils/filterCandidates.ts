import { ICandidate } from '@/interfaces/ICandidate';

function filterCandidates(
  candidates: Array<ICandidate>,
  comparisonValue: any,
  filter: 'job' | 'requirements' | 'differentials',
) {
  switch (filter) {
    case 'job':
      return candidates.filter(
        (candidate: ICandidate) => candidate.jobId === comparisonValue,
      );
    case 'requirements':
      return candidates.filter(
        (candidate: ICandidate) => candidate.skills === comparisonValue,
      );
    case 'differentials':
      return candidates.filter(
        (candidate: ICandidate) => candidate.skills === comparisonValue,
      );
  }
}

export default filterCandidates;
