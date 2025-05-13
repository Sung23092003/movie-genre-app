import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { routes } from "./routers";
import HeaderComponent from "./components/layout/Header/Header";
import FooterComponent from "./components/layout/Footer/Footer";
import "./App.css";
import ChatBoxComponent from "./components/common/ChatBox/ChatBox";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <AppContent />
      </Router>
      <ChatBoxComponent />
    </div>
  );
}

const AppContent = () => {
  const location = useLocation();

  // Kiểm tra nếu là trang Home
  const isHomePage = location.pathname === "/";
  const isContactPage = location.pathname === "/contact";

  return (
    <Routes>
      {routes.map((route) => {
        const Page = route.page;
        if (route.path && typeof route.path === "string") {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <>
                  {route.isShowHeader && <HeaderComponent />}
                  <div
                    className={`${
                      isHomePage || isContactPage
                        ? ""
                        : "mt-[64px] pt-16 mb-[60px]"
                    }`}
                  >
                    <Page />
                  </div>
                  {route.isShowFooter && <FooterComponent />}
                </>
              }
            />
          );
        }
        return null;
      })}
    </Routes>
  );
};

export default App;
