import * as React from 'react';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import styles from './styles.module.scss'
import Button from '@mui/material/Button';


export default function AvatarForm({ currentUser }) {

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          width: 600,
          height: 350,
          marginLeft: 37,
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: 'text.disabled',
        }}
      >
        <InputLabel htmlFor="input-with-icon-adornment" className={styles.title}>
          Dados de avatar
        </InputLabel>
        
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={styles.grid} justifyContent="center">
          <Avatar alt="Remy Sharp" src="images/transferir.png" className={styles.avatar} />
        </Grid>
        <p className={styles.textLabelId}>Id: {currentUser?.friendly_id}</p>
        <Button variant="contained" className={styles.buttonDelete}>Deletar conta</Button>

      </Box>
    </>
  )
}