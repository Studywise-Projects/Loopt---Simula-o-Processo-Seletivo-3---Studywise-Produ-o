import { Box, Card, CardContent } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import { Typography } from '..';
import { IJob } from '@/interfaces/IJob';
import styles from './JobDetailsCard.module.scss';
import { ChangeEventHandler } from 'react';

interface IJobDetailsCard {
  job: IJob;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

function JobDetailsCard({ job, value, handleChange }: IJobDetailsCard) {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <SearchBar
          id='searchbar-candidates'
          label='Buscar candidato pelo nome'
          value={value}
          handleChange={handleChange}
          isAuxSearch={true}
        />
        <Typography variant='subtitle' text='Detalhes da Vaga' />
        <Box className={styles.jobDetailsContainer}>
          <Typography variant='body' text='Requisitos' />
          {job?.requirements.map((requirement: string) => (
            <Typography variant='caption' text={requirement} />
          ))}
          <Typography variant='body' text='Diferenciais' />
          {job?.differentials.map((differential: string) => (
            <Typography variant='caption' text={differential} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default JobDetailsCard;
