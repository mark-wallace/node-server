import React from "react";

const SurveyFields = ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};

export default SurveyFields;
