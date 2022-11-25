import React from 'react'
import './Anofferletter.css'
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";



const Anofferletter = () => {
  return (
    <div className="jobemployeedetails">
      <div className="jobemployeedetails_ch">
        <h1>Software Developer</h1>{" "}
        <ModeEditOutlinedIcon style={{ color: "#2394AE" }} />
      </div>
      <div className="employee_details">
        <table>
          <tr className="employee_description_tr">
            <td className="employee_description">Applicant</td>
            <td className="__employee__">Annabel Summers</td>
          </tr>
          <tr className="employee_description_tr">
            <td className="employee_description">Start Date</td>
            <td className="__employee__">09-08-2022</td>
          </tr>
          <tr className="employee_description_tr">
            <td className="employee_description">Job Type</td>
            <td className="__employee__">Full Time</td>
          </tr>
          <tr className="employee_description_tr">
            <td className="employee_description">Salary</td>
            <td className="__employee__">$45,000</td>
          </tr>
          <tr className="employee_description_tr">
            <td className="employee_description">Salary rate</td>
            <td className="__employee__">Annually</td>
          </tr>
          <tr className="employee_description_tr">
            <td className="employee_description">Status</td>
           <select className='offerletter_select'>
            <option value="">Unsent</option>
            <option value="">Pending</option>
            <option value="">Accepted</option>
            <option value="">Declined</option>
           </select>
            {/* <td className="__employee__">Full Time</td> */}
          </tr>
          <tr className="employee_description_tr">
          <td className="employee_description">
            <button>Upload Documents</button>
          </td>
          </tr>

        </table>
      </div>
    </div>
  )
}

export default Anofferletter
