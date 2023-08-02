
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import ChannelDetails from './components/ChannelDetails';
import Feed from './components/Feed';
import SearchFeed from './components/SearchFeed';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
          <Navbar />
          <Routes >
            <Route path='/' exact element={<Feed />}/>
            <Route path='/video/:id' element={<VideoDetail />}/>
            <Route path='/channel/:id' element={<ChannelDetails />}/>
            <Route path='/search/:searchTerm' element={<SearchFeedhFeed />}/>

          </Routes>
            
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
