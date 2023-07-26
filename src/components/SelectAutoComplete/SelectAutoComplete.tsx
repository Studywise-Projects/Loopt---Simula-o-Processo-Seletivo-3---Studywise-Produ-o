import { Autocomplete, TextField } from '@mui/material';
import styles from './SelectAutoComplete.module.scss';

interface ISelectAutoComplete {
  options: any;
  label: string;
  value: Object | null;
  handleChange: () => void;
}

function SelectAutoComplete({
  options,
  label,
  value,
  handleChange,
}: ISelectAutoComplete) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
      value={value}
      onChange={handleChange}
      data-testid='selectautocomplete'
      className={styles.selectAutoComplete}
    />
  );
}

export default SelectAutoComplete;
