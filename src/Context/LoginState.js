import React, { useState } from "react";
import loginContext from "./loginContext";

const LoginState = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);

  const [DirectorPreference, setDirectorPreference] = useState([]);
  const [GenrePreference, setGenrePreference] = useState([]);
  const [ActorPreference, setActorPreference] = useState([]);

  const [loggedInEmail, setLoggedInEmail] = useState("");

  const [gamificationList, setGamificationList] = useState({
    DirectorList: [
      "PeteDocter",
      "ShimakoSato",
      "MaggieGreenwald",
      "CyrusVoris",
      "ShanaLarsen",
      "JoePytka",
      "MikeHodges",
      "BrianPercival",
      "CoryGoodman",
      "PhillipNoyce"
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
      "ScienceFiction"
    ],
    ActorList: [
      "RolandaWatts",
      "JackieBurroughs",
      "JonFoster",
      "DaveKoenig",
      "OanaRusu",
      "BarryCorbin",
      "ChristianClavier",
      "DenzelWhitaker",
      "WilliamCondos",
      "UlrichThomsen"
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
        setLoggedInEmail
      }}
    >
      {props.children}  
    </loginContext.Provider>
  );
};

export default LoginState;
