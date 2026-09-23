import "./PDFViewer.css";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PdfViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PdfViewerProps> = React.memo(({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handleDocumentLoadSuccess = ({
    numPages,
  }: {
    numPages: number;
  }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const goToPreviousPage = () => {
    setPageNumber((page) => Math.max(1, page - 1));
  };

  const goToNextPage = () => {
    setPageNumber((page) => Math.min(numPages, page + 1));
  };

  return (
    <div className="pdf-viewer">
      <div className="pdf-page-container">
        <Document
          file={pdfUrl}
          onLoadSuccess={handleDocumentLoadSuccess}
          loading={<div className="pdf-loading">Loading PDF...</div>}
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>

        {/* Previous arrow */}
        <button
          className="pdf-nav pdf-nav-left"
          onClick={goToPreviousPage}
          disabled={pageNumber <= 1}
          aria-label="Previous page"
        >
          ‹
        </button>

        {/* Next arrow */}
        <button
          className="pdf-nav pdf-nav-right"
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          aria-label="Next page"
        >
          ›
        </button>
      </div>

      <div className="pdf-page-number">
        {pageNumber} / {numPages}
      </div>
    </div>
  );
});

export default PDFViewer;