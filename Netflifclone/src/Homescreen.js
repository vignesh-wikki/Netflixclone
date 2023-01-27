import React from "react";
import Nav from "./Components/Navbar";
import Banner from "./Components/Banner";
import Bigcard from "./Components/Bigcard";
import requests from "./helpers/requests";


const Homescreen = ()=>{
  return(
    <div style={{backgroundColor:"black"}}>
    <Nav />

        <Banner />

        <Bigcard
          title="NETFLIX ORIGINALS"
          fetchURL={requests.fetchNetflixOriginals}
          islarge
        />

        <Bigcard title="Trending" fetchURL={requests.fetchTrending} />

        <Bigcard title="Top Rated" fetchURL={requests.fetchTopRated} />

        <Bigcard title="Action Movies" fetchURL={requests.fetchActionMovies} />

        <Bigcard title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />

        <Bigcard title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />

        <Bigcard title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />

        <Bigcard title="Documentaries" fetchURL={requests.fetchDocumentaries} />

     </div>

  )
}

export default Homescreen;