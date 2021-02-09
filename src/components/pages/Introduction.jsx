import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Introduction() {
  return (
    <div className="page">
      <section>
        <h1>CodeBunker</h1>
        <h2>Introduction</h2>
        <p>
          Welcome to the Coding World of what is CodeBunker.
        </p>
        <p>
          This Style Guide is aimed at legacy/minimal Coding Projects.
        </p>
      </section>
      <section>
        <h2>What is CodeBunker?</h2>
        <p>
          CodeBunker is a Programming oriented Social Media Platform for easy communication and sharing of Files, Tips and Code Snippets.
        </p>
      </section>
      <section>
        <h2>What does the CodeBunker Styleguide aim for?</h2>
        <p>
          The whole principle is to keep things as minimal as possible but with subtle additions, which still make the components interesting.
        </p>
        <p>
          As of now, CodeBunker Style Guide allows for easy usage of Colors, minimal Typography Elements and is heavily focused on interactive Buttons and Forms.
        </p>
      </section>
    </div>
  );
}
