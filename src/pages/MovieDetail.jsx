import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieTrailers } from "../services/userService";
import { FaStar } from "react-icons/fa";

function MovieDetail() {
  // Lấy movie ID từ URL
  const { movieId } = useParams();

  // State lưu thông tin phim và trailer
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    // Gọi API lấy chi tiết phim
    const fetchMovie = async () => {
      try {
        const res = await getMovieDetails(movieId);
        setMovie(res.data);
      } catch (err) {
        console.error("Lỗi khi lấy chi tiết phim:", err);
      }
    };

    // Gọi API lấy trailer phim
    const fetchTrailer = async () => {
      try {
        const res = await getMovieTrailers(movieId);
        const trailer = res.data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        setTrailerKey(trailer?.key);
      } catch (err) {
        console.error("Lỗi khi lấy trailer:", err);
      }
    };

    fetchMovie();
    fetchTrailer();
  }, [movieId]);

  // Hiển thị loading nếu dữ liệu chưa sẵn sàng
  if (!movie)
    return <div className="text-white text-center mt-10">Đang tải...</div>;

  return (
    <div className="bg-gray-900 text-white max-w-5xl mx-auto px-20 py-10 rounded-lg shadow-lg">
      {/* Tiêu đề phim */}
      <h1 className="text-4xl font-bold text-center mb-6 text-red-600">
        {movie.title}
      </h1>

      {/* Poster + Nội dung */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow-lg border-4 border-red-600"
        />

        {/* Thông tin chi tiết */}
        <div className="flex-1 space-y-6">
          {/* Thể loại */}
          <div>
            <span className="font-semibold text-red-500">Thể loại: </span>
            {movie.genres.map((genre) => genre.name).join(", ")}
          </div>

          {/* Mô tả */}
          <p className="text-gray-300">{movie.overview}</p>

          {/* Điểm đánh giá */}
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>{movie.vote_average} / 10</span>
          </div>

          {/* Ngôn ngữ */}
          <div>
            <span className="font-semibold text-red-500">Ngôn ngữ: </span>
            {movie.original_language.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Trailer */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Trailer</h2>
        {trailerKey ? (
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="Trailer"
              allowFullScreen
              className="w-full h-96 rounded-lg shadow-lg border-4 border-red-600"
            ></iframe>
          </div>
        ) : (
          <p className="text-gray-400">Chưa có trailer</p>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
