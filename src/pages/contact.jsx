import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Xử lý thay đổi thông tin liên hệ
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  // Xử lý gửi thông tin liên hệ
  const handleSubmit = (e) => {
    e.preventDefault();
    // Hiển thị thông báo toast sau khi submit
    toast.success("Thông tin liên hệ của bạn đã được gửi!", {
      position: "top-right", 
      autoClose: 3000,
    });
    console.log("Thông tin liên hệ: ", contactInfo);
    setContactInfo({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Contact Form Section */}
      <main className="py-16 px-6 max-w-7xl mx-auto text-gray-300">
        <h1 className="mt-16 text-3xl font-bold mb-6 text-white">
          Liên hệ với chúng tôi
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tên */}
          <div>
            <label className="block text-lg text-gray-100" htmlFor="name">
              Họ và Tên
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactInfo.name}
              onChange={handleContactChange}
              className="w-full px-4 py-2 rounded-md text-black bg-gray-200"
              placeholder="Nhập họ và tên của bạn"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg text-gray-100" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactInfo.email}
              onChange={handleContactChange}
              className="w-full px-4 py-2 rounded-md text-black bg-gray-200"
              placeholder="Nhập email của bạn"
            />
          </div>

          {/* Tin nhắn */}
          <div>
            <label className="block text-lg text-gray-100" htmlFor="message">
              Tin nhắn
            </label>
            <textarea
              id="message"
              name="message"
              value={contactInfo.message}
              onChange={handleContactChange}
              className="w-full px-4 py-2 rounded-md text-black bg-gray-200"
              placeholder="Nhập tin nhắn của bạn"
              rows="5"
            />
          </div>

          {/* Nút gửi */}
          <button
            type="submit"
            className="w-full bg-[#E63946] text-white px-4 py-2 rounded-md hover:opacity-80"
          >
            Gửi
          </button>
        </form>
      </main>

      <ToastContainer />
    </div>
  );
};

export default Contact;
