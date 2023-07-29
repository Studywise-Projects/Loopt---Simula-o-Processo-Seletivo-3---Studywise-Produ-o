import { TextField } from '@mui/material';
import styles from './Input.module.scss';
import { ChangeEventHandler } from 'react';

interface IInput {
  required?: boolean;
  id: string;
  label: string;
  type: 'text' | 'password';
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

function Input({
  required = false,
  id,
  label,
  type,
  value,
  handleChange,
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
      data-test-id='input'
      className={styles.input}
    />
  );
}

export default Input;
