import { Button, Input, Layout, Typography } from '@/components';
import { Stack } from '@mui/material';
import styles from '@/styles/pages/login.module.scss';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useAuthStore from '@/stores/auth';
import usePostLogin from '@/services/api/usePostLogin';
import { useEffect, useState } from 'react';
import useJobsStore from '@/stores/jobs';
import useErrorStore from '@/stores/error';

function Login() {
  const [error, setError] = useErrorStore((state) => [
    state.error,
    state.setError,
  ]);
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
    if (username.length === 0 || password.length === 0) {
      setError('Preencha os campos corretamente para prosseguir.');
    }
    refetch();
  };
  const handleKeyPressLogin = (event: any) => {
    if (event.key === 'Enter') {
      if (username.length === 0 || password.length === 0) {
        setError('Preencha os campos corretamente para prosseguir.');
      }
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
        {error !== '' ? (
          <Stack className={styles.errorContainer}>
            <Typography variant='error' text={error} />
          </Stack>
        ) : (
          <></>
        )}
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
