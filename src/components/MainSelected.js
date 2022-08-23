import React from "react";

const MainSelected = ({ selected }) => {
  const dataArray = selected.attributes || [];

  return (
    <>
      <div>MainSelected</div>
      <h1>{selected.name}</h1>
      <p>{selected.description}</p>

      <ul>
        {dataArray.map((data, index) => {
          return (
            <div key={index}>
              <li>
                <span>{data.trat_type}</span>
                <span>{data.value}</span>
              </li>
            </div>
          );
        })}
      </ul>
      <img src={selected.image} alt={selected.name}></img>
    </>
  );
};

export default MainSelected;
