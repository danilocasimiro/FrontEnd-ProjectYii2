import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import SearchPeople from '../../../services/searchPeople';
import TablePeople from '../../Tables/TablePeople';

export default function SearchForm({ token }) {

  const [search, setSearch] = useState('');
  const [item, setItem] = useState('');
  const [data, setData] = useState();

  const handleChangeItem = (event: { target: { value: string } }) => {
    setItem(event.target.value);
  };

  const handleChangeSearch = (event: { target: { value: string } }) => {
    setSearch(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await SearchPeople(search, item, token)
    
    setData(response)
  }

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          position: 'absolute',
          marginTop: 12,
          marginLeft: 40,
          borderRadius: 10,
          backgroundColor: 'text.',
          displayFlex: 'space-between'
        }}
      >

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <TextField id="filled-basic" label="Buscar" variant="filled" size="small" value={search} onChange={handleChangeSearch} />
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Por</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={item}
            onChange={handleChangeItem}
            size="small"
          >
            <MenuItem value="friendly_id">ID</MenuItem>
            <MenuItem value="name">Nome</MenuItem>
            <MenuItem value="type">Nível</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <Button type="submit" variant="contained" size="large">Buscar</Button>
        </FormControl>
      </Box>

      <TablePeople people={data} token={token}/>
    </>
  );
}