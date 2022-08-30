import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Context } from '../../context';
import { useNavigate } from "react-router-dom";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Income
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function CompanyRegistryComponent() {
  const navigate = useNavigate();
  const {handleCreateCompany} = React.useContext(Context)
  async function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const creationData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      cnpj: data.get("cnpj")
    }
   
    try {
      const created: any = await handleCreateCompany(creationData)
      if(created){
    
        navigate("/", { replace: true });
      }else{
      
      }
    } catch (error) {
      console.log("catch",error)
    }
  
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Cadastro
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nome da companhia"
              name="name"
              autoComplete="name"
              type="text"
              autoFocus
            />
                <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de email"
              name="email"
              autoComplete="email"
              type="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="reMail"
              label="Repetir o email"
              name="re-mail"
              autoComplete="email"
              type="text"
              autoFocus
            />
                <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Senha"
              name="password"
              autoComplete="Current-password"
              type="password"
              autoFocus
            />
                <TextField
              margin="normal"
              required
              fullWidth
              id="rePassword"
              label="Repetir a senha"
              name="re-password"
              autoComplete="Current-password"
              type="password"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="cnpj"
              label="Cnpj"
              type="text"
              id="cnpj"
              autoComplete="cnpj"
            />
       
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar
            </Button>
         
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}