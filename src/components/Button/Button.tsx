import { Button as ButtonMui } from '@mui/material';
import styles from './Button.module.scss';
import classNames from 'classnames';

export interface IButton {
  variant?: 'contained' | 'text' | 'outlined';
  isAuxButton?: boolean;
  text: string;
  handleClick: () => void;
}

function Button({
  variant = 'contained',
  isAuxButton = false,
  text,
  handleClick,
}: IButton) {
  const buttonStyles = classNames(styles.button, {
    [styles[variant]]: variant,
    [styles.auxButton]: isAuxButton === true,
  });

  return (
    <ButtonMui
      variant={variant}
      onClick={handleClick}
      className={buttonStyles}
      data-testid='button'
    >
      {text}
    </ButtonMui>
  );
}

export default Button;
