import React from "react";
import MainEmpty from "./MainEmpty";
import Body from "./util/Body";
import ImageBody from "./util/Image.body";

const MainSelected = ({ selected }) => {
  const dataArray = selected.attributes || [];
  console.log(dataArray);

  function characterSpecial(text) {
    return text
      .normalize("NFD")
      .replace(
        /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
        "$1"
      )
      .normalize();
  }
  return (
    <>
      {selected.name ? (
        <Body>
          <h1>{selected.name}</h1>
          <ImageBody src={selected.image} alt={selected.name}></ImageBody>
          <h1>{selected.name}</h1>
          <p>Description: {selected.description}</p>

          <ul>
            {dataArray.map((data, index) => {
              let dataTrait_typ = characterSpecial(data.trait_type);
              dataTrait_typ =
                dataTrait_typ.trim().charAt(0).toUpperCase() +
                dataTrait_typ.trim().slice(1);

              let dataValue = characterSpecial(data.value);
              dataValue =
                dataValue.trim().charAt(0).toUpperCase() +
                dataValue.trim().slice(1);

              return (
                <div key={index}>
                  <li>
                    <span>{dataTrait_typ} : </span>
                    <span>{dataValue}</span>
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
