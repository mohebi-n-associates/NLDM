import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import StudentView from './components/StudentView';
import DashboardView from './components/DashboardView';

function App() {
  const courseHomeHref = import.meta.env.PROD ? '../../../index.html' : '../../index.html';

  return (
    <>
      <nav aria-label="Course and laboratory" className="bg-stone-900 text-stone-50 border-b border-white/10">
        <div className="max-w-6xl min-h-11 mx-auto px-5 py-2 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-300">Psychology 505</span>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <a href={courseHomeHref} className="hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300">NLDM Home</a>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <a href="https://mohebi-associates.org/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300">Mohebi &amp; Associates Lab ↗</a>
          </div>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<StudentView />} />
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/results" element={<DashboardView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
