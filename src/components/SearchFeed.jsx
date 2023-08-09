
import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from './Videos'
import { fetchFromAPI } from "../utils/fetchFromApi";
import {useParams} from 'react-router-dom'

function SearchFeed() {
    const {searchTerm} = useParams()

    const [videos, setVideos] = useState([])
    useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
      //check api docs 
      //searches for the selected category
    },[searchTerm])
    return (
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {/* flex 2 makes it take more space then the sidebar */}
        <Typography
          variant='h4'
          fontWeight={"bold"}
          mb={2}
          sx={{
            color: "white",
          }}>
         Search Results for :
          <span
            style={{
              color: "#f31503",
            }}>
            {searchTerm}
          </span>
         
        </Typography>
        <Videos videos={videos}/>
      </Box>
      );
}

export default SearchFeed