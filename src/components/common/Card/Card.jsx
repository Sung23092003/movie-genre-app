import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Card = ({ movie, showLanguage = true, showRating = true }) => {
  if (!movie?.poster_path) return null;

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group bg-black rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
    >
      <div className="relative w-full h-72 overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
        />
      </div>

      <div className="p-4 bg-[#1a1a1a]">
        <h3 className="text-white font-semibold text-lg truncate group-hover:text-red-500 transition-colors duration-300">
          {movie.title}
        </h3>

        {showLanguage && (
          <p className="mt-1 text-gray-400 text-sm">
            <span className="font-medium">Ngôn ngữ:</span>{" "}
            {movie.original_language.toUpperCase()}
          </p>
        )}

        {showRating && (
          <p className="mt-1 text-sm flex gap-2 items-center text-white">
            <FaStar className="text-yellow-400" />
            {movie.vote_average}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Card;
