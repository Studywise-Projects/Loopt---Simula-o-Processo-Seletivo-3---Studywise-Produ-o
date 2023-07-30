import { TextField } from '@mui/material';
import styles from './Input.module.scss';
import { ChangeEventHandler, KeyboardEventHandler } from 'react';

interface IInput {
  required?: boolean;
  id: string;
  label: string;
  type: 'text' | 'password';
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleKeyPress: KeyboardEventHandler<HTMLDivElement> | undefined;
}

function Input({
  required = false,
  id,
  label,
  type,
  value,
  handleChange,
  handleKeyPress,
}: IInput) {
  return (
    <TextField
      variant='standard'
      required={required}
      id={id}
      label={label}
      type={type}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      data-test-id='input'
      className={styles.input}
    />
  );
}

export default Input;
