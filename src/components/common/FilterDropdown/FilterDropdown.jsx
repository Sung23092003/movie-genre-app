import React, { useEffect, useState } from "react";
import { getMovieGenres } from "../../../services/userService";
import { FaCaretDown } from "react-icons/fa";

const FilterDropdown = ({ selectedGenre, onChange }) => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  // Lấy danh sách thể loại phim từ API khi component mount
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await getMovieGenres();
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Failed to fetch genres", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  // Nếu đang tải dữ liệu, hiển thị loading spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center py-4">
        <div className="w-6 h-6 border-4 border-t-4 border-red-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative inline-block w-full max-w-xs bg-transparent">
      <select
        value={selectedGenre}
        onChange={(e) => onChange(e.target.value)} // Xử lý thay đổi thể loại
        className="w-full px-4 py-2 rounded-md bg-[#1A202C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition duration-200 appearance-none pr-8"
      >
        <option value="">-- Tất cả thể loại --</option>
        {/* Hiển thị các thể loại phim */}
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <FaCaretDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
    </div>
  );
};

export default FilterDropdown;
