import React, { useEffect, useState } from "react";
import axios from 'axios';
import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from 'react-router-dom';
function Headlines(){
    const [articles,setArticles] = useState([]);
    const [loader, setLoader]=useState(false);
    const navigate = useNavigate();
    const ClickToNews=(items)=>{
        navigate("/onenews",{
            state: items
        })
    }
    const getNews = ()=>{
        setLoader(true);
        let api = "https://newsapi.org/v2/everything?q=tesla&from=2022-05-02&sortBy=publishedAt&apiKey=61ec6434a3494e55ac75fab46e3865bd";
        
        axios
        .get(api)
        .then((success)=>{
            setLoader(false);
            console.log(success);
            setArticles(success.data.articles);
        })
        .catch((err)=>{
            console.log(err);
            setLoader(false);
            });
        };
        useEffect(() => {
                getNews();
    },[]);


    return(
        <>
        <Typography variant="h4" sx={{textAlign: 'center', color: 'lightslategrey'}}>News From Around The Globe</Typography>
            {loader?(<Box sx={{display:'flex', justifyContent:'center'}}>
            <CardMedia component="img" sx={{ width: 500}} image='https://www.vredestein.co.in/etc.clientlibs/orbit/clientlibs/clientlib-site/resources/images/loader.gif'/>
            </Box>):(
   <Box>
   {
       articles.map((e,i)=>
       <Box onClick={()=>ClickToNews(e)} sx={{boxShadow:'0px 10px 10px rgba(0,0,0,0.2)',padding:'10px',margin:'20px 10px'}}>
               <Box sx={{display: 'flex', alignItems: 'center', paddingBottom: '10px'}}>
               <CardMedia component="img" sx={{ width: 200, marginRight:'10px'}} image={e.urlToImage}/>
           <Typography variant="h6" sx={{color:'darkslategrey'}}>{e.title}</Typography>
           </Box>
           <Box>
           <Typography variant="caption">{e.description}</Typography>
           </Box>
           <Box>
           <Typography variant="caption"  sx={{color:'lightslategrey',display:'flex', justifyContent:'flex-end'}}>{e.publishedAt}</Typography>
           </Box>
           </Box>
       )
   }
   </Box>
            )}
     
        </>
    )
}
export default Headlines;