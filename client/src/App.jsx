import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TrackingMoodPage from "./pages/TrackingMoodPage";
import MoodPhotoPage from "./pages/MoodPhotoPage";
import MoodPhotoResultPage from "./pages/MoodPhotoResultPage";
import DailyJournalPage from "./pages/DailyJournalPage";
import ArticlePage from "./pages/ArticlePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/track-mood",
          element: <TrackingMoodPage/>,
        },
        {
          path: "/track-mood/mood-photo",
          element: <MoodPhotoPage/>,
        },
        {
          path: "/track-mood/mood-photo/result",
          element: <MoodPhotoResultPage/>,
        },
        {
          path: "/journal",
          element: <DailyJournalPage/>,
        },
        {
          path: "/article",
          element: <ArticlePage/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
