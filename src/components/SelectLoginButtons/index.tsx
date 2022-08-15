import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from './styles';

interface ISelectLoginButtonProps{
    setSelectedPortal: any
}

export default function SelectLoginButton({setSelectedPortal}: ISelectLoginButtonProps) {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
        <Container>
        <Button variant="outlined" size="medium" onClick={() => setSelectedPortal("user")}>
          Motorista
        </Button>
        <Button variant="outlined" size="medium" onClick={() => setSelectedPortal("company")}>
          Companhia
        </Button>
        </Container>
    </Box>
  );
}
