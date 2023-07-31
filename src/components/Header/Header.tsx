import { AppBar, IconButton, Toolbar } from '@mui/material';
import Typography from '../Typography/Typography';
import styles from './Header.module.scss';
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import useJobsStore from '../../stores/jobs';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface IHeader {
  variant?: 'main' | 'return';
  text: string;
}

function Header({ variant = 'main', text }: IHeader) {
  const [jobs, selectedJob, setSelectedJob] = useJobsStore((state) => [
    state.jobs,
    state.selectedJob,
    state.setSelectedJob,
  ]);
  const handleChangeSelectJob = (event: any) =>
    setSelectedJob(event.target.value);

  const router = useRouter();

  return (
    <>
      {variant === 'main' ? (
        <AppBar>
          <Toolbar className={styles.toolbar}>
            <LeftDrawer
              optionsSelect={jobs}
              valueSelect={selectedJob}
              handleChangeSelect={handleChangeSelectJob}
            />
            <Typography variant='header' text={text} />
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar>
          <Toolbar className={styles.toolbar}>
            <IconButton onClick={router.back} className={styles.iconButton}>
              <ArrowBack className={styles.icon} />
            </IconButton>
            <Typography variant='header' text={text} />
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}

export default Header;
