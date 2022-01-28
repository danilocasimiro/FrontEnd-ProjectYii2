import * as React from 'react';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import styles from './styles.module.scss'

export default function SocialNetworksForm({ currentUser }) {

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
console.log(currentUser)
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          width: 600,
          height: 410,
          marginLeft: 37,
          marginTop: 56,
          borderRadius: 10,
          backgroundColor: 'text.disabled',
        }}
      >
        <InputLabel htmlFor="input-with-icon-adornment" className={styles.title}>
          Dados de redes sociais
        </InputLabel>
        <Grid container direction="column" className={styles.grid} justifyContent="center">
          <Grid item xs={7}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
              Website
              </InputLabel>
              <Input id="margin-none" value={currentUser?.socialNetwork.website} className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
              Github
              </InputLabel>
              <Input id="margin-none" value={currentUser?.socialNetwork.github} className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
              Twitter
              </InputLabel>
              <Input id="margin-none" value={currentUser?.socialNetwork.twitter} className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
              Instagram
              </InputLabel>
              <Input id="margin-none" value={currentUser?.socialNetwork.instagram} className={styles.input} />
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item className={styles.item}>
              <InputLabel htmlFor="input-with-icon-adornment" className={styles.label}>
              Facebook
              </InputLabel>
              <Input id="margin-none" value={currentUser?.socialNetwork.facebook} className={styles.input} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}