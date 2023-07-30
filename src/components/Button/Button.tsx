import { Button as ButtonMui } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import styles from './Button.module.scss';
import classNames from 'classnames';
import { KeyboardEventHandler, MouseEventHandler } from 'react';

export interface IButton {
  variant?: 'contained' | 'text' | 'outlined';
  isAuxButton?: boolean;
  isSecondaryButton?: boolean;
  isLoading?: boolean;
  text: string;
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
  handleKeyPress?: KeyboardEventHandler<HTMLButtonElement> | undefined;
}

function Button({
  variant = 'contained',
  isAuxButton = false,
  isSecondaryButton = false,
  isLoading = false,
  text,
  handleClick,
  handleKeyPress,
}: IButton) {
  const buttonStyles = classNames(styles.button, {
    [styles[variant]]: variant && isSecondaryButton === false,
    [styles.auxButton]: isAuxButton === true,
    [styles.secondaryButton]: isSecondaryButton === true,
  });

  return (
    <>
      {isLoading === false ? (
        <ButtonMui
          data-test-id='button'
          variant={variant}
          onClick={handleClick}
          onKeyDown={handleKeyPress}
          className={buttonStyles}
        >
          {text}
        </ButtonMui>
      ) : (
        <LoadingButton
          loading
          className={buttonStyles}
          variant='contained'
        ></LoadingButton>
      )}
    </>
  );
}

export default Button;
