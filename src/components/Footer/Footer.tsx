import { Stack } from '@mui/material';
import Typography from '../Typography/Typography';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <Stack className={styles.footer}>
      <Typography
        variant='body'
        text='Desenvolvido por Gabriel Fernandes - 2023'
      />
    </Stack>
  );
}

export default Footer;
