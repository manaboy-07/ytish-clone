/** @format */

import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from './Videos'
import { fetchFromAPI } from "../utils/fetchFromApi";
const Feed = () => {
    const
    useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      //check api docs 
      //searches for the selected category
    },[])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}>
        <Sidebar />
        <Typography
          variant='body2'
          className='copyright'
          sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2023 manaFilms
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {/* flex 2 makes it take more space then the sidebar */}
        <Typography
          variant='h4'
          fontWeight={"bold"}
          mb={2}
          sx={{
            color: "white",
          }}>
          New
          <span
            style={{
              color: "#f31503",
            }}>
            Videos
          </span>
         
        </Typography>
        <Videos videos={[]}/>
      </Box>
    </Stack>
  );
};

export default Feed;
