import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function MarkdownPage() {
  const { dirPrefix, filename } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(`/pages/${dirPrefix}/${filename}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [filename]);

  return <ReactMarkdown
      components={{
        img:({node,...props})=>
          {if(props.src && props.src.includes("mp4")){ // Check if it is a video (i.e. has a .mp4 extension)
            return (
            <video width='50%' autoPlay muted loop>
              <source src={props.src} type="video/mp4"/>
            </video>)
          } else {
            return (<img style={{maxWidth:'75%', maxHeight:'30%'}}{...props}/>) // Add image constraints/styling!
          }}
      }}
    >
      {markdownContent}
    </ReactMarkdown>;
}

export default MarkdownPage;