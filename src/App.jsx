import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layaouts/DefaultLayout';
import Home from './pages/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="film" element={<div className="container py-4">Film</div>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
