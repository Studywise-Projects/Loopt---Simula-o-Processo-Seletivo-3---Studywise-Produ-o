import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectMui,
} from '@mui/material';
import styles from './Select.module.scss';

interface ISelect {
  id: string;
  label: string;
  options: any;
  value: any;
  handleChange: any;
}

function Select({ id, label, options, value, handleChange }: ISelect) {
  return (
    <FormControl>
      <InputLabel id={id}>{label}</InputLabel>
      <SelectMui
        data-testid='select'
        id={id}
        label={label}
        value={value}
        onChange={handleChange}
        className={styles.select}
      >
        {options?.map((option: any, index: number) => (
          <MenuItem key={index} value={option} className={styles.menuItem}>
            {option.label ? option.label : option.name}
          </MenuItem>
        ))}
      </SelectMui>
    </FormControl>
  );
}

export default Select;
