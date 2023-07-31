import useAuthStore from '@/stores/auth';
import useErrorStore from '@/stores/error';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

function usePostLogin() {
  const [username, password, setLoggedIn] = useAuthStore((state) => [
    state.username,
    state.password,
    state.setLoggedIn,
  ]);
  const setError = useErrorStore((state) => state.setError);

  const router = useRouter();

  const patchLoggedIn = (id: number) => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then(() => {
        setError('');
        setLoggedIn(true);
        router.push('candidates');
      })
      .catch(() => {
        setError(
          `Algo deu errado. Tente novamente ou entre em contato com um administrador!`,
        );
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
          patchLoggedIn(res.data[0]?.id);
        });
    },
    { enabled: false },
  );
}

export default usePostLogin;
