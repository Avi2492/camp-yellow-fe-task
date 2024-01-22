import React from "react";
import HeroSection from "../components/hero/HeroSection";
import RowMovies from "../components/row/RowMovies";
import requests from "../Request";

function Home() {
  return (
    <div>
      <HeroSection />
      <RowMovies rowId="1" title="Popular" fetchUrl={requests.requestPopular} />
      <RowMovies
        rowId="2"
        title="Trending"
        fetchUrl={requests.requestTrending}
      />
      <RowMovies
        rowId="3"
        title="TopRated"
        fetchUrl={requests.requestTopRated}
      />
      <RowMovies
        rowId="4"
        title="UpComing"
        fetchUrl={requests.requestUpcoming}
      />
    </div>
  );
}

export default Home;
