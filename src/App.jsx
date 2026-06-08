import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoverPage from './pages/CoverPage';
import MagazinePage from './pages/MagazinePage';
import EventsPage from './pages/EventsPage';
import LabelPage from './pages/LabelPage';
import ChartsPage from './pages/ChartsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/magazine" element={<MagazinePage />} />
        <Route path="/magazine/events" element={<EventsPage />} />
        <Route path="/label" element={<LabelPage />} />
        <Route path="/charts" element={<ChartsPage />} />
      </Routes>
    </BrowserRouter>
  );
}