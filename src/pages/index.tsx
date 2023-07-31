import { Button, Logo, Typography, Select } from '@/components';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/pages/index.module.scss';
import useJobsStore from '@/stores/jobs';
import useGetJobs from '@/services/api/useGetJobs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [jobs, selectedJob, setSelectedJob] = useJobsStore((state) => [
    state.jobs,
    state.selectedJob,
    state.setSelectedJob,
  ]);

  const handleChangeSelectedJob = (event: any) =>
    setSelectedJob(event.target.value);
  const handlePressEnter = (event: any) => {
    if (event.key === 'enter') {
      router.push('login');
    }
  };

  const { refetch } = useGetJobs();

  const router = useRouter();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Stack className={styles.main}>
      <Stack className={styles.leftContainer}>
        <Image
          src='/assets/img/loopt-background.svg'
          alt='loopt background'
          width={512}
          height={800}
          priority={false}
          className={styles.image}
        />
      </Stack>
      <Stack className={styles.rightContainer}>
        <Box className={styles.rightContent}>
          <Logo variant='vertical' />
          <Typography variant='titleBlue' text='Seja bem-vindo!' />
          <Typography
            variant='body'
            text='Esta é a plataforma oficial da Loopt para gestão de processos seletivos em andamento. Abaixo você pode selecionar o processo desejado e avaliar as candidaturas.'
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <Select
              id='jobs-select'
              label='Vaga'
              options={jobs}
              value={selectedJob}
              handleChange={handleChangeSelectedJob}
            />
            <Button
              text='Entrar'
              handleClick={() => {
                router.push('login');
              }}
              handleKeyPress={handlePressEnter}
            />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}
