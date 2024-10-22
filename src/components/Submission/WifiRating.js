import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function WifiRating({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value); // Pass the value back to the parent
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Rating"
          onChange={handleChange}
        >
          <MenuItem value={'Excellent'}>Excellent</MenuItem>
          <MenuItem value={'Good'}>Good</MenuItem>
          <MenuItem value={'Bad'}>Bad</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
