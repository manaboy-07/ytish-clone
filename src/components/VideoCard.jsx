import React from 'react'
import {Typography, Card, CardContent, CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import { demoVideoTitle, demoChannelTitle,demoChannelUrl,demoThumbnailUrl,demoVideoUrl } from '../utils/constants'
import { Link } from 'react-router-dom'
const VideoCard = ({video: {id: {videoId}, snippet }}) => {
    console.log(videoId, snippet)
    //destructuring to get the id
    // console.log(video)
  return (
    <Card className='text-white'>
        <Link to={ videoId ? `/video/${videoId}`: demoVideoUrl }>
        <CardMedia alt={snippet?.title} image={snippet?.thumbnails?.high?.url} sx={{width: 358, height:180}} />
        {/* those ?. means if it exits or else leave as undefined */}
        </Link>
      
    </Card>
  )
}

export default VideoCard
