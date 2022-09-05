import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
interface ISelectStatusProps{
    status: any
    setStatus: any
}
export default function SelectStatus({status, setStatus}: ISelectStatusProps) {

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  return (
    
      <FormControl variant="standard" sx={{ m: 1, width: 300, boxShadow: "2px 0.2px 1px orange" }}>
        <InputLabel id="demo-simple-select-standard-label">Selecione</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={status}
          onChange={handleChange}
          label="Status"
          required={true}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value="Pendente">Pendente</MenuItem>
          <MenuItem value="Concluido">Concluído</MenuItem>
        </Select>
      </FormControl>
    
  
  );
}
