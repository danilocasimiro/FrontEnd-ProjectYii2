import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import dateFormat from "dateformat";
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteAuthUser from '../../../services/deleteAuthUser';
import { useRouter } from 'next/router';

interface Column {
  id: 'id' | 'name' | 'email' | 'genre' | 'type' | 'birthdate' | 'profile' | 'delete';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { id: 'name', label: 'Nome', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 100 },
  { id: 'genre', label: 'Gênero', minWidth: 50 },
  { id: 'type', label: 'Nível', minWidth: 50 },
  { id: 'birthdate', label: 'Data de nascimento', minWidth: 50 },
  { id: 'profile', label: 'Perfil', minWidth: 50 },
  { id: 'delete', label: 'Deletar', minWidth: 50 },
];

export default function TablePeople({ people, token }) {
  const router = useRouter();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleDelete(id) {
    
    DeleteAuthUser(id, token)
    router.push('/dashboard')
  }

  function handleProfile(id) {
    router.push(`/account?id=${id}`)
  }

  const peopleData = people?.data.map((user) => {
    console.log(user)
    if (user) {
      let personData = {
        'id': user.friendly_id,
        'name': user.person.name,
        'email': user.email,
        'birthdate': dateFormat(user.person.birthdate, 'dd/mm/yyyy'),
        'genre': user.person.genre == 'male' ? 'Masculino' : 'Feminino',
        'type': user.type,
        'profile': <IconButton color='inherit' aria-label="view profile"  id={user.friendly_id} component="span" onClick={event => handleProfile(event.currentTarget.id)}>
          <EditIcon />
        </IconButton>,
        'delete': <IconButton color='inherit' id={user.id} component="span" onClick={event => handleDelete(event.currentTarget.id)}>
          <DeleteIcon />
        </IconButton>
      }

      return personData
    }
  })

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.text.disabled,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return people ? (
    <Paper sx={{ width: '80%', overflow: 'hidden', marginLeft: 36, marginTop: 25, position: 'absolute', bgcolor: 'transparent', bordercolor: 'transparent' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {peopleData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={peopleData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  ) : (
    ''
  )
}