import { Backdrop, CircularProgress } from '@mui/material';
import styles from './Loading.module.scss';

function Loading() {
  return (
    <Backdrop open={true} className={styles.backdrop}>
      <CircularProgress className={styles.circularProgress} />
    </Backdrop>
  );
}

export default Loading;
