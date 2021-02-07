import "../../styles/modules/ButtonModule.scss"
import { useState } from "react";

export function SubmitButton() {
    const disableEvent = (event) => {
        event.preventDefault()
    }
    return (
        <div className="module submit-module">
            <button onClick={event => disableEvent(event)} href="" className="submit small">Submit</button>
        </div >
    );
}

export function TagButton() {
    {
        const [button1, setButton1] = useState(true)
        const [button2, setButton2] = useState(false)

        return (
            <div className="module tag-module">
                <a onClick={() => setButton1(!button1)} className={button1 ? "tag" : "tag owned"}>React</a>
                <a onClick={() => setButton2(!button2)} className={button2 ? "tag" : "tag owned"}>Rails</a>
            </div>
        );
    }
}
