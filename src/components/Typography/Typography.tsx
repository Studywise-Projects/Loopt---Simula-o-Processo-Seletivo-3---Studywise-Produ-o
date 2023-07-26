import { Typography as TypographyMui } from '@mui/material';
import classNames from 'classnames';
import styles from './Typography.module.scss';

interface ITypography {
  variant: 'header' | 'title' | 'subtitle' | 'subtitle2' | 'body' | 'caption';
  text: string;
}

function Typography({ variant, text }: ITypography) {
  const typographyStyles = classNames(styles.typography, {
    [styles[variant]]: variant,
  });

  return <TypographyMui className={typographyStyles}>{text}</TypographyMui>;
}

export default Typography;
