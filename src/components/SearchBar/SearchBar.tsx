import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Stack, TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';
import classNames from 'classnames';
import styles from './SearchBar.module.scss';

interface ISearchBar {
  isAuxSearch?: boolean;
  id: string;
  label: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

function SearchBar({
  isAuxSearch = false,
  id,
  label,
  value,
  handleChange,
}: ISearchBar) {
  const stackStyles = classNames(styles.stack, {
    [styles.auxSearch]: isAuxSearch === true,
  });

  return (
    <Stack className={stackStyles}>
      <TextField
        data-test-id='searchbar'
        variant='standard'
        id={id}
        type='search'
        label={label}
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
      <IconButton className={styles.iconButton}>
        <SearchIcon sx={{ fontSize: '24px' }} className={styles.icon} />
      </IconButton>
    </Stack>
  );
}

export default SearchBar;
