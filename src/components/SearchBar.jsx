import React , {useState}from 'react'
import { Paper, IconButton } from '@mui/material'
import { useNavigate } from 'react-router'
import { Search } from '@mui/icons-material'
const SearchBar = () => {
  return (
    <Paper component="form" onSubmit={() => {}} sx={{
        borderRadius:20,
        pl:2,
        boxShadow: 'none',
        border: '1px solid #e3e3e3',
        mr: {sm: 5}
    }}>
        <input className='search-bar' placeholder='Search....' value="" onChange={() => {}}/>
        <IconButton type='submit' sx={{p:'10px', color: 'red'}}>
            <Search />
        </IconButton>
      
    </Paper>
  )
}

export default SearchBar
