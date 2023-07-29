import { Button as ButtonMui } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import styles from './Button.module.scss';
import classNames from 'classnames';

export interface IButton {
  variant?: 'contained' | 'text' | 'outlined';
  isAuxButton?: boolean;
  isSecondaryButton?: boolean;
  isLoading?: boolean;
  text: string;
  handleClick: () => void;
}

function Button({
  variant = 'contained',
  isAuxButton = false,
  isSecondaryButton = false,
  isLoading = false,
  text,
  handleClick,
}: IButton) {
  const buttonStyles = classNames(styles.button, {
    [styles[variant]]: variant,
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
