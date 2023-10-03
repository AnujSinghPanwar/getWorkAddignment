import React from "react";
import "../App.css";
import { BiFilterAlt } from "react-icons/bi";
import MySelect from "./MySelect";
import AsyncSelect from "react-select/async";
import axios from "axios";

const FirstComp = ({
  option,
  filterData,
  inputValue,
  setInputValue,
  setParamsName,
  setSearch,
}) => {
  const companyList = filterData?.company?.data.map((item) => {
    return { value: item.id, label: item.name };
  });
  const companyParams = filterData?.company?.param_name;

  const jobSegmentList = filterData?.job_segment?.data.map((item) => {
    return { value: item.id, label: item.name };
  });
  const jobSegmentParams = filterData?.job_segment?.param_name;

  const jobRoleList = filterData?.job_role_group?.data.map((item) => {
    return { value: item.id, label: item.name };
  });
  const jobRoleParams = filterData?.job_role_group?.param_name;

  const locationList = filterData?.location?.data.map((item) => {
    return { value: item.id, label: item.name };
  });
  const locationParams = filterData?.location?.param_name;

  const industryList = filterData?.industry?.data.map((item) => {
    return { value: item.id, label: item.name };
  });
  const industryParams = filterData?.industry?.param_name;

  const jobTypeList = filterData?.job_type?.data.map((item) => {
    return { value: item.id, label: item.name };
  });
  const jobTypeParams = filterData?.job_type?.param_name;

  const handlerChange = (e, param_name) => {
    setInputValue(e);
    setParamsName(param_name);
  };

  const onChange = (filterData) => {
    filterData: filterData || [];
  };

  const loadOptions = async (inputText, callback) => {
    const { data } = await axios.get(
      `http://niyuktitest.getwork.org/job/student/job/keyword/?search=${inputText}`
    );
    callback(
      data?.data.map((item) => ({ label: item.title, value: item.title }))
    );
  };

  return (
    <div className="div_one">
      <div className="div_inner_one">
        <BiFilterAlt style={{ marginRight: "15px" }} /> Filter By
        <div
          style={{
            height: "1px",
            width: "100%",
            background: "#00203f",
            marginTop: "10px",
            opacity: "0.5",
          }}
        />
        <div style={{ width: "100%",marginTop:"20px" }}>
          <div>Keyword</div>
          <AsyncSelect
            // value={}
            onChange={onChange}
            loadOptions={loadOptions}
          />
        </div>
        <div style={{ width: "100%" }}>
          <MySelect
            title="Company"
            option={companyList}
            inputValue={inputValue}
            onChange={(e) => handlerChange(e, companyParams)}
          />
        </div>
        <div style={{ width: "100%" }}>
          <MySelect
            title="Domain"
            inputValue={inputValue}
            option={jobSegmentList}
            onChange={(e) => handlerChange(e, jobSegmentParams)}
          />
        </div>
        <div style={{ width: "100%" }}>
          <MySelect
            title="Job Role"
            option={jobRoleList}
            inputValue={inputValue}
            onChange={(e) => handlerChange(e, jobRoleParams)}
          />
        </div>
        <div style={{ width: "100%" }}>
          <MySelect
            title="Location"
            option={locationList}
            inputValue={inputValue}
            onChange={(e) => handlerChange(e, locationParams)}
            // option={option}
          />
        </div>
        <div style={{ width: "100%" }}>
          <MySelect
            title="Industy"
            option={industryList}
            inputValue={inputValue}
            onChange={(e) => handlerChange(e, industryParams)}
            // option={option}
          />
        </div>
        <div style={{ width: "100%" }}>
          <MySelect
            title="Job Type"
            option={jobTypeList}
            inputValue={inputValue}
            onChange={(e) => handlerChange(e, jobTypeParams)}
            // option={option}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstComp;
