import { UserCard } from "../modules/UserModules";
import CollapsibleCode from "../modules/CollapsibleCode";

export default function Users() {
  const UserCardHTML = `
  <div className="single-user-container">
      <img className="avatar" src="https://codebunker.projects.multimediatechnology.at/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c0581185c47c63d5784932c9d6665b1644afd482/cat.jpg"></img>
      <div className="single-user-namewrapper">
          <span>CodeBunkerTV</span>
              <div className="single-user-links">
                  <a href="#">
                  <img src={envelope}></img>
                  </a>
                  <a href="#">
                  <img src={eye}></img>
                  </a>
              </div>
      </div>
  </div>`

  const UserCardSCSS = `.single-user-container {
    width: auto;
    height: auto;
    margin: 20px;
    background-color: $background-dark;
    border-radius: 10px;
    padding: 10px;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 3fr 6fr;
    text-decoration: none;
    color: black;
    grid-template-areas: "avatar content";
    transition: all 0.5s ease;
  
    @include tablet {
      margin: 15px;
      max-width: 40%;
    }
  
    @include mobile {
      margin: 15px;
      max-width: 100%;
    }
  
    &:hover {
      background-color: $background-light;
    }
  
    .avatar {
      grid-area: avatar;
      max-width: 80%;
      margin: auto;
    }
  
    .single-user-namewrapper {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      grid-area: content;
  
      & > span {
        font-family: $heading;
        font-size: 1.5rem;
        text-align: center;
      }
  
      .single-user-links {
        width: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
  
        a {
          width: 2rem;
  
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }`

  return (
    <div className="page">
      <section>
        <h1>Users</h1>
        <p>In our application we have User Profile Cards, which really help with the social media aspect of our theme</p>
      </section>
      <section>
        <UserCard />
        <h3>HTML</h3>
        <CollapsibleCode code={UserCardHTML} language="erb" />
        <h3>SCSS</h3>
        <CollapsibleCode code={UserCardSCSS} language="scss" />
      </section>
    </div>
  );
}
