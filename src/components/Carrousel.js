import React, { useEffect, useState } from "react";

const Carrousel = () => {
  const url = "https://ipfs.moralis.io:2053/ipfs/";

  const items = [
    { id: 1, urlId: "QmP8NVVgDNVbUDqW2xfTd8JZQhVF5qDAxHU2rcmH1yiVAP" },
    { id: 2, urlId: "QmbueU5ooEAkbc4V34G3oeBtBbuS1WXva3MhC2CrKQfmFo" },
    { id: 3, urlId: "QmRN1BmuqLMeTjkNkyqsDa1DmGnhRMWTpkbbt9zsFCZjUr" },
    { id: 4, urlId: "QmXMPbGw5jLCBEjuazLZPESPCDxWrGtQYxWYCDbt41mvgs" },
    { id: 5, urlId: "QmdbHNU3Cm5KTaJgbXqJrCBB2H4CRixF2z3PC7K4YthUDh" },
  ];

  const fetchData = async (idSelected) => {
    const data = await fetch(url + idSelected);
    const response = await data.json();
    setInfo(...response);
  };
  const [info, setInfo] = useState([]);

  const getData = () => {
    const getArrayItems = items.map(async (id) => {
      const data = await fetch(url + id.urlId);
      const response = await data.json();
      return response;
    });

    Promise.all(getArrayItems).then((data) => {
      setInfo(...info, data);
    });
  };

  useEffect(() => {
    getData();
    console.log(info);
  }, []);

  if (!info) {
    return "loading";
  }

  return (
    <>
      <div>Carrousel</div>

      {info.map((data, index) => {
        return (
          <div key={index}>
            <h1>{data.name}</h1>
            <img src={data.image} alt={data.name}></img>
          </div>
        );
      })}
     
    </>
  );
};

export default Carrousel;
