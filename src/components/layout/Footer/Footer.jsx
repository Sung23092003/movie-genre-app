import React from "react";
import logo from "../../../assets/image/logo_movie.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cột 1: Logo và mô tả */}
        <div className="space-y-3">
          <img src={logo} alt="Cinemas Logo" className="w-28" />
          <p className="text-sm">
            Trải nghiệm các bộ phim cùng với MVB một cách tốt nhất với hàng ngàn
            bộ phim hấp dẫn.
          </p>
        </div>

        {/* Cột 2: Menu điều hướng */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white mb-1">Danh mục</h3>
          {["Lịch Chiếu", "Phim", "Tin Tức", ].map(
            (item) => (
              <a
                key={item}
                href="/under-construction"
                className="block hover:text-red-500 transition duration-200"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Cột 3: Mạng xã hội và liên hệ */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Kết nối với chúng tôi
            </h3>
            <div className="flex space-x-4 text-xl">
              <a
                href="/under-construction"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="/under-construction"
                className="hover:text-red-600 transition"
              >
                <FaYoutube />
              </a>
              <a
                href="/under-construction"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Thông tin liên hệ */}
          <div className="text-sm space-y-2">
            <p>
              <span className="font-medium text-white">Điện thoại:</span> 0123
              456 789
            </p>
            <p>
              <span className="font-medium text-white">Email:</span>{" "}
              hsung230903@gmail.com
            </p>
            <p>
              <span className="font-medium text-white">Địa chỉ:</span> 123 Đường
              ABC, Quận Thanh Khê, TP.Đà Nẵng
            </p>
          </div>
        </div>
      </div>

      {/* Phần bản quyền cuối footer */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © 2025 Cinemas. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
