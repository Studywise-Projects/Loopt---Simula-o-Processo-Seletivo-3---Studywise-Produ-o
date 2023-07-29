import { ICandidate } from '@/interfaces/ICandidate';
import { IJob } from '@/interfaces/IJob';

function searchCandidate(
  searchValue: string,
  selectedJob: IJob,
  candidates: Array<ICandidate>,
  defaultValue: Array<ICandidate>,
) {
  if (searchValue.length > 0) {
    return candidates.filter(
      (candidate: ICandidate) =>
        candidate.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        candidate.jobId === selectedJob.id,
    );
  } else {
    return defaultValue;
  }
}

export default searchCandidate;
