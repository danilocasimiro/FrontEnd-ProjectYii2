import * as React from 'react';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel';
import dateFormat from "dateformat";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import styles from './styles.module.scss'

export default function UserFormRegister() {

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          height: 350,
          marginLeft: 120,
          marginRight: 10,
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: 'text.disabled',
          displayFlex: 'space-between'
        }}
      >
        <InputLabel htmlFor="input-with-icon-adornment" className={styles.title}>
          Dados do usuário
        </InputLabel>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={styles.grid} justifyContent="center">
          <Grid item xs={7}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
                Nome
              </InputLabel>
              <Input id="margin-none" className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
                Nível
              </InputLabel>
              <Input id="margin-none" className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
                Email
              </InputLabel>
              <Input id="margin-none" className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
                Gênero
              </InputLabel>
              <Input id="margin-none" className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
                Data de aniversário
              </InputLabel>
              <Input id="margin-none" className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
                Telefone
              </InputLabel>
              <Input id="margin-none" className={styles.input} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}