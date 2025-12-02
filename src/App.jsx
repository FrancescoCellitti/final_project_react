import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleFilmPage from "./pages/SingleFilmPage";
import DefaultLayout from "./layaouts/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="films/:id" element={<SingleFilmPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
