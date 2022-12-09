import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

//import { useNavigate, useParams } from "react-router"

const Movies = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/movies`);
      const resData = await response.json();
      setMovies(resData);
    };
    fetchData();
  }, []);

  return (
    <main>
      <div className="moviesPage">
        <p>list of movies</p>
      </div>
    </main>
  );
};

export default Movies;
