import React from "react";
import MainEmpty from "./MainEmpty";
import Body from "./util/Body";
import ImageBody from "./util/Image.body";

const MainSelected = ({ selected }) => {
  const dataArray = selected.attributes || [];

  return (
    <>
      {selected.name ? (
        <Body>
          <div>MainSelected</div>

          <h1>{selected.name}</h1>
          <ImageBody src={selected.image} alt={selected.name}></ImageBody>
          <p>Description: {selected.description}</p>

          <ul>
            {dataArray.map((data, index) => {
              return (
                <div key={index}>
                  <li>
                    <span>{data.trait_type} : </span>
                    <span>{data.value}</span>
                  </li>
                </div>
              );
            })}
          </ul>
        </Body>
      ) : (
        <MainEmpty />
      )}
    </>
  );
};

export default MainSelected;
