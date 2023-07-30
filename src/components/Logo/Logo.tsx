import Image from 'next/image';
import styles from './Logo.module.scss';

interface ILogo {
  variant: 'horizontal' | 'vertical';
}

function Logo({ variant }: ILogo) {
  return (
    <>
      {variant === 'horizontal' ? (
        <Image
          src='/assets/img/loopt-horizontal-logo.svg'
          alt='Logo da Loopt'
          height={80}
          width={140}
          className={styles.logoHorizontal}
        />
      ) : (
        <Image
          src='/assets/img/loopt-vertical-logo.svg'
          alt='Logo da Loopt'
          height={100}
          width={140}
          className={styles.logoVertical}
        />
      )}
    </>
  );
}

export default Logo;
