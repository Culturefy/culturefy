import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
const MuiAvtar = () => {
    return (
        <div >
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>                
            <p>User</p>
        </div>
    )
}

export default MuiAvtar
