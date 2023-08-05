/** @format */

import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoUrl,
} from "../utils/constants";
import { Link } from "react-router-dom";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(videoId, snippet);
  //destructuring to get the id
  // console.log(video)
  return (
    <Card sx={{
        width:{md:'320px', xs:'100%'},
        borderRadius: 0,
        boxShadow: 'none'    }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          image={snippet?.thumbnails?.high?.url}
          sx={{ width: 358, height: 180 }}
        />
        {/* those ?. means if it exits or else leave as undefined */}
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: "106px",
        }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' color='#FFF' fontWeight={"bold"}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl}>
          <Typography variant='subtitle2' color='gray' fontWeight={"bold"}>
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{
                fontSize:12,
                color: 'gray',
                ml: '5px'
            }}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
