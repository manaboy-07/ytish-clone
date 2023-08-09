import React , {useState}from 'react'
import { Paper, IconButton } from '@mui/material'
import { useNavigate } from 'react-router'
import { Search } from '@mui/icons-material'
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
     e.preventDefault();
      if(searchTerm){
        navigate(`/search/${searchTerm}`)
        setSearchTerm('');

      }
    }
  return (
    <Paper component="form" onSubmit={handleSubmit} sx={{
        borderRadius:20,
        pl:2,
        boxShadow: 'none',
        border: '1px solid #e3e3e3',
        mr: {sm: 5}
    }}>
        <input className='search-bar' onChange={(e) => setSearchTerm(e.target.value)}  placeholder='Search....' value={searchTerm} />
        <IconButton type='submit' sx={{p:'10px', color: 'red'}}>
            <Search />
        </IconButton>
      
    </Paper>
  )
}

export default SearchBar
