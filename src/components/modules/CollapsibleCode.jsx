import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Collapsible from "react-collapsible";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";
import copySvg from "../../assets/copy.svg"
import checkSvg from "../../assets/check.svg"

export default function CollapsibleCode(props) {

    const [copied, setCopied] = useState(false);

    return (
        <Collapsible transitionTime={350} easing="ease-in-out" trigger="> SHOW" triggerWhenOpen="< CLOSE">

            <CopyToClipboard text={props.code} onCopy={() => setCopied(true)}>
                <div className="copy-field">
                    {copied
                        ? <img alt="copy-icon" src={checkSvg} />
                        : <img alt="copied-icon" src={copySvg} />
                    }
                </div>
            </CopyToClipboard>

            <div className="syntax-wrapper">
                <SyntaxHighlighter wrapLines={true} showLineNumber style={gruvboxDark} language={props.language}>
                    {props.code}
                </SyntaxHighlighter>
            </div>

        </Collapsible >
    );

}
