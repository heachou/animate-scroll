import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';

import './global.less';
import About from './pages/about';
import Contact from './pages/contact';
import Service from './pages/service';

export const App: FC = (): JSX.Element =>
  <Router>
    <Routing />
  </Router>;

const Routing: FC = (): JSX.Element =>
  <Routes>
    <Route path='/service' element={<Service />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/about' element={<About />}/>
    <Route path="/home" element={<HomePage />} />
    {/* 重定向到首页 */}
    <Route path="*" element={<HomePage />} />
  </Routes>;