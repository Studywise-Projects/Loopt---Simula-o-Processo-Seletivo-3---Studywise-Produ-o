import { AppBar, IconButton, Toolbar } from '@mui/material';
import Typography from '../Typography/Typography';
import { ReactNode } from 'react';
import styles from './Header.module.scss';

interface IHeader {
  icon: ReactNode;
  text: string;
  handleClick?: () => void;
}

function Header({ icon, text, handleClick }: IHeader) {
  return (
    <AppBar>
      <Toolbar className={styles.toolbar}>
        <IconButton
          onClick={handleClick}
          data-testId='header'
          className={styles.iconButton}
        >
          {icon}
        </IconButton>
        <Typography variant='header' text={text} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
