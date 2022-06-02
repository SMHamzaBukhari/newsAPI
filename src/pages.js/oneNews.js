import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {CardMedia} from '@mui/material';
function OneNews(){
    const [oneNews, setOneNews] = useState({});
    const location = useLocation();
    useEffect(()=>{
        console.log(location.state);
        setOneNews(location.state)
    },[]);
    return(
        <>
                <Box  sx={{boxShadow:'0px 10px 10px rgba(0,0,0,0.2)',padding:'10px',margin:'20px 10px'}}>
                <Box>
                <CardMedia component="img" sx={{marginRight:'10px'}} image={oneNews.urlToImage}/>
                </Box>
                <Box>
                <Typography variant="h4" sx={{padding:'10px 0'}}>{oneNews.title}</Typography>
                </Box>
                <Box>
                <Typography variant="p">{oneNews.content}</Typography>
                </Box>
                <Box>
                <Typography variant="caption"  sx={{color:'lightslategrey',display:'flex', justifyContent:'flex-start', margin:'20px 0'}}><Typography variant="caption" sx={{color: 'black', paddingRight:'2px'}}>Author:</Typography>{oneNews.author}</Typography>
                </Box>
                <Box>
                <Typography variant="caption"  sx={{color:'lightslategrey',display:'flex', justifyContent:'flex-end'}}>{oneNews.publishedAt}</Typography>
                </Box>
                </Box>
        </>
    )
}
export default OneNews;