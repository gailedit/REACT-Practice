import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper // <Paper> is simply a div with a white background and some elevation (looks like it's floating)
      component="form"
      onSubmit={() => {}} // initially set to empty callback function
      sx={{ // "sx" = styles
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2, // "pl" = padding-left
        boxShadow: 'none',
        mr: { sm: 5 } // "mr" = margin-right set to {small devices: 5px}
      }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          value=""
          onChange={() => {}} // initially set to empty callback function
        />
        <IconButton type="submit" sx={{ p: '10px', color: 'red'}}>
          <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar
