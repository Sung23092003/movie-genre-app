import HomePage from "../pages/Home";
import MovieListPage from "../pages/MovieList";
import MovieDetailPage from "../pages/MovieDetail";
import ContactPage from "../pages/contact";
import NewsDetail from "../pages/NewDetails";
import NewsPage from "../pages/News";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/movies",
    page: MovieListPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/movie/:movieId", 
    page: MovieDetailPage,
    isShowHeader: true,
    isShowFooter: true,
  },
   {
    path: "/contact", 
    page: ContactPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/news", 
    page: NewsPage,
    isShowHeader: true,
    isShowFooter: true,
  },
   {
    path: "/news/:id",
    page: NewsDetail,
    isShowHeader: true,
    isShowFooter: true,
  },
];
