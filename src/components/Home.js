import React from 'react'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'
import Middle from './Middlebar'
import { Grid } from '@mui/material'

function Home({userData}) {
    return (
        <div style={{backgroundColor:"#F6F7F3",height:"100vh",padding:"40px"}}>
            <Grid container spacing={4}>
                <Grid item xs={3}>
                    <Sidebar userData={userData} />
                </Grid>
                <Grid item xs={6}>
                    <Middle userData={userData}/>
                </Grid>
                <Grid item xs={3}>
                    <Rightbar />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home