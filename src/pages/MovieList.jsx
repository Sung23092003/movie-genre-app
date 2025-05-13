import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Card from "../components/common/Card/Card";
import FilterDropdown from "../components/common/FilterDropdown/FilterDropdown";
import {
  getPopularMovies,
  filterMoviesByGenre,
  searchMovies,
} from "../services/userService";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  // Lấy giá trị từ URL
  const queryParams = new URLSearchParams(location.search);
  const searchQueryFromURL = queryParams.get("query") || "";

  // Đặt lại searchTerm khi query thay đổi trong URL
  useEffect(() => {
    if (searchQueryFromURL) {
      setSearchTerm(searchQueryFromURL);
      setGenre("");
      setPage(1); // Reset trang về 1 khi thay đổi tìm kiếm
    }
  }, [searchQueryFromURL]);

  // Fetch dữ liệu khi thay đổi genre, searchTerm hoặc page
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let res;
        if (searchTerm) {
          res = await searchMovies(searchTerm, page);
        } else if (genre) {
          res = await filterMoviesByGenre(genre, page);
        } else {
          res = await getPopularMovies(page);
        }

        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      } catch (error) {
        console.error("Lỗi khi tải phim:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [genre, searchTerm, page]);

  // Xử lý thay đổi từ ô tìm kiếm (input)
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    setGenre("");
    setPage(1);
    navigate(`/movies?query=${query}`); // Cập nhật URL khi người dùng nhập từ khóa tìm kiếm
  };

  // Xử lý thay đổi thể loại
  const handleGenreChange = (value) => {
    setGenre(value);
    setSearchTerm("");
    setPage(1);
    navigate(`/movies?genre=${value}`); // Cập nhật URL khi người dùng thay đổi thể loại
  };

  return (
    <div className="px-4 max-w-7xl mx-auto">
      {/* Bộ lọc và tìm kiếm */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <FilterDropdown
          selectedGenre={genre}
          onChange={handleGenreChange} // Sử dụng handleGenreChange để cập nhật thể loại
        />
        <input
          type="text"
          placeholder="Tìm phim..."
          value={searchTerm}
          onChange={handleSearchChange} // Cập nhật tìm kiếm khi người dùng thay đổi input
          className="px-4 py-2 rounded-md border border-gray-300 text-black w-full md:w-64"
        />
      </div>

      {/* Danh sách phim */}
      {loading ? (
        <div className="text-white text-center">Đang tải phim...</div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.length > 0 ? (
              movies.map((movie) => <Card key={movie.id} movie={movie} />)
            ) : (
              <p className="text-white">Không tìm thấy phim nào.</p>
            )}
          </div>

          {/* Phân trang */}
          <div className="flex justify-center items-center mt-10 flex-wrap gap-2 text-white">
            {/* Nút Trang trước */}
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="px-3 py-1 bg-black text-white border border-white rounded hover:scale-105 hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
            >
              Trang trước
            </button>

            {/* Nút trang đầu tiên */}
            <button
              onClick={() => setPage(1)}
              className={`px-3 py-1 rounded border transition-all duration-300 ${
                page === 1
                  ? "bg-white text-black font-bold border-black scale-105"
                  : "bg-black text-white border-white hover:bg-white hover:text-black hover:scale-105"
              }`}
            >
              1
            </button>

            {/* Dấu ... phía trước nếu cần */}
            {page > 4 && <span className="px-2 text-black">...</span>}

            {/* Các số trang ở giữa */}
            {Array.from({ length: 3 }, (_, i) => {
              let p;
              if (page <= 3) {
                p = i + 2; // 2, 3, 4
              } else if (page >= totalPages - 2) {
                p = totalPages - 4 + i; // N-3, N-2, N-1
              } else {
                p = page - 1 + i; // page-1, page, page+1
              }

              if (p > 1 && p < totalPages) {
                return (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-3 py-1 rounded border transition-all duration-300 ${
                      page === p
                        ? "bg-white text-black font-bold border-black scale-105"
                        : "bg-black text-white border-white hover:bg-white hover:text-black hover:scale-105"
                    }`}
                  >
                    {p}
                  </button>
                );
              }
              return null;
            })}

            {/* Dấu ... phía sau nếu cần */}
            {page < totalPages - 3 && (
              <span className="px-2 text-black">...</span>
            )}

            {/* Nút trang cuối */}
            {totalPages > 1 && (
              <button
                onClick={() => setPage(totalPages)}
                className={`px-3 py-1 rounded border transition-all duration-300 ${
                  page === totalPages
                    ? "bg-white text-black font-bold border-black scale-105"
                    : "bg-black text-white border-white hover:bg-white hover:text-black hover:scale-105"
                }`}
              >
                {totalPages}
              </button>
            )}

            {/* Nút Trang sau */}
            <button
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              className="px-3 py-1 bg-black text-white border border-white rounded hover:scale-105 hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
            >
              Trang sau
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieList;
