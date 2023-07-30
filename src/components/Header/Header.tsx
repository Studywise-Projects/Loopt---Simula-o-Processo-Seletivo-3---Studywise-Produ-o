import { AppBar, Toolbar } from '@mui/material';
import Typography from '../Typography/Typography';
import { ReactNode } from 'react';
import styles from './Header.module.scss';
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import useJobsStore from '../../stores/jobs';

interface IHeader {
  icon?: ReactNode;
  text: string;
}

function Header({ icon, text }: IHeader) {
  const [jobs, selectedJob, setSelectedJob] = useJobsStore((state) => [
    state.jobs,
    state.selectedJob,
    state.setSelectedJob,
  ]);
  const handleChangeSelectJob = (event: any) =>
    setSelectedJob(event.target.value);

  return (
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
  );
}

export default Header;
