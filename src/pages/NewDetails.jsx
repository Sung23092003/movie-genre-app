import { useNavigate, useParams } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Danh sách tin tức (có thể đưa ra file riêng để tái sử dụng)
  const newsData = [
    {
      id: 1,
      title: "Avengers 5 chính thức khởi quay!",
      description:
        "Bộ phim siêu anh hùng được mong chờ nhất sẽ trở lại vào năm 2025...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM0Yptx6LKKYmOspdCVbXAiwuXYyIYaku-g&s",
      date: "24/03/2025",
      details:
        "Marvel Studios xác nhận Avengers 5 đang trong giai đoạn sản xuất với dàn diễn viên quen thuộc...",
    },
    {
      id: 2,
      title: "Top 10 phim đáng xem nhất tháng này",
      description:
        "Danh sách những bộ phim không thể bỏ lỡ tại rạp trong tháng 3...",
      image:
        "https://static.gamehub.vn/images/2024/10/22/gamehubvn-avengers-doomsday-an-dinh-ngay-khoi-quay-1.jpg",
      date: "22/03/2025",
      details:
        "Danh sách bao gồm nhiều thể loại từ hành động, kinh dị đến tình cảm...",
    },
    {
      id: 3,
      title: "John Wick 5 có thực sự xảy ra?",
      description:
        "Sau cái kết đầy cảm xúc của phần 4, liệu Keanu Reeves có tiếp tục?",
      image:
        "https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2023/9/19/keanu-reeves-john-wick-chapter-4-1677167115-16950967850691310563596.jpg",
      date: "20/03/2025",
      details:
        "Đạo diễn Chad Stahelski úp mở khả năng thực hiện phần 5, nhưng chưa có thông tin chính thức...",
    },
  ];

  // Tìm bài viết theo id trên URL
  const news = newsData.find((item) => item.id === parseInt(id));

  // Trường hợp không tìm thấy bài viết
  if (!news) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="text-3xl text-red-600">Tin tức không tồn tại</span>
      </div>
    );
  }

  return (
    <div className="mt-[60px] p-8 bg-gradient-to-br from-black via-black to-[#4f111e] min-h-screen flex flex-col items-center">
      {/* Nút quay lại */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-red-600 hover:text-red-300 mb-4 self-start ml-8"
      >
        <FaArrowLeft className="mr-2" />
        Quay lại
      </button>

      {/* Tiêu đề tin tức */}
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        {news.title}
      </h1>

      {/* Hình ảnh minh họa */}
      <img
        src={news.image}
        alt={news.title}
        className="mt-w-full max-w-2xl h-auto rounded-lg shadow-lg border border-gray-600"
      />

      {/* Ngày đăng */}
      <p className="text-gray-400 mt-4 flex items-center gap-2 text-lg">
        <MdDateRange size={22} className="text-gray-300" />
        {news.date}
      </p>

      {/* Mô tả ngắn gọn */}
      <p className="mt-4 max-w-2xl text-gray-300 text-lg text-center leading-relaxed">
        {news.description}
      </p>

      {/* Nội dung chi tiết */}
      <div
        className="mt-6 max-w-2xl px-4 text-gray-200 text-base leading-7 text-justify 
                   overflow-y-auto max-h-[300px] 
                   scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
      >
        {news.details}
      </div>
    </div>
  );
};

export default NewsDetail;
