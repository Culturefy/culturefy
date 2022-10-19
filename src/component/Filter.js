import React from 'react'
import './Filter.css'

const filter = () => {
    const ButtonName = [
        {   
            id:1,
            name: 'All'        
        },
        {   
            id:2,
            name: <i class="fa-regular fa-star fil_star"><span> </span> 4</i>    
        },
        {   
            id:3,
            name: 'Commented'        
        },
        {   
            id:4,
            name: 'Advertisments'        
        },
        {   
            id:5,
            name: 'Banners'        
        },
        {   
            id:6,
            name: 'Brands Colors'        
        },
        {   
            id:7,
            name: 'Documents'        
        },
        {   
            id:8,
            name: 'Fonts'        
        },
        {   
            id:9,
            name: 'Hashtags'        
        },
        {   
            id:10,
            name: 'Icons'        
        },
        {   
            id:10,
            name: 'Logos'        
        },
        {   
            id:10,
            name: 'Photos'        
        },
        {   
            id:10,
            name: 'Polls'        
        },
        {   
            id:10,
            name: 'Social Media'        
        },
        {   
            id:10,
            name: 'Tesla Campaign 1'        
        },
        {   
            id:10,
            name: 'Videos'        
        },
        {   
            id:10,
            name: 'WebSites'        
        },
    ]
    return (
        <>

            {
                ButtonName.map((e)=>{
                    return(
                        <>
                        <button className='filter_button'>{e.name}</button>
                        </>
                    )
                })
                
            }
            <button className='filter_add_button'><i class="fa-solid fa-plus"></i></button>
        </>
    )
}

export default filter
