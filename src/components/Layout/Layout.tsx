import { Stack } from '@mui/material';
import Header from '../Header/Header';
import { ReactNode } from 'react';
import styles from './Layout.module.scss';

interface ILayout {
  variant: 'main' | 'basic';
  headerVariant?: 'main' | 'return';
  headerText?: string;
  children: ReactNode;
}

function Layout({
  variant,
  headerVariant = 'main',
  headerText = '',
  children,
}: ILayout) {
  return (
    <>
      {variant === 'main' ? (
        <Stack className={styles.main}>
          <Header variant={headerVariant} text={headerText} />
          {children}
        </Stack>
      ) : (
        <Stack className={styles.basic}>{children}</Stack>
      )}
    </>
  );
}

export default Layout;
