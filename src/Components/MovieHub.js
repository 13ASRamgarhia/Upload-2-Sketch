import React, { useContext, useState } from "react";
import MovieSearchData from "../Assets/MovieSearch.json";
import axios from "axios";
import loginContext from "../Context/loginContext";
import { useNavigate } from "react-router-dom";

const MovieHub = () => {
  document.title = "Movie Hub | CineSense";

  const navigate = useNavigate()

  const { setMovieDetail, setProgress } = useContext(loginContext)

  const [searchTerm, setSearchTerm] = useState("");

  const movies = {
    "genres": [
      {
        "title_x": "The Dark Knight",
        "movie_id": 155,
        "poster": "https://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg"
      },
      {
        "title_x": "Inception",
        "movie_id": 27205,
        "poster": "https://image.tmdb.org/t/p/w500//oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
      },
      {
        "title_x": "The Lord of the Rings: The Return of the King",
        "movie_id": 122,
        "poster": "https://image.tmdb.org/t/p/w500//rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"
      },
      {
        "title_x": "The Empire Strikes Back",
        "movie_id": 1891,
        "poster": "https://image.tmdb.org/t/p/w500//nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg"
      },
      {
        "title_x": "The Lord of the Rings: The Fellowship of the Ring",
        "movie_id": 120,
        "poster": "https://image.tmdb.org/t/p/w500//6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
      }
    ],
    "cast": [
      {
        "title_x": "Avatar",
        "movie_id": 19995,
        "poster": "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
      },
      {
        "title_x": "Terminator Salvation",
        "movie_id": 534,
        "poster": "https://image.tmdb.org/t/p/w500//gw6JhlekZgtKUFlDTezq3j5JEPK.jpg"
      },
      {
        "title_x": "Clash of the Titans",
        "movie_id": 18823,
        "poster": "https://image.tmdb.org/t/p/w500//6iHYLipwEyZUPNO8MM3l1yHDaFE.jpg"
      }
    ],
    "crew": [
      {
        "title_x": "Titanic",
        "movie_id": 597,
        "poster": "https://image.tmdb.org/t/p/w500//9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
      },
      {
        "title_x": "Terminator 2: Judgment Day",
        "movie_id": 280,
        "poster": "https://image.tmdb.org/t/p/w500//5M0j0B18abtBI5gi2RhfjjurTqb.jpg"
      },
      {
        "title_x": "Aliens",
        "movie_id": 679,
        "poster": "https://image.tmdb.org/t/p/w500//r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg"
      },
      {
        "title_x": "Avatar",
        "movie_id": 19995,
        "poster": "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
      },
      {
        "title_x": "The Terminator",
        "movie_id": 218,
        "poster": "https://image.tmdb.org/t/p/w500//qvktm0BHcnmDpul4Hz01GIazWPr.jpg"
      }
    ]
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGoClick = () => {
    setSearchTerm("");
  };

  const handlePosterClick = async (movie) => {
    try{
      setProgress(10)
      const res = await axios.get(`https://cinesense-hgch.onrender.com/movie_detail/${movie.movie_id}`)
      setMovieDetail(res)
      setProgress(100)
      navigate("/MovieDetail")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="py-14 min-h-screen ">
      <div className="w-screen relative h-fit bg-headerBG bg-auto laptop:bg-cover bg-no-repeat">
        <div className="header relative w-full h-full flex flex-col laptop:flex-row bg-black/50 laptop:bg-black/10">
          <div className="py-20 laptop:w-[50%]">
            <div className="welcome text-white px-4 laptop:px-48 text-6xl font-bold font-inter">
              <p>Movie Hub</p>
            </div>
            <div className="desc space-y-6 text-white px-4 laptop:px-48 text-2xl w-full laptop:w-[70%] font-inter">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                a expedita hic ex voluptatum nam possimus temporibus
              </p>
            </div>
          </div>
          <div className="laptop:w-[50%] relative justify-center pt-20 flex">
            <div className="relative w-[50%]">
              <div className="relative flex flex-col">
                <div className="flex space-x-4">
                  <div className="flex flex-col w-full">
                    <input
                      className="px-4 py-2 text-lg focus:outline-none bg-gray-100"
                      type="text"
                      placeholder="Search Movies..."
                      value={searchTerm}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    onClick={handleGoClick}
                    className="bg-logoColor px-4 text-xl text-white font-bold"
                    type="button"
                  >
                    Go
                  </button>
                </div>
                <div
                  className={`bg-gray-100 cursor-pointer text-headingColor relative px-4 text-lg w-[86.5%] flex flex-col ${
                    searchTerm ? "border border-gray-100" : ""
                  }`}
                >
                  {MovieSearchData.filter((item) => {
                    const term = searchTerm.toLowerCase();
                    const movieName = item.title_x.toLocaleLowerCase();

                    return (
                      searchTerm &&
                      movieName.startsWith(term) &&
                      item.title_x !== searchTerm
                    );
                  })
                    .slice(0, 8)
                    .map((item) => {
                      return (
                        <div
                          key={item.movie_id}
                          className=""
                          onClick={() => setSearchTerm(item.title_x)}
                        >
                          {item.title_x}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <div className="px-10 flex flex-col">
            <div className="relative flex flex-col">
                <div className="text-3xl font-bold spacing tracking-wide">
                    Popular Movies by Director
                </div>
                <div className="scroll-smooth overflow-x-auto scrollbar whitespace-nowrap max-w-full py-4 flex items-center">
                {movies.crew.map(movie => (
                    <img
                    key={movie.movie_id}
                    src={movie.poster}
                    alt={movie.title_x}
                    className="w-auto h-48 mr-4 cursor-pointer"
                    onClick={handlePosterClick(movie)}
                    />
                ))}
                </div>
            </div>
        </div>
      </div>

      <div className="pt-10">
        <div className="px-10 flex flex-col">
            <div className="relative flex flex-col">
                <div className="text-3xl font-bold spacing tracking-wide">
                    Popular Movies by Actor
                </div>
                <div className="scroll-smooth overflow-x-auto scrollbar whitespace-nowrap max-w-full py-4 flex items-center">
                {movies.cast.map(movie => (
                    <img
                    key={movie.id}
                    src={movie.poster}
                    alt={movie.title}
                    className="w-auto h-48 mr-4 cursor-pointer"
                    onClick={() => console.log(`Clicked on ${movie.title_x}`)}
                    />
                ))}
                </div>
            </div>
        </div>
      </div>

      <div className="pt-10">
        <div className="px-10 flex flex-col">
            <div className="relative flex flex-col">
                <div className="text-3xl font-bold spacing tracking-wide">
                    Popular Movies by Genre
                </div>
                <div className="scroll-smooth overflow-x-auto scrollbar whitespace-nowrap max-w-full py-4 flex items-center">
                {movies.genres.map(movie => (
                    <img
                    key={movie.id}
                    src={movie.poster}
                    alt={movie.title}
                    className="w-auto h-48 mr-4 cursor-pointer"
                    onClick={() => console.log(`Clicked on ${movie.title_x}`)}
                    />
                ))}
                </div>
            </div>
        </div>
      </div>
      
      <div className="pt-10">
        <div className="px-10 flex flex-col">
            <div className="relative flex flex-col">
                <div className="text-3xl font-bold spacing tracking-wide">
                    Other Popular Movies
                </div>
                <div className="scroll-smooth overflow-x-auto scrollbar whitespace-nowrap max-w-full py-4 flex items-center">
                {movies.genres.map(movie => (
                    <img
                    key={movie.id}
                    src={movie.poster}
                    alt={movie.title}
                    className="w-auto h-48 mr-4 cursor-pointer"
                    onClick={() => console.log(`Clicked on ${movie.title_x}`)}
                    />
                ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHub;
