import React, { useState } from "react";
import loginContext from "./loginContext";

const LoginState = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);

  const [DirectorPreference, setDirectorPreference] = useState([]);
  const [GenrePreference, setGenrePreference] = useState([]);
  const [ActorPreference, setActorPreference] = useState([]);

  const [movieHub, setMovieHub] = useState([])

  const [movieDetail, setMovieDetail] = useState({})

  const [loggedInEmail, setLoggedInEmail] = useState("email");

  const [movieDetailName, setMovieDetailName] = useState({})

  const [gamificationList, setGamificationList] = useState({
    DirectorList: [
      "Pete Docter",
      "Shimako Sato",
      "Maggie Greenwald",
      "Cyrus Voris",
      "Shana Larsen",
      "Joe Pytka",
      "Mike Hodges",
      "Brian Percival",
      "Cory Goodman",
      "Phillip Noyce"
    ],
    GenreList: [
      "Romance",
      "Thriller",
      "Comedy",
      "Horror",
      "War",
      "Fantasy",
      "Mystery",
      "Drama",
      "Crime",
      "Science Fiction"
    ],
    ActorList: [
      "Rolanda Watts",
      "Jackie Burroughs",
      "Jon Foster",
      "Dave Koenig",
      "Oana Rusu",
      "Barry Corbin",
      "Christian Clavier",
      "Denzel Whitaker",
      "William Condos",
      "Ulrich Thomsen"
    ]
  });

  return (
    <loginContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        darkMode,
        setDarkMode,
        progress,
        setProgress,
        gamificationList,
        setGamificationList,
        DirectorPreference,
        setDirectorPreference,
        GenrePreference,
        setGenrePreference,
        ActorPreference,
        setActorPreference,
        loggedInEmail,
        setLoggedInEmail,
        movieDetail,
        setMovieDetail,
        movieHub,
        setMovieHub,
        movieDetailName,
        setMovieDetailName
      }}
    >
      {props.children}  
    </loginContext.Provider>
  );
};

export default LoginState;
