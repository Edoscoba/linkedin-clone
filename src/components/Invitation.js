import { Avatar, Button, List, ListItem, ListItemText, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { auth, database } from './../firebase/setup';

function Invitation() {
    const [user, setUser] = useState([])


    const showrequest = async () => {
        const requestRef = doc(database, "Users", `${auth.currentUser?.uid}`);
        const requestInRef = collection(requestRef, "requestIn")
        try {
            const data = await getDocs(requestInRef)
            const filteredData = data.docs.map((doc) =>({
                ...doc.data(),
                id: doc.id
            }))
            setUser(filteredData)

        } catch (err) {
            console.log(err);
        }
    }
    const deleteReq = async (user)=>{
        const userDoc = doc(database, "Users",`${auth.currentUser?.uid}`)
        const delDocument = doc(userDoc,"RequestIn",`${user.id}` )
        try {
            await deleteDoc(delDocument)
            
        } catch (err) {
            console.error(err);   
        }
    }

    useEffect(() => {
        showrequest()
    }, [user])


    return (
        <div style={{padding:"20x",backgroundColor:"#f6f7f3",height:"100vh"}}>
            {user.map((eachUser)=>{
              return  <Paper>
                    <List>
                        <ListItem>
                            <Avatar src={eachUser.profile_image}/>
                            <ListItemText primary={eachUser.username} secondary={eachUser.designation}/>
                            <Button onClick={()=>deleteReq(eachUser)} sx={{color:"grey"}} size='small'>IGNORE</Button>
                            <Button sx={{ ml: "5px" }} variant='outlined' size='small'>ACCEPT</Button>
                        </ListItem>
                    </List>
                </Paper>
            })}


        </div>
    )
}

export default Invitation