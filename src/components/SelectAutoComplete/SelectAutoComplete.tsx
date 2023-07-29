import { Autocomplete, TextField } from '@mui/material';
import styles from './SelectAutoComplete.module.scss';
import classNames from 'classnames';

interface ISelectAutoComplete {
  isAuxSelect?: boolean;
  options: any;
  label: string;
  value: any;
  handleChange: any;
}

function SelectAutoComplete({
  isAuxSelect = false,
  options,
  label,
  value,
  handleChange,
}: ISelectAutoComplete) {
  const selectAutoCompleteStyles = classNames(styles.selectAutoComplete, {
    [styles.auxSelect]: isAuxSelect === true,
  });

  return (
    <Autocomplete
      disablePortal
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
      value={value}
      onChange={handleChange}
      data-test-id='selectautocomplete'
      className={selectAutoCompleteStyles}
    />
  );
}

export default SelectAutoComplete;
