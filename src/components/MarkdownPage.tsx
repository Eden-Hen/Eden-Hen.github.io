import "./MarkdownPage.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import PDFViewer from "./PDFViewer";

function MarkdownPage() {
  const { dirPrefix, filename } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(`/pages/${dirPrefix}/${filename}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [filename]);

  // Define custom pdf component
  // pdf:

  return <ReactMarkdown className="markdown"
      components={{
        img:({node,...props})=>
          {if(props.src && props.src.includes("mp4")){ // Check if it is a video (i.e. has a .mp4 extension)
            return (
            <video width='50%' autoPlay muted loop>
              <source src={props.src} type="video/mp4"/>
            </video>)
          } else if (props.src && props.src.includes("pdf")){ // Check if it a pdf
            return(
              <PDFViewer pdfUrl={props.src} />
            )
          } else {
            return (<img style={{maxWidth:'60%', maxHeight:'450px'}}{...props}/>) // Add image constraints/styling!
          }},
      }}
    >
      {markdownContent}
    </ReactMarkdown>;
}

export default MarkdownPage;