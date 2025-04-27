import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Home from './pages/Home.tsx';
import Sidebar from './pages/Sidebar.tsx';
import MatchDetail from './pages/MatchDetail.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/match/:matchId" element={<MatchDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
