import { Box, Card, CardContent, Divider, Stack } from '@mui/material';
import { Button, Typography } from '@/components/index';
import styles from './CandidatesCard.module.scss';
import Image from 'next/image';
import { ICandidate } from '@/interfaces/ICandidate';
import formatArrayToString from '@/utils/formatArrayToString';

interface ICandidatesCard {
  candidates: Array<ICandidate>;
  handleClick: () => void;
}

function CandidatesCard({ candidates, handleClick }: ICandidatesCard) {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        {candidates?.map((candidate: ICandidate) => (
          <>
            <Stack
              key={candidate.id}
              className={styles.cardCandidate}
              onClick={handleClick}
            >
              <Box className={styles.cardHighlight}>
                <Image
                  src={candidate.picture}
                  alt={candidate.name}
                  width={64}
                  height={64}
                  className={styles.profilePicture}
                />
                <Box className={styles.highlightContent}>
                  <Typography variant='subtitle' text={candidate.name} />
                  <Typography variant='body' text={`${candidate.age} anos`} />
                </Box>
              </Box>
              <Box className={styles.skillsContent}>
                <Typography variant='subtitle2' text='Habilidades' />
                <Typography
                  variant='caption'
                  text={formatArrayToString(candidate.skills, 0, 30)}
                />
              </Box>
            </Stack>
            <Divider className={styles.divider} />
          </>
        ))}
      </CardContent>
    </Card>
  );
}

export default CandidatesCard;
