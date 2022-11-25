import React from "react";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
const JobEmployeeDetails = () => {
  return (
    <div className="jobemployeedetails">
      <div className="jobemployeedetails_ch">
        <h1>Software Developer</h1>{" "}
        <ModeEditOutlinedIcon style={{ color: "#2394AE" }} />
      </div>
      <div className="employee_details">
        <table>
          <tr className="employee_description_tr">
            <td className="employee_description">Detaprtment</td>
            <td className="__employee__">Sales</td>
          </tr>
          <tr className="employee_description_tr">
            <td className="employee_description">Start Date</td>
            <td className="__employee__">09-08-2022</td>
          </tr>
          <tr className="employee_description_tr">
            <td className="employee_description">Location</td>
            <td className="__employee__">Sylhet,Bangladesh</td>
          </tr>
          <tr className="employee_description_tr">
            <td className="employee_description">Salary</td>
            <td className="__employee__">$45,000</td>
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
            <td className="employee_description">Job Type</td>
            <td className="__employee__">Full Time</td>
          </tr>
        </table>
      </div>
      <div className="job_job_decription_cont">
      <div className="job_job_decription">Job Description</div>
      <div className="__employee__det">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        perspiciatis repellendus rem magni modi sint corporis tempora dolorum.
        Nostrum odit placeat quis fuga accusamus eaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, velit.
      </div>
      </div>
    </div>
  );
};

export default JobEmployeeDetails;
