import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { AnyARecord } from 'dns';





interface IMenuButtonsProps{
    text: string
    onClick: () => any
    refer: string
}
export default function MenuButtons({text, onClick, refer}: IMenuButtonsProps) {
  function controlColor(){
    if(refer == "order"){
      return "green"
    }else{
      return "red"
    }
    
  }
  function controlHoverColor(){
    if(refer === "order"){
      return "darkgreen"
    }else{
      return "darkred"
    }
  }

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: `${controlColor()}`,
    border: 'none',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: `${controlHoverColor()}`,
     border: 'none',
      boxShadow: 'none'
    },
    '&:active': {
      backgroundColor: `${() => refer === "order" ? "green" : "red"}`,
      boxShadow: 'none'
    },
    '&:focus': {
      boxShadow: 'none'
    },
  });
  return (
    <Stack spacing={4} direction="row" style={{width: "100%", display: "flex", justifyContent: "center"}}>
      <BootstrapButton variant="contained" disableRipple style={{width: "90%", marginTop: "10px"}} onClick={onClick}>
        {text}
      </BootstrapButton>
    </Stack>
  );
}
