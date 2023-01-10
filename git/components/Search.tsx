import React, { useState, useEffect } from "react";
import { getProduct } from "../api/getProduct";

function SearchBar({ placeholder, data }: any) {
    const itemData = () => {
        const [product, setProduct]: any = useState();
        useEffect(() => {
          getProduct().then((res) => {
            setProduct(res.data);
          });
        }, []);
    }
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder}/>
        <div className="searchIcon"></div>d
      </div>
      <div className="dataResult">
        {/* {data.map((value, key) => {
            return <a href={value.link} target="_blank"><p>
                {value.title}</p></a>
        }
        )} */}
      </div>
    </div>
  );
}

export default SearchBar;
