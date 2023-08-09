/** @format */

import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromApi";
const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      
      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideos(videosData?.items)
    };

    fetchResults();
    // to understand check the endpoint usage in the api documentations
  }, [id]);
  
  return (
    <Box>
      <Box>
        <div
          style={{
            background: "rgb(2,0,36)",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(230,8,45,1) 27%, rgba(73,91,119,1) 61%, rgba(52,125,157,1) 72%, rgba(30,162,199,1) 84%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}></div>
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box className='p-2 flex'>Hi</Box>
      <Videos videos={videos}/>
    </Box>
  );
};

export default ChannelDetails;
