import useAuthStore from '@/stores/auth';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import useGetCandidates from './useGetCandidates';

function usePostLogin() {
  const [username, password, setLoggedIn] = useAuthStore((state) => [
    state.username,
    state.password,
    state.setLoggedIn,
  ]);

  const router = useRouter();

  const patchLoggedIn = (id: number) => {
    axios.get(`http://localhost:5000/users/${id}`).then(() => {
      setLoggedIn(true);
      router.push('candidates');
    });
  };

  return useQuery(
    'postLogin',
    () => {
      axios
        .get('http://localhost:5000/users', {
          params: {
            username: username,
            password: btoa(password),
          },
        })
        .then((res) => {
          patchLoggedIn(res.data[0].id);
        })
        .catch(() => {});
    },
    { enabled: false },
  );
}

export default usePostLogin;
