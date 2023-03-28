import axios from "axios";
import React, { useEffect, useState } from "react";
import Singlecontent from "../components/singlecontent/Singlecontent";

export default function Home() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://movies-tv-shows-database.p.rapidapi.com/',
    params: {movieid: 'tt1375666', page: '10'},
    headers: {
      Type: 'get-similar-movies',
      'X-RapidAPI-Key': '2d3b8bfdc2msh83f6f9b061dc5cbp1d137djsncdb69c401de3',
      'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
    }
  };


  const fetchTrending = async () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(content);
        setContent(response.data.movie_results)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <div className="movie">
        { content.length > 0  && content.map((results,index) =>(
         <Singlecontent
         key={index}
         date={results. release_date}
         img={results.imdb_id}
         title={results.title}
         />
        ))}
      </div>
    </div>
  );
};
