import { useQuery } from 'react-query';
import axios from 'axios';
import useJobsStore from '@/stores/jobs';

function useGetJobs() {
  const setJobs = useJobsStore((state) => state.setJobs);

  return useQuery(
    'getJobs',
    () => {
      axios.get('http://localhost:5000/jobs').then((res) => setJobs(res.data));
    },
    { enabled: false },
  );
}

export default useGetJobs;
