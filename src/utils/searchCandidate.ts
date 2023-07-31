import { ICandidate } from '@/interfaces/ICandidate';
import { IJob } from '@/interfaces/IJob';
import shuffleCandidates from './shuffleCandidates';

interface ISearchCandidate {
  searchValue: string;
  selectedJob: IJob;
  candidates: Array<ICandidate>;
  maxCandidates: 5 | 'all';
}

function searchCandidate({
  searchValue,
  selectedJob,
  candidates,
  maxCandidates,
}: ISearchCandidate) {
  // if the search field is filled in, it searches candidates through the name being typed
  if (searchValue.length > 0) {
    return candidates.filter(
      (candidate: ICandidate) =>
        candidate.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        candidate.jobId === selectedJob.id &&
        candidate.approved === false,
    );
  }
  // else it shows the candidates at random, filtering only the selected vacancy and unapproved candidates
  else {
    const filteredValue = candidates.filter(
      (candidate: ICandidate) =>
        candidate.jobId === selectedJob.id && !candidate.approved,
    );

    return shuffleCandidates({
      candidates: filteredValue,
      jobId: selectedJob.id,
      limit: maxCandidates,
    });
  }
}

export default searchCandidate;
