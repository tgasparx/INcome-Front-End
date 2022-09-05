import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
interface ISelectStatusProps{
    driver: any
    setDriver: any
    companyEmployees: any
    inputColor: string
}
export default function SelectDriver({driver, setDriver, companyEmployees, inputColor}: ISelectStatusProps) {

  const handleChange = (event: SelectChangeEvent) => {
    setDriver(event.target.value);
  };
  function controlSelectColor(){
    if(driver !== ""){
      return "green"
    }else{
      return inputColor
    }
  }

  return (
    
      <FormControl variant="standard" sx={{ m: 1, width: 300, boxShadow: `2px 0.2px 1px ${controlSelectColor()}` }}>
        <InputLabel id="demo-simple-select-standard-label">Selecione</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={driver}
          onChange={handleChange}
          label="Status"
        >
          <MenuItem value="">
          </MenuItem>
          {companyEmployees.employees.all_employees.map((e: any) => {
            return (
        
            <MenuItem value={e.id}>{e.name}</MenuItem>
       
            )
          })}
      
        </Select>
      </FormControl>
    
  
  );
}
