import React , {useEffect, useState}from 'react'
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Link , useParams} from "react-router-dom";
import ReactPlayer from 'react-player';
function VideoDetail() {
    const {id} = useParams();
    const [videoDetail, setVideoDetail] = useState([])
    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(data => setVideoDetail(data.items[0]) )

    },[id])
    if(!videoDetail?.snippet) return 'Loading';
    const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail
    // check the docs
  return (
    <Box minHeight={'95vh'}>
        <Stack direction={{xs:'column',md:'row'}}>
            <Box flex={1}>
                <Box sx={{width: '100%',position:'sticky', top:'86px'}}>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
                    <Typography color='#fff' variant='h5' fontWeight='bold'>
                       {title}
                    </Typography>
                    <Stack direction='row' justifyContent='space-between' sx={{
                        color: '#fff'
                    }} py={1} px={2}>
                   <Link to={`/channel/${channelId}`}>
                     <Typography>
                        {channelTitle}
                      </Typography>
                      </Link>
                    </Stack>
                </Box>
            </Box>
            </Stack>
    </Box>
  )
}

export default VideoDetail