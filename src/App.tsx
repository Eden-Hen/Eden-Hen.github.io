import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import MarkdownPage from "./components/MarkdownPage";
import "./App.css";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { pdfjs } from 'react-pdf';

// Configure PDF.js worker (to allow PDFs to be viewed)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

// Website Navigation
const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/:dirPrefix/:filename" element={<MarkdownPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App