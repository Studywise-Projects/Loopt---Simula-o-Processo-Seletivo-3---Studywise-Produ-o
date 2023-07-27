import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Stack, TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';
import styles from './SearchBar.module.scss';

interface ISearchBar {
  id: string;
  label: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

function SearchBar({ id, label, value, handleChange }: ISearchBar) {
  return (
    <Stack className={styles.stack}>
      <TextField
        data-testId='searchbar'
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
