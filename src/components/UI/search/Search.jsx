import React, { useEffect, useState } from "react";
import { getData } from "../../../services/getData";
import { getDate } from "../../../services/getDate";
import { FaCloudDownloadAlt, FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import "../../../styles/nav/search.scss";

function Search() {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState({});

  //키워드 저장하기
  const setSearchInfo = (e) => {
    setSearch(e.target.value);
  };

  //날짜 가져오기
  useEffect(() => {
    setDate(getDate());
  }, []);

  //데이터 불러오기
  const submitSearchInfo = async () => {
    await getData(date, search).then((res) => console.log(res));
    setSearch("");
  };

  return (
    <div className="search-bar">
      <div className="location-icon">
        <IoLocationSharp />
      </div>
      <input
        className="search-input"
        onChange={setSearchInfo}
        value={search}
      ></input>
      <div className="search-icon" onClick={submitSearchInfo}>
        <FaSearch />
      </div>
    </div>
  );
}

export default Search;
