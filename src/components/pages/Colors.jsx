import { ColorModule } from "../modules/ColorModules";
import CollapsibleCode from "../modules/CollapsibleCode";

const scssColors = `$accent: #91a18d;
$highlight: #e6c973;
$background-light: #c4c4c4;
$background-dark: #9b9b9b;
$background-sexy: #282828;
`

export default function Colors() {
    return (
        <div className="page">
            <section>
                <h1>COLORS</h1>
                <p>
                    We mainly focus on various shades of gray (less than 50),
                    with a dark background. a highlight color and an accent color.
                </p>
            </section>

            <section>
                <h2>Color Scheme</h2>
                <ColorModule />
                <h3>SCSS Code</h3>
                <CollapsibleCode code={scssColors} language="scss" />
            </section>
        </div>
    );
}
