import { Box, Card, CardContent, Divider, Stack } from '@mui/material';
import Typography from '../Typography/Typography';
import styles from './CandidatesCard.module.scss';
import Image from 'next/image';
import { ICandidate } from '../../interfaces/ICandidate';
import formatArrayToString from '../../utils/formatArrayToString';
import useCandidatesStore from '../../stores/candidates';
import { useRouter } from 'next/router';

interface ICandidatesCard {
  candidates: Array<ICandidate>;
}

function CandidatesCard({ candidates }: ICandidatesCard) {
  const setSelectedCandidate = useCandidatesStore(
    (state) => state.setSelectedCandidate,
  );

  const router = useRouter();

  return (
    <Card className={styles.card} id={styles.cardRoot}>
      <CardContent className={styles.cardContent}>
        {candidates?.map((candidate: ICandidate) => (
          <>
            <Stack
              data-testid='candidates-card'
              key={candidate.id}
              className={styles.cardCandidate}
              onClick={() => {
                setSelectedCandidate(candidate);
                router.push(`candidates/${candidate.id}`);
              }}
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
                  text={formatArrayToString(candidate.skills, 0, 25)}
                />
              </Box>
            </Stack>
            <Box className={styles.dividerContainer}>
              <Divider className={styles.divider} />
            </Box>
          </>
        ))}
      </CardContent>
    </Card>
  );
}

export default CandidatesCard;
