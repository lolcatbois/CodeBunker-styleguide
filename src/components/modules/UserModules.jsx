import "../../styles/modules/UserModule.scss";
import envelope from "../../assets/envelope-regular.svg";
import eye from "../../assets/eye-regular.svg";

export function UserCard() {
    const disableEvent = (event) => {
        event.preventDefault()
    }
    return (
        <div className="module">
            <div className="single-user-container">
                <img className="avatar" src="https://codebunker.projects.multimediatechnology.at/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c0581185c47c63d5784932c9d6665b1644afd482/cat.jpg"/>
                <div className="single-user-namewrapper">
                    <span>CodeBunkerTV</span>
                        <div className="single-user-links">
                            <a href="#">
                            <img src={envelope}/>
                            </a>
                            <a href="#">
                            <img src={eye}/>
                            </a>
                        </div>
                </div>
            </div>
        </div>
    );
}

