import React from 'react';
import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import Logo from '../Logo/Logo';
import styles from './LeftDrawer.module.scss';
import Link from 'next/link';
import Select from '../Select/Select';

interface ILeftDrawer {
  optionsSelect: any;
  valueSelect: Object | null;
  handleChangeSelect: any;
}

function LeftDrawer({
  optionsSelect,
  valueSelect,
  handleChangeSelect,
}: ILeftDrawer) {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  return (
    <>
      <IconButton onClick={toggleDrawer(true)} className={styles.iconButton}>
        <MenuIcon sx={{ fontSize: '32px' }} />
      </IconButton>
      <SwipeableDrawer
        anchor='left'
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        className={styles.swipeableDrawer}
        sx={{
          '& .MuiPaper-root': {
            gap: '16px',
            padding: '32px',
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            paddingTop: '16px',
            width: '300px',
          },
        }}
      >
        <Logo variant='horizontal' />
        <Select
          id='select-leftdrawer'
          label='Vaga'
          options={optionsSelect}
          isAuxSelect={true}
          value={valueSelect}
          handleChange={handleChangeSelect}
        />
        <List>
          <Link href='/candidates' className={styles.link}>
            <ListItemButton className={styles.listItem}>
              <ListItemIcon className={styles.listIcon}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home' className={styles.listText} />
            </ListItemButton>
          </Link>

          <Link href='/' className={styles.link}>
            <ListItemButton className={styles.listItem}>
              <ListItemIcon className={styles.listIcon}>
                <StarIcon />
              </ListItemIcon>
              <ListItemText
                primary='Candidato Escolhido'
                className={styles.listText}
              />
            </ListItemButton>
          </Link>

          <Link href='/' className={styles.link}>
            <ListItemButton className={styles.listItem}>
              <ListItemIcon className={styles.listIcon}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText
                primary='Todos os Candidatos'
                className={styles.listText}
              />
            </ListItemButton>
          </Link>
        </List>
      </SwipeableDrawer>
    </>
  );
}

export default LeftDrawer;
