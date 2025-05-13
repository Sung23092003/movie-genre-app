import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPopularMovies, getUpcomingMovies } from "../services/userService";
import Slider from "../components/common/Slider/Slider";
import Card from "../components/common/Card/Card";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]); // Dữ liệu phim phổ biến

  const [upcomingMovies, setUpcomingMovies] = useState([]); // Dữ liệu phim sắp chiếu
  const navigate = useNavigate();

  // Sử dụng useEffect để lấy dữ liệu phim từ API khi trang được tải
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy dữ liệu phim phổ biến
        const popularRes = await getPopularMovies();
        setPopularMovies(popularRes.data.results);

        // Lấy dữ liệu phim sắp chiếu
        const upcomingRes = await getUpcomingMovies();
        setUpcomingMovies(upcomingRes.data.results);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu phim:", err);
      }
    };

    fetchData(); 
  }, []); 

  // Component hiển thị tiêu đề cho mỗi section
  const SectionTitle = ({ title }) => (
    <h2 className="mt-6 text-2xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
      {title}
    </h2>
  );

  return (
    <div className="bg-[#111] text-white min-h-screen">
      {/* Slider banner */}
      <Slider />

      <div className="container mx-auto px-4 py-10">
        {/* Phần phim phổ biến */}
        <SectionTitle title="Phim phổ biến" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularMovies.slice(0, 4).map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Phần phim sắp chiếu */}
        <SectionTitle title="Phim sắp chiếu" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {upcomingMovies.slice(0, 4).map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Nút Xem thêm */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/movies")}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all"
          >
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
