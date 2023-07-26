import { Autocomplete, TextField } from '@mui/material';
import styles from './SelectAutoComplete.module.scss';

interface ISelectAutoComplete {
  options: any;
  label: string;
}

function SelectAutoComplete({ options, label }: ISelectAutoComplete) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
      className={styles.selectAutoComplete}
    />
  );
}

export default SelectAutoComplete;
