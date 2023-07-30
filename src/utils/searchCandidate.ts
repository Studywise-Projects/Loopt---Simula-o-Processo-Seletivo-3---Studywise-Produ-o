import { ICandidate } from '@/interfaces/ICandidate';
import { IJob } from '@/interfaces/IJob';
import shuffleCandidates from './shuffleCandidates';

function searchCandidate(
  searchValue: string,
  selectedJob: IJob,
  candidates: Array<ICandidate>,
  maxCandidates: 5 | 'all',
) {
  if (searchValue.length > 0) {
    return candidates.filter(
      (candidate: ICandidate) =>
        candidate.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        candidate.jobId === selectedJob.id &&
        candidate.approved === false,
    );
  } else {
    const filteredValue = candidates.filter(
      (candidate: ICandidate) =>
        candidate.jobId === selectedJob.id && !candidate.approved,
    );

    return shuffleCandidates(filteredValue, selectedJob.id, maxCandidates);
  }
}

export default searchCandidate;
