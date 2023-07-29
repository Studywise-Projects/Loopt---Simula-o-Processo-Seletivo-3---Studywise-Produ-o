import { Button, Input, Typography } from '@/components';
import { Stack } from '@mui/material';
import styles from '@/styles/pages/login.module.scss';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useAuthStore from '@/stores/auth';
import usePostLogin from '@/services/api/usePostLogin';

function Login() {
  const [username, password, setUsername, setPassword] = useAuthStore(
    (state) => [
      state.username,
      state.password,
      state.setUsername,
      state.setPassword,
    ],
  );

  const handleChangeUser = (event: any) => setUsername(event.target.value);
  const handleChangePassword = (event: any) => setPassword(event.target.value);

  const { refetch } = usePostLogin();

  return (
    <Stack className={styles.main}>
      <Stack className={styles.formLogin}>
        <AccountCircle className={styles.icon} />
        <Typography variant='titleBlue' text='Login' />
        <Input
          id='user'
          label='Usuário'
          type='text'
          value={username}
          handleChange={handleChangeUser}
        />
        <Input
          id='password'
          label='Senha'
          type='password'
          value={password}
          handleChange={handleChangePassword}
        />
        <Button
          text='Entrar'
          handleClick={() => {
            refetch();
          }}
        />
      </Stack>
    </Stack>
  );
}

export default Login;
