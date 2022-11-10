import React from 'react'
import './Profile.css'

const Profile = () => {

  const data = [
    {
      profile_lable: "Job",
      profile_des: "Softwere Developer"
    },
    {
      profile_lable: "Date Applied",
      profile_des: "08-08-2022"
    },
    {
      profile_lable: "Application Source",
      profile_des: "Linkedin"
    },
    {
      profile_lable: "Email",
      profile_des: "Google@gmail.com"
    },
    {
      profile_lable: "Location",
      profile_des: "Surat"
    },
    {
      profile_lable: "Phone-Number",
      profile_des: "555-555-5555"
    },
  ]

  return (
    <div className='Profile_main'>
      {
        data.map((e) => {
          return (
            <>
              <div className="profile_inner">
                <div className="profile_lable">
                  <span>{e.profile_lable}</span>
                </div>
                <div className="profile_description">
                  <span>{e.profile_des}</span>
                </div>
              </div>
            </>
          )
        })

      }

    </div>
  )
}

export default Profile
