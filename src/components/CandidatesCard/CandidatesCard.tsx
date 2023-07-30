import { Box, Card, CardContent, Divider, Stack } from '@mui/material';
import Typography from '../Typography/Typography';
import styles from './CandidatesCard.module.scss';
import Image from 'next/image';
import { ICandidate } from '../../interfaces/ICandidate';
import useCandidatesStore from '../../stores/candidates';
import { useRouter } from 'next/router';
import Button from '../Button/Button';
import formatCandidateName from '@/utils/formatCandidateName';
import formatArrayToString from '@/utils/formatArrayToString';

interface ICandidatesCard {
  candidates: Array<ICandidate>;
  withButton?: boolean;
}

function CandidatesCard({ candidates, withButton = false }: ICandidatesCard) {
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
                router.push(`${candidate.id}`);
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
                  <Typography
                    variant='subtitle'
                    text={formatCandidateName(candidate.name)}
                  />
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
              {withButton === true ? (
                <Box className={styles.buttonContainer}>
                  <Button
                    text='Selecionar'
                    isAuxButton={true}
                    handleClick={() => {
                      setSelectedCandidate(candidate);
                      router.push(`/candidates/${candidate.id}`);
                    }}
                  />
                </Box>
              ) : (
                <></>
              )}
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
