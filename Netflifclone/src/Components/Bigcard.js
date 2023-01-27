import React, { useEffect, useState } from "react";
import "../css/Bigcard.css";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Bigcard = ({ title, fetchURL, islarge = false }) => {
  const [movies, setMovies] = useState([]);

  const base_URL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);

      return request;
    };
    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="card">
        <h3>{title}</h3>
      <div className="card-imgs">
        {movies.map(
          (movie) =>
            ((islarge && movie.poster_path) ||
            (!islarge && movie.backdrop_path)) && 
              <LazyLoadImage
                key={movie.id}
                className={`card-img ${islarge && "card-img-large"}`}
                src={`${base_URL}${
                  islarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
              />
        )}
      </div>
    </div>
   
  );
};

export default Bigcard;
