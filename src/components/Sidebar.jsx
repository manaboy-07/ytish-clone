/** @format */

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { categories } from "../utils/constants";
function Sidebar() {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: {sx: 'auto', md: '95%'},
        flexDirection: {md: 'column'},
      }}
      >
        {
            categories.map((category) => (
                <button className="category-btn" style={{}}>
                   <span>{category.icon}</span>
                   <span>{category.name}</span>
                </button>
            ))
        }
      <h2 className="text-white">I am sidebar</h2>
    </Stack>
  );
}

export default Sidebar;
