import axios from "axios";

// Tạo một instance của axios với baseURL từ biến môi trường
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
    language: "vi-VN",
  },
});

/**
 * Lấy danh sách phim phổ biến
 * @param {number} page - Số trang
 */
export const getPopularMovies = (page = 1) => {
  return api.get("/movie/popular", {
    params: { page },
  });
};

/**
 * Lấy danh sách phim đang chiếu ngoài rạp
 * @param {number} page - Số trang
 */
export const getNowPlayingMovies = (page = 1) => {
  return api.get("/movie/now_playing", {
    params: { page },
  });
};

/**
 * Lấy danh sách phim sắp chiếu
 * @param {number} page - Số trang
 */
export const getUpcomingMovies = (page = 1) => {
  return api.get("/movie/upcoming", {
    params: { page },
  });
};

/**
 * Tìm kiếm phim theo từ khóa
 * @param {string} query - Từ khóa tìm kiếm
 * @param {number} page - Số trang
 */
export const searchMovies = (query, page = 1) => {
  return api.get("/search/movie", {
    params: {
      query,
      page,
    },
  });
};

/**
 * Lọc phim theo thể loại và mức độ phổ biến
 * @param {string} genreId - ID thể loại (ví dụ: 28 là hành động)
 */
export const filterMoviesByGenre = (genreId) => {
  return api.get("/discover/movie", {
    params: {
      with_genres: genreId,
      sort_by: "popularity.desc",
    },
  });
};

/**
 * Lấy danh sách thể loại phim
 */
export const getMovieGenres = () => {
  return api.get("/genre/movie/list");
};

/**
 * Lấy chi tiết phim theo ID
 * @param {number|string} movieId - ID của phim
 */
export const getMovieDetails = (movieId) => {
  return api.get(`/movie/${movieId}`);
};

/**
 * Lấy trailer (video) của phim theo ID
 * @param {number|string} movieId - ID của phim
 */
export const getMovieTrailers = (movieId) => {
  return api.get(`/movie/${movieId}/videos`);
};
