import React, { useEffect, useState } from "react";
import FirstComp from "./components/FirstComp";
import axios from "axios";
import SecondComponent from "./components/SecondComponent";
import { Skeleton } from "antd";
import ThirdComponent from "./components/ThirdComponent";

const App = () => {
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [paramsName, setParamsName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [noData, setNoData] = useState(null);

  console.log(noData);
  const option = [
    { value: "React", label: "React" },
    { value: "Redux", label: "Redux" },
    { value: "Javascript", label: "Javascript" },
    { value: "Html", label: "Html" },
    { value: "Css", label: "Css" },
    { value: "Api", label: "Api" },
    { value: "Sass", label: "Sass" },
  ];

  // console.log(filterData);

  const firstTimeCalled = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `http://niyuktitest.getwork.org/job/student/job/get/?page=${page}&&job_type_id=7`
    );
    setAllData(data?.data?.results);
    getFilterApiCall();
    setLoading(false);
  };

  const getFilterApiCall = async () => {
    const {
      data: { data },
    } = await axios.get(
      "http://niyuktitest.getwork.org/job/student/job/filter"
    );
    setFilterData(data);
  };

  const getCategotyWiseApiCall = async (i, params) => {
    setLoading(true);
    // setPage(page+1)
    const { data } = await axios.get(
      `http://niyuktitest.getwork.org/job/student/job/get/?page=${page}&&${params}=${i.value}`
    );
    setAllData(data?.data?.results);
    setNoData(data?.data?.count);
    setLoading(false);
  };

  const fetchMoreData = async () => {
    // setLoading(true);
    setPage(page + 1);
    const { data } = await axios.get(
      `http://niyuktitest.getwork.org/job/student/job/get/?page=${page}`
    );
    setAllData(allData.concat(data?.data?.results));
    // setLoading(false);
  };

  useEffect(() => {
    // when component render
    firstTimeCalled();
  }, []);

  useEffect(() => {
    // console.log(inputValue, paramsName);
    if (inputValue === null) return;

    getCategotyWiseApiCall(inputValue, paramsName);
  }, [inputValue]);
  return (
    <div className="main_container">
      <div className="inner_container">
        <FirstComp
          option={option}
          filterData={filterData}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setParamsName={setParamsName}
          setSearch={setSearch}
        />
        <SecondComponent
          count={noData}
          allData={allData}
          filterData={filterData}
          setInputValue={setInputValue}
          setParamsName={setParamsName}
          loading={loading}
          fetchMoreData={fetchMoreData}
        />
        <ThirdComponent />
      </div>
    </div>
  );
};

export default App;
