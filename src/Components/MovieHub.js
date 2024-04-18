import React, { useState } from "react";
import MovieSearchData from "../Assets/MovieSearch.json";
import { Icon } from "semantic-ui-react";

const MovieHub = () => {
  document.title = "Movie Hub | CineSense";

  const [searchTerm, setSearchTerm] = useState("");

  const movies = [
    { id: 1, title: 'Movie 1', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 2, title: 'Movie 2', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 1, title: 'Movie 1', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 2, title: 'Movie 2', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 1, title: 'Movie 1', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 2, title: 'Movie 2', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 1, title: 'Movie 1', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 2, title: 'Movie 2', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 1, title: 'Movie 1', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 2, title: 'Movie 2', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 1, title: 'Movie 1', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 2, title: 'Movie 2', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 1, title: 'Movie 1', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 2, title: 'Movie 2', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 1, title: 'Movie 1', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 2, title: 'Movie 2', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 1, title: 'Movie 1', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    { id: 2, title: 'Movie 2', poster: "https://image.tmdb.org/t/p/w500//kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
    // Add other movie data
  ];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGoClick = () => {
    console.log(searchTerm);
    setSearchTerm("");
  };

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
                    Top 10 Movies by Actor
                </div>
                <div className="scroll-smooth overflow-x-auto scrollbar whitespace-nowrap max-w-full py-4 flex items-center">
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    src={movie.poster}
                    alt={movie.title}
                    className="w-auto h-48 mr-4 cursor-pointer"
                    onClick={() => console.log(`Clicked on ${movie.title}`)}
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
                    Top 10 Movies by Genre
                </div>
                <div className="scroll-smooth overflow-x-auto scrollbar whitespace-nowrap max-w-full py-4 flex items-center">
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    src={movie.poster}
                    alt={movie.title}
                    className="w-auto h-48 mr-4 cursor-pointer"
                    onClick={() => console.log(`Clicked on ${movie.title}`)}
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
                    Top 10 Movies by Something
                </div>
                <div className="scroll-smooth overflow-x-auto scrollbar whitespace-nowrap max-w-full py-4 flex items-center">
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    src={movie.poster}
                    alt={movie.title}
                    className="w-auto h-48 mr-4 cursor-pointer"
                    onClick={() => console.log(`Clicked on ${movie.title}`)}
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
