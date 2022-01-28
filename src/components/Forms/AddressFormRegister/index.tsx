import * as React from 'react';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import styles from './styles.module.scss'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function AddressFormRegister() {

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
          height: 410,
          marginLeft: 120,
          marginRight: 10,
          marginTop: 56,
          borderRadius: 10,
          backgroundColor: 'text.disabled',
        }}
      >
        <InputLabel htmlFor="input-with-icon-adornment" className={styles.title}>
          Dados de endereço
        </InputLabel>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={styles.grid} justifyContent="center">
          <Grid item xs={7}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
                Rua
              </InputLabel>
              <Input id="margin-none"  className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
                Número
              </InputLabel>
              <Input id="margin-none" className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
                Bairro
              </InputLabel>
              <Input id="margin-none" className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
                Cidade
              </InputLabel>
              <Input id="margin-none" className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
                Estado
              </InputLabel>
              <Input id="margin-none" className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
                País
              </InputLabel>
              <Input id="margin-none" className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
                CEP
              </InputLabel>
              <Input id="margin-none" className={styles.input} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}