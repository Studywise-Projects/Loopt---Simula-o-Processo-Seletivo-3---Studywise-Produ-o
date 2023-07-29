import { Box, Card, CardActions } from '@mui/material';
import { Typography, Button, SearchBar } from '@/components';
import styles from './TitleCard.module.scss';

interface ITitleCard {
  variant?: 'withAction' | 'withoutAction';
  title: string;
  caption: string;
  actionCaption: string;
  actionButtonText: string;
  handleClick: () => void;
}

function TitleCard({
  variant = 'withAction',
  title,
  caption,
  actionCaption,
  actionButtonText,
  handleClick,
}: ITitleCard) {
  return (
    <>
      {variant === 'withAction' ? (
        <Card className={styles.card}>
          <Box className={styles.content}>
            <Typography variant='titleBlack' text={title} />
            <Typography variant='caption' text={caption} />
          </Box>
          <CardActions className={styles.actions}>
            <Typography variant='caption' text={actionCaption} />
            <Button
              text={actionButtonText}
              handleClick={handleClick}
              isAuxButton={true}
            />
          </CardActions>
        </Card>
      ) : (
        <Card className={styles.card}>
          <Box className={styles.content}>
            <Typography variant='titleBlack' text={title} />
            <Typography variant='caption' text={caption} />
          </Box>
          <CardActions className={styles.actionsSimple}>
            <SearchBar
              isAuxSearch={true}
              id='search'
              label='Pesquisar'
              value={''}
              handleChange={() => undefined}
            />
          </CardActions>
        </Card>
      )}
    </>
  );
}

export default TitleCard;
