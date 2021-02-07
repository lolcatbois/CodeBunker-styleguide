import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { SubmitButton, TagButton } from "../modules/ButtonModules";

export default function Buttons() {
    const submitButtonHTML = `<input type="submit" class="submit small">`
    const submitButtonERB = `<%= f.submit "submit", class: "submit" %>`

    const tagButtonHTML = `<a href="#" class="tag"></a>"`
    const tagButtonERB = `<%= link_to tag, remove_tag_user_path(:tagname => tag.to_s, id: current_user),  class: 'tag owned', remote: true, method: :put %>`

    return (
        <div className="page">
            <section>
                <h1>BUTTONS</h1>
                <p>We differiante two types of buttons: Submit-Buttons and Tag-Buttons</p>
            </section>
            <section>
                <h2>Submit Button</h2>
                <p>This should be used in all forms.
                It means that an action will follow the click,
                possibly with a redirect or page reload</p>
                <SubmitButton />
                <h3>HTML</h3>
                <SyntaxHighlighter showLineNumber style={gruvboxDark} language="erb">
                    {submitButtonHTML}
                </SyntaxHighlighter>
            </section>
            <section>
                <h2>Tag Button</h2>
                <p>This button can be toggled between two states.</p>
                <TagButton />
                <h3>HTML</h3>
                <SyntaxHighlighter showLineNumber style={gruvboxDark} language="erb">
                    {tagButtonHTML}
                </SyntaxHighlighter>
            </section>
        </div>
    );
}
