import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { HomePage } from './pages/HomePage';
import { StorePage } from './pages/StorePage';

import './index.scss';

export const App: FC = (): JSX.Element =>
  <Router>
    <Routing />
  </Router>;

const Routing: FC = (): JSX.Element =>
  <Routes>
    <Route path="/store" element={<StorePage />} />
    <Route path="/" element={<HomePage />} />
  </Routes>;