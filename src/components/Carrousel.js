import React, { lazy, Suspense, useEffect, useState } from "react";
import Loading from "./Loading";

import Card from "./util/Card";
import Container from "./util/Container";
import Grid from "./util/Grid";
import ImageCard from "./util/ImageCard";
const MainSelected = lazy(() => import("./MainSelected"));

const Carrousel = () => {
  const url = "https://ipfs.moralis.io:2053/ipfs/";

  const items = [
    { id: 1, urlId: "QmP8NVVgDNVbUDqW2xfTd8JZQhVF5qDAxHU2rcmH1yiVAP" },
    { id: 2, urlId: "QmbueU5ooEAkbc4V34G3oeBtBbuS1WXva3MhC2CrKQfmFo" },
    { id: 3, urlId: "QmRN1BmuqLMeTjkNkyqsDa1DmGnhRMWTpkbbt9zsFCZjUr" },
    { id: 4, urlId: "QmXMPbGw5jLCBEjuazLZPESPCDxWrGtQYxWYCDbt41mvgs" },
    { id: 5, urlId: "QmdbHNU3Cm5KTaJgbXqJrCBB2H4CRixF2z3PC7K4YthUDh" },
  ];

  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState([]);

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

  const handleClick = (selected) => {
    setSelected(selected);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!info) {
    return <div>Loading Carosuel...</div>;
  }

  return (
    <>
      <Container>
        <div>Carrousel</div>
        <Grid>
          {info.map((data, index) => {
            return (
              <Card key={index}>
                <div onClick={() => handleClick(data)}>
                  <h1>{data.name}</h1>
                  <ImageCard src={data.image} alt={data.name}></ImageCard>
                </div>
              </Card>
            );
          })}
        </Grid>

        
          <Suspense fallback={<Loading />}>
            <MainSelected selected={selected} />
          </Suspense>
     
      </Container>
    </>
  );
};

export default Carrousel;
