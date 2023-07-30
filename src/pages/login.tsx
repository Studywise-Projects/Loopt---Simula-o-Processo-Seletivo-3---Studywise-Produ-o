import { Button, Input, Layout, Typography } from '@/components';
import { Stack } from '@mui/material';
import styles from '@/styles/pages/login.module.scss';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useAuthStore from '@/stores/auth';
import usePostLogin from '@/services/api/usePostLogin';
import { useEffect } from 'react';
import useJobsStore from '@/stores/jobs';

function Login() {
  const [username, password, setUsername, setPassword] = useAuthStore(
    (state) => [
      state.username,
      state.password,
      state.setUsername,
      state.setPassword,
    ],
  );
  const [jobs, selectedJob, setSelecetedJob] = useJobsStore((state) => [
    state.jobs,
    state.selectedJob,
    state.setSelectedJob,
  ]);

  const handleChangeUser = (event: any) => setUsername(event.target.value);
  const handleChangePassword = (event: any) => setPassword(event.target.value);
  const handleClickLogin = () => {
    refetch();
  };
  const handleKeyPressLogin = (event: any) => {
    if (event.key === 'Enter') {
      refetch();
    }
  };

  const { refetch } = usePostLogin();

  useEffect(() => {
    setSelecetedJob(jobs[0]);
  }, [selectedJob.id === 0]);

  return (
    <Layout variant='basic'>
      <Stack className={styles.formLogin}>
        <AccountCircle className={styles.icon} />
        <Typography variant='titleBlue' text='Login' />
        <Input
          id='user'
          label='Usuário'
          type='text'
          value={username}
          handleChange={handleChangeUser}
          handleKeyPress={handleKeyPressLogin}
        />
        <Input
          id='password'
          label='Senha'
          type='password'
          value={password}
          handleChange={handleChangePassword}
          handleKeyPress={handleKeyPressLogin}
        />
        <Button
          text='Entrar'
          handleClick={handleClickLogin}
          handleKeyPress={handleKeyPressLogin}
        />
      </Stack>
    </Layout>
  );
}

export default Login;
