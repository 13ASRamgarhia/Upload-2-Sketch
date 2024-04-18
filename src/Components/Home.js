import React from "react";
import aboutIllustration from "../Assets/illustrations/aboutIllustartion.svg";
import { Link } from "react-router-dom";

import Appointment from "./Magic";

const Home = () => {
  document.title = "Home | CineSense"

  const services = [
    {
      name: "Movie Insights Hub",
      desc: "Gather comprehensive movie insights in one place"
    },
    {
      name: "Sign-up/Sign-in",
      desc: "Easily access the platform with a user-friendly authentication process",
    },
    {
      name: "Watchlist",
      desc: "Curate your own list of movies to watch later",
    },
    {
      name: "Interactive User experience",
      desc: "Customize your experience and track your activity with personalized profiles",
    },
    {
      name: "Movie Reviews",
      desc: "Access and contribute to a collection of user-generated movie reviews",
    },
    {
      name: "Sentiment Analysis",
      desc: "Gain deeper insights through sentiment analysis of user feedback",
    },
    {
      name: "Recommendations",
      desc: "Get movie recommendations that fit your tastes",
    },
    {
      name: "Search and Filters",
      desc: "Use our easily configurable search and filter tools to find movies quickly",
    },
  ];

  return (
    <div className="py-14">
      <div className="w-screen h-fit bg-headerBG bg-auto laptop:bg-cover bg-no-repeat">
        <div className="header w-full h-full space-y-4 bg-black/50 laptop:bg-black/10">
          <div className="py-20">
            <div className="welcome drop-shadow-xl text-white px-4 laptop:px-48 text-6xl font-bold font-inter">
              <p>Welcome to CineSense</p>
            </div>
            <div className="desc text-white text-justify px-4 laptop:px-48 text-2xl w-full laptop:w-[70%] font-inter">
              <p>
              Your ultimate destination for discovering your next favorite film! Dive into a world of cinematic wonders with our curated collection of movie recommendations tailored just for you. Whether you're a die-hard cinephile or a casual viewer, our intuitive interface makes it a breeze to explore a diverse range of genres, from heart-pounding thrillers to heartwarming dramas and everything in between.
              </p>
            </div>

            <div className="px-4 laptop:px-48 mt-16">
              <button
                className="bg-gradient-to-r from-logoColor to-headingColor text-xl text-white hover:text-white focus:text-white hover:outline hover:outline-offset-2 rounded-lg"
              >
                <Appointment />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 laptop:px-48 pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter">
          WHO ARE WE?
        </p>
        <div className="space-y-1">
          <div className="h-1 w-40 bg-logoColor"></div>
          <div className="h-1 w-32 bg-logoColor"></div>
        </div>
        <div className="py-10 flex flex-col tablet:flex-row space-x-0 tablet:space-x-10 space-y-4 tablet:space-y-0">
          <div className="w-full tablet:w-[70%]">
            <p className="font-inter text-xl text-subHeadingColor mt-6 text-justify">
            We're passionate about the transformative power of film. We're a team of dedicated movie enthusiasts, united by our love for storytelling and our mission to connect audiences with the perfect movies for every mood and moment. With a deep appreciation for the art of cinema, we've curated a platform that goes beyond mere recommendations – we're here to inspire, educate, and elevate your movie-watching experience. Our commitment to excellence drives us to continuously refine our algorithms, update our database, and expand our horizons, ensuring that you always have access to the best that cinema has to offer. Whether you're seeking hidden gems, timeless classics, or the latest blockbusters, trust us to be your trusted guides in the vast world of movies. Join us on this cinematic journey, and let's explore the magic of storytelling together.
            </p>
            <div className="mt-6 laptop:mt-16 flex">
              <Link
                to="/About"
                className="bg-headingColor px-4 py-3 text-white hover:text-white focus:text-white rounded-md text-xl"
              >
                Know more
              </Link>
            </div>
          </div>
          <div className="w-full tablet:w-[30%] flex my-auto">
            <img src={aboutIllustration} alt="about" />
          </div>
        </div>
      </div>

      <div className="px-4 laptop:px-48 pt-10">
        <p className="text-headingColor text-2xl font-medium font-inter">
          OUR SERVICES
        </p>
        <div className="space-y-1">
          <div className="h-1 w-44 bg-logoColor"></div>
          <div className="h-1 w-36 bg-logoColor"></div>
        </div>
        <div className="py-10 px-4 flex flex-col tablet:flex-row space-x-0 tablet:space-x-10 space-y-4 tablet:space-y-0">
          <div className="flex w-full">
            <div className="grid grid-cols-autofit w-full justify-center items-center gap-10 px-4 laptop:px-10 mt-10">
              {services.map((service) => {
                return (
                  <div className="grid grid-cols-autofit gap-10" key={service.name}>
                    <div className="bg-white my-4 p-10 rounded-3xl shadow-lg">
                      <p className="text-2xl text-headingColor font-bold mt-6 mb-3">
                        {service.name}
                      </p>
                      <p className="text-xl text-subHeadingColor">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
