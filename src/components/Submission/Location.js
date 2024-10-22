import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Location({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value); 
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Location"
          onChange={handleChange}
        >
          <MenuItem value={'East Asian Library'}>East Asian Library</MenuItem>
          <MenuItem value={'Doe Library'}>Doe Library</MenuItem>
          <MenuItem value={'ASUC Student Union: Martin Luther King Jr. Building'}>
            ASUC Student Union: Martin Luther King Jr. Building
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
