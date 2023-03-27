import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/Home/HomePage';
import "animate.css/animate.min.css";
import './global.less';
import 'react-slideshow-image/dist/styles.css';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Service from './pages/service/service';

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