import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Collapsible from "react-collapsible";

export default function CollapsibleCode(props) {

    return (
        <Collapsible trigger="> SHOW" triggerWhenOpen="< CLOSE">
            <SyntaxHighlighter showLineNumber style={gruvboxDark} language={props.language}>
                {props.code}
            </SyntaxHighlighter>
        </Collapsible>
    );

}
