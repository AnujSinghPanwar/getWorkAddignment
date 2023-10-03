import React from "react";
import "../App.css";
import { FiUnlock } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiWalletAlt, BiUserPlus } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { TbPointFilled } from "react-icons/tb";
import { MdRestore } from "react-icons/md";
import { BsSave2 } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "antd";
import BtnComponent from "./BtnComponent";

const SecondComponent = ({
  allData,
  setSelectedOptionValue,
  fetchMoreData,
  setInputValue,
  filterData,
  setParamsName,
  loading,
  count,
}) => {
  const companyList = filterData?.sort_by?.data.map((item) => {
    return { value: item.id, label: item.name };
  });
  const params = filterData?.sort_by?.param_name;
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setParamsName(params);
  };
  return (
    <div className="div_second">
      {/* heading */}
      <div className="headingDiv">
        <div className="heading">
          <span>1 - {count} of {count} Opportunities</span>
        </div>
        {/* <div> */}
        <select
          style={{
            borderRadius: "5%",
            border: "none",
            outline: "none",
            width: "30%",
            padding: "1%",
          }}
          onChange={handleChange}
        >
          {companyList?.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {/* </div> */}
      </div>
      {/* heading */}
      <InfiniteScroll
        dataLength={allData.length}
        next={fetchMoreData}
        hasMore={true}
        // loader={<h1>Loading...</h1>}
      >
        {loading && (
          <div className="second_box">
            <div style={{ margin: "2%" }}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        )}
        {count < 1 && (
          <div className="second_box" style={{ background: "#ccd2d9" }}>
            <div
              style={{
                margin: "2%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div>
                <h1>Upload Your Resume</h1>
                <p>
                  Connect with hiring experts and get personalized jobs
                  recommendations
                </p>
                <div
                  style={{
                    width: "40%",
                    background: "#00203F",
                    color: "white",
                    padding: "3%",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  Upload Resume
                </div>
              </div>
              <div>
                <img src="./noDataImg.svg" width={"90%"} />
              </div>
            </div>
          </div>
        )}

        {allData?.map((item, i) => (
          <div className="second_box" key={item.id}>
            <div style={{ margin: "1%" }}>
              <div className="box_div">
                <img
                  src="building.svg"
                  style={{ marginLeft: "5px", width: "5%" }}
                />
                <div className="box_title">
                  <h3>{item.job_title}</h3>
                  <h4>{item?.company?.company_name}</h4>
                </div>
              </div>

              <div className="job_description">
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <FiUnlock style={{ color: "#00203f" }} />
                  <div style={{ lineHeight: "9px" }}>{item.job_type_name}</div>
                  <BiWalletAlt
                    style={{
                      marginLeft: "25px",
                      fontSize: "15px",
                      color: "#00203f",
                    }}
                  />
                  <div style={{ lineHeight: "9px" }}>{item.ctc_value}</div>
                  <AiOutlineUserAdd
                    style={{
                      marginLeft: "25px",
                      fontSize: "16px",
                      color: "#00203f",
                    }}
                  />
                  <div style={{ lineHeight: "9px" }}>
                    {item.eligibility_criteria.experience}
                  </div>
                </div>
              </div>

              <div className="job_description">
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    marginTop: "2%",
                  }}
                >
                  <CiLocationOn style={{ color: "#00203f" }} />
                  <div style={{ lineHeight: "9px" }}>{item.card_location}</div>
                </div>
              </div>
              <div className="job_description">
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    marginTop: "2%",
                    marginBottom: "2%",
                  }}
                >
                  <TbPointFilled style={{ color: "#00203f" }} />
                  <div style={{ lineHeight: "9px" }}>
                    {item.eligibility_criteria.skills[0].skill_name}
                  </div>
                </div>
              </div>

              <hr
                style={{
                  border: "1px solid grey",
                  opacity: 0.3,
                  marginBottom: "1%",
                  width: "97%",
                  margin: "1%",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "3%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <MdRestore style={{ color: "#00203f" }} />
                  <div style={{ lineHeight: "9px" }}>
                    Posted {item.time_ago}
                  </div>
                </div>
                <BsSave2
                  style={{
                    marginLeft: "25px",
                    fontSize: "16px",
                    color: "#00203f",
                    marginRight: "3%",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default SecondComponent;

// {
//   count < 1 && (
//     <div className="second_box" style={{ background: "#ccd2d9" }}>
//       <div
//         style={{
//           margin: "2%",
//           display: "flex",
//           justifyContent: "space-around",
//         }}
//       >
//         <div>
//           <h1>Upload Your Resume</h1>
//           <p>
//             Connect with hiring experts and get personalized jobs
//             recommendations
//           </p>
//           <div
//             style={{
//               width: "40%",
//               background: "#00203F",
//               color: "white",
//               padding: "3%",
//               textAlign: "center",
//               borderRadius: "5px",
//             }}
//           >
//             Upload Resume
//           </div>
//         </div>
//         <div>
//           <img src="./noDataImg.svg" width={"90%"} />
//         </div>
//       </div>
//     </div>
//   );
// }
