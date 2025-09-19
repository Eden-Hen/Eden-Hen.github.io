    // src/components/PdfViewer.tsx
    import "./PDFViewer.css"
    import React, { useState } from 'react';
    import { Document, Page, pdfjs } from 'react-pdf';
    import 'react-pdf/dist/Page/AnnotationLayer.css';
    import 'react-pdf/dist/Page/TextLayer.css';

    // Set the workerSrc for pdfjs
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

    interface PdfViewerProps {
      pdfUrl: string;
    }

    const PDFViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
      const [numPages, setNumPages] = useState<number | null>(null);
      const [pageNumber, setPageNumber] = useState(1);

      function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
      }

      return (
        <div>
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber}/>
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button onClick={() => setPageNumber(prev => Math.max(1, prev - 1))}>Previous</button>
          <button onClick={() => setPageNumber(prev => Math.min(numPages || 1, prev + 1))}>Next</button>
        </div>
      );
    };

    export default PDFViewer;