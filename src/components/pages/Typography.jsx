import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Fonts, FontSizes } from "../modules/TypoModules";
import CollapsibleCode from "../modules/CollapsibleCode";

const scssFontImport = `@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=Montserrat:wght@700&display=swap");`;

const fontSizes = `$size-text: 1rem; // Normal Text
$size-heading-small: 1.25rem; // Heading 1
$size-heading: 1.5rem; // Heading 2
$size-heading-big: 2rem; // Heading 3
`;

export default function Typography() {
  return (
    <div className="page">
      <section>
        <h1>TYPOGRAPHY</h1>
        <p>
          We're aiming at developers. Having a monospace font, besides a regular
          sans-serif, should make our target group more comfortable to use the
          app.
        </p>
      </section>
      <section>
        <h2>Fonts</h2>
        <Fonts />
        <h3>SCSS</h3>
        <CollapsibleCode code={scssFontImport} language="scss" />
      </section>
      <section>
        <h2>Font Sizes</h2>
        <FontSizes />
        <h3>SCSS</h3>
        <CollapsibleCode code={fontSizes} language="scss" />
      </section>
    </div>
  );
}
