// ts-nocheck
import React from 'react'
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import './ApplicationDetails.css'
const index = () => {
    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
      function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
  return (
    <div className="jobemployeedetails_app">
    <div className="jobemployeedetails_ch_app">
      <div className="employee_avtar">
        <Avatar {...stringAvatar('Kent Doddas')} />
      </div>
      <h3>Software Developer</h3>
      <ModeEditOutlinedIcon style={{ color: "#2394AE" }} />
    </div>
    <div style={{display:"flex"}}>
    <div className="employee_avtar"></div>
    <div className="employee_details">
      <table>
        <tr className="employee_description_tr">
          <td className="employee_description">Job</td>
          <td className="__employee__">Software Developer</td>
        </tr>
        <tr className="employee_description_tr">
          <td className="employee_description"> Date Applied</td>
          <td className="__employee__">09-08-2022</td>
        </tr>
        <tr className="employee_description_tr">
          <td className="employee_description">Application Source</td>
          <td className="__employee__">LinkdIn</td>
        </tr>
        <tr className="employee_description_tr">
          <td className="employee_description">Email</td>
          <td className="__employee__">hammadoulbrahim@mail</td>
        </tr>
        <tr className="employee_description_tr">
          <td className="employee_description">Location</td>
          <td className="__employee__">Sylhet,Bangladsh</td>
        </tr>
        <tr className="employee_description_tr">
          <td className="employee_description">Phone Number</td>
          <td className="__employee__">555-5555-5555</td>
        </tr>
        <tr className="employee_description_tr">
          <td className="employee_description">Status</td>
          <td className="__employee__">
          <select className='offerletter_select'>
            <option value="">interviewed</option>
           
            <option value="">Pending</option>
            <option value="">Accepted</option>
            <option value="">Declined</option>
          </select>
          </td>
        </tr>
        <div className='app_btns_con'>
        <button className='app_btns_cover'> <GetAppOutlinedIcon/> Cover Letter</button>
        <button className='app_btns_res'>Resume</button>
        </div>
      </table>
    </div>


    </div>

   
  </div>
  )
}

export default index