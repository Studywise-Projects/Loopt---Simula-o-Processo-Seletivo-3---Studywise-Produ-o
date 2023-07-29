import { Stack } from '@mui/material';
import Header from '../Header/Header';
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import useJobsStore from '@/stores/jobs';
import { ReactNode } from 'react';
import styles from './Layout.module.scss';

interface ILayout {
  variant: 'main' | 'basic';
  headerText?: string;
  children: ReactNode;
}

function Layout({ variant, headerText = '', children }: ILayout) {
  const [jobs, selectedJob, setSelectedJob] = useJobsStore((state) => [
    state.jobs,
    state.selectedJob,
    state.setSelectedJob,
  ]);
  const handleChangeSelectedJob = (event: any) =>
    setSelectedJob(event.target.value);

  return (
    <>
      {variant === 'main' ? (
        <Stack className={styles.main}>
          <Header
            icon={
              <LeftDrawer
                optionsSelect={jobs}
                valueSelect={selectedJob}
                handleChangeSelect={handleChangeSelectedJob}
              />
            }
            text={headerText}
          />
          {children}
        </Stack>
      ) : (
        <Stack className={styles.basic}>{children}</Stack>
      )}
    </>
  );
}

export default Layout;
