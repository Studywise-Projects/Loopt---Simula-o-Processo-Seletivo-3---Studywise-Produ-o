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
import classNames from 'classnames';
import { Fragment } from 'react';

interface ICandidatesCard {
  candidates: Array<ICandidate>;
  withButton?: boolean;
}

function CandidatesCard({ candidates, withButton = false }: ICandidatesCard) {
  const setSelectedCandidate = useCandidatesStore(
    (state) => state.setSelectedCandidate,
  );

  const highlightContentStyles = classNames(styles.highlightContent, {
    [styles.highlightContentWithButton]: withButton === true,
  });

  const router = useRouter();

  return (
    <Card className={styles.card} id={styles.cardRoot}>
      <CardContent className={styles.cardContent}>
        {candidates?.map((candidate: ICandidate, index: number) => (
          <Fragment key={index}>
            <Stack
              data-testid='candidates-card'
              className={styles.cardCandidate}
              onClick={() => {
                setSelectedCandidate(candidate);
                router.push({
                  pathname: `/candidates/${candidate.id}`,
                  hash:
                    router.asPath === '/candidates'
                      ? router.asPath.replaceAll('/candidates', '')
                      : router.asPath.replaceAll('/candidates/', ''),
                });
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
                <Box className={highlightContentStyles}>
                  <Typography
                    variant='subtitle'
                    text={
                      withButton === false
                        ? candidate.name
                        : formatCandidateName(candidate.name)
                    }
                  />
                  <Typography variant='body' text={`${candidate.age} anos`} />
                </Box>
              </Box>
              <Box className={styles.skillsContent}>
                <Typography variant='subtitle2' text='Habilidades' />
                <Typography
                  variant='caption'
                  text={formatArrayToString({
                    value: candidate.skills,
                    min: 0,
                    max: 25,
                  })}
                />
              </Box>
              {withButton === true ? (
                <Box className={styles.buttonContainer}>
                  <Button
                    text='Selecionar'
                    isAuxButton={true}
                    handleClick={() => {
                      setSelectedCandidate(candidate);
                      router.push({
                        pathname: `/candidates/${candidate.id}`,
                        hash: router.asPath.replace('/candidates/', ''),
                      });
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
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
}

export default CandidatesCard;
