import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface ISelectCompProps{
    driver: any
    setDriver: any
    companyEmployees: any
}
export default function SelectComp({driver, setDriver, companyEmployees}: ISelectCompProps) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: any) => {
    setDriver(event.target.value);
  };

  return (
    <div>
    
      <FormControl variant="filled" sx={{ m: 1, minWidth: 200, backgroundColor: "white" }}>
        <InputLabel id="demo-simple-select-filled-label">Motorista</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={driver}
          onChange={handleChange}
          required={true}
        >
         
          {companyEmployees.employees.all_employees.map((e: any) => {
            return <MenuItem value={e.id} key={e.id}>{e.name} </MenuItem>
          })}
          
     
        </Select>
      </FormControl>
    </div>
  );
}
