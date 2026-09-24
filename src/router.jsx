import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Bonos from './pages/Bonos';
import BonoDetalle from './pages/BonoDetalle';
import ComoFunciona from './pages/ComoFunciona';
import Impacto from './pages/Impacto';
import Sumate from './pages/Sumate';

export default function router() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bonos" element={<Bonos />} />
        <Route path="/bonos/:tipo" element={<BonoDetalle />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/impacto" element={<Impacto />} />
        <Route path="/sumate" element={<Sumate />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </MainLayout>
  );
}
