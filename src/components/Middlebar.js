import React, { useEffect, useRef, useState } from 'react'
import profile from "../images/user.svg";
import { Card, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import photo from "../images/photo.svg";
import video from "../images/video.png";
import article from "../images/article.png";
import steve from "../images/steve.jpg";
import Post from './Post';
import { collection, doc, getDocs } from 'firebase/firestore';
import { auth, database } from '../firebase/setup';

function Middle({ userData }) {

  const postRef = useRef(null)
  const [posts, setPosts] = useState([])

  const getPost =  () => {
    setTimeout(async() => {
      const postDocument = doc(database, "Users", `${auth.currentUser?.uid}`)
    const postRef = collection(postDocument, "Posts")
    try {
    const data = await getDocs(postRef)
   const filterData = data.docs.map((doc)=>({
    ...doc.data(),
    id:doc.id

   }))
   setPosts(filterData)
    } catch (err) {
      console.error(err);

    }
    },10000);
    
  }
  useEffect(()=>{
    getPost()
  },[])



  return (
    <div>
      <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "10px" }}>
        <img style={{ width: "65px", borderRadius: "40px" }} src={userData._document?.data?.value.mapValue.fields.profile_image.stringValue ?? profile} alt="profile" />
        <TextField onClick={() => postRef.current?.click()} variant='outlined' label="start a post" style={{ width: "450px", marginLeft: "20px" }} InputProps={{ sx: { borderRadius:"150" } }} />
        <Post ref={postRef} />
        <img style={{ width: "30px", marginLeft: "20px" }} src={photo} alt="widget" />
        <img style={{ width: "30px", marginLeft: "200px" }} src={video} alt="widget" />
        <img style={{ width: "30px", marginLeft: "200px" }} src={article} alt="widget" />
      </div>
      <div style={{ paddingTop: "20px" }}>
        {posts.map((post)=>{
return<Card sx={{mt:"10px"}}>
  <CardContent>
    <div style={{ display: "flex" }}>
      <mg src={post.profile_image  ?? profile} alt="profile" style={{ width: "30px", borderRadius: "50px" }} />
      <div style={{ marginLeft: "10px" }}>
        <Typography>{post.username}</Typography>
        <Typography sx={{ color: "#BFBFBF" }}>{post.designation}</Typography>
      </div>
    </div>
    <h5>{post.textPost}</h5>
  </CardContent>
 {post.photo && <CardMedia component="img"
    height={250}
    image={steve}>
  
  
  </CardMedia>}
  </Card>

        })}
      </div>
    </div>
  )
}

export default Middle