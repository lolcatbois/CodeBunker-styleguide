import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { LoginForm, ContentForm } from "../modules/FormModules";
import Collapsible from "react-collapsible";
import CollapsibleCode from "../modules/CollapsibleCode";

export default function Forms() {
  const submitFormHTML = `<form className="devise-form">
    <h2>Log in</h2>
    <div className="field">
        <label for="user_email">Email</label><br />
        <input autofocus="autofocus" autocomplete="email" type="email" value="" name="user_email" />
    </div>

    <div className="field">
        <label for="user_password">Password</label><br />
        <input autocomplete="current-password" type="password" name="user_password" id="user_password" />
    </div>

    <div className="field">
        <label for="user_remember_me">Remember me</label>
        <input type="checkbox" value="1" name="user_remember_me" id="user_remember_me" />
    </div>

    <div className="actions">
        <input type="submit" name="commit" value="Log in" className="submit" />
        <a href="/users/sign_up">Sign up</a><br />
        <a href="/users/password/new">Forgot your password?</a><br />
    </div>
</form>`

  const submitFormSCSS = `.devise-form {
  display: grid;
  border-radius: 10px;
  grid-gap: 15px;
  height: auto;
  width: auto;
  min-width: 30%;
  margin: auto;
  color: $background-sexy;
  background-color: $secondary;
  padding: 20px 10px;

  h2 {
    text-align: center;
    font-size: 2rem;
    min-width: 80%;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 3px solid black;
  }

  .field {
    justify-self: center;
    width: 70%;

    label {
      font-family: $heading;
      font-size: 1.2rem;
    }
    input {
      outline: none;
      border: 2px solid black;
      border-radius: 5px;
      font-family: "Fira Code";
      font-family: $text;
      letter-spacing: 3px;
      font-weight: bold;
      font-size: 1.2rem;
      width: 100%;
      padding: 10px;
    }

    input[type="checkbox"] {
      width: auto;
      margin-left: 30px;
    }
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    a {
      color: $highlight;
      color: black;
      font-size: 1.2rem;
      font-family: $heading;
      margin-top: 10px;
    }

    p {
      font-size: $size-heading-small;
      margin-top: 10px;
    }
  }
}
`

  const contentFormHTML = `<form className="content-form" enctype="multipart/form-data" action="/posts" accept-charset="UTF-8" method="post">
    <div className="field_title">
      <label for="post_title">Title</label>
      <input type="text" name="post_title" id="post_title" />
    </div>
    <div className="field_content_text">
      <label for="post_content_text">Content:</label>
      <textarea className="post-textarea" name="post_content_text" id="post_content_text"></textarea>
    </div>
    <div className="content">
      <div className="field_content_image">
        <label for="post_content_image">Image:</label>
        <input multiple="multiple" type="file" name="post_content_image" id="post_content_image"/>
      </div>
      <div className="field_content_file">
        <label for="post_content_file">File:</label>
        <input type="file" name="post_content_file" id="post_content_file"/>
      </div>
    </div>
    <div className="field_content_tags">
      <label for="post_tag_list">Tags</label>
      <input type="text" name="post_tag_list" id="post_tag_list" />
    </div>
    <div className="actions">
      <input onClick={(e) => e.preventDefault()} type="submit" name="commit" value="Create Post" className="submit small" />
    </div>
  </form>`

  const contentFormSCSS = `.content-form {
  width: auto;
  max-width: 100%;
  height: 100%;
  display: grid;
  padding: 2rem 0;
  grid-template-columns: 35% 32.5% 32.5%;
  grid-template-rows: 20% 40% 15% 10%;
  grid-row-gap: 5%;
  grid-template-areas:
    "post-title post-file post-file"
    "post-content-text post-content-text post-content-text"
    "post-tags post-tags post-tags"
    "post-submit post-submit post-submit";

  label {
    color: $background-sexy;
    font-size: 1.3rem;
  }
  .field_title {
    align-self: center;
    display: flex;
    flex-flow: column nowrap;
    justify-self: left;
    grid-area: post-title;
    height: 100%;
    width: 75%;
    justify-content: center;

    #post_title {
      background-color: $background-light;
      border: solid 0.25rem $background-light;
      border-radius: 0.25rem;
      height: 35%;
      width: 100%;
      margin-top: 0.25rem;
      filter: drop-shadow(0 0.25rem 0.25em $background-sexy);
    }
  }
  .field_content_text {
    grid-area: post-content-text;
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    width: 100%;
    justify-content: center;

    #post_content_text {
      background-color: $background-light;
      border: solid 0.25rem $background-light;
      border-radius: 0.25rem;
      height: 75%;
      width: 100%;
      margin-top: 0.25rem;
      filter: drop-shadow(0 0.25rem 0.25rem $background-sexy);
    }
  }
  .field_content_tags {
    grid-area: post-tags;
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    width: 100%;
    justify-content: center;
    #post_tag_list {
      background-color: $background-light;
      border: solid 0.25rem $background-light;
      border-radius: 0.25rem;
      height: 75%;
      width: 100%;
      margin-top: 0.25rem;
      filter: drop-shadow(0 0.25rem 0.25rem $background-sexy);
    }
  }
  .content {
    grid-area: post-file;
    display: flex;
    flex-flow: row wrap;
    justify-content: end;

    label {
      padding-right: 1rem;
      @include mobile {
        padding-right: 0.5rem;
        margin-left: 0;
        font-size: 90%;
        align-self: center;
      }
    }
    .field_content_image {
      @include tablet {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left: 3rem;
      }
      @include mobile {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left: 0;
      }
      display: flex;
      justify-content: center;
      input {
        cursor: pointer;
        margin-top: 0.25rem;
        filter: drop-shadow(0 0.25rem 0.25rem $background-sexy);
      }
    }
    .field_content_file {
      @include tablet {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left: 3.75rem;
      }
      @include mobile {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left: 0.75rem;
      }
      display: flex;
      justify-content: center;

      input {
        cursor: pointer;
        margin-top: 0.25rem;
        filter: drop-shadow(0 0.25rem 0.25rem $background-sexy);
      }
    }
  }

  .actions {
    grid-area: post-submit;
    margin: auto;
  }
}`

  return (
    <div className="page">
      <section>
        <h1>FORMS</h1>
        <p>Especially when creating a CRUD Application, forms are the bread and butter in user interaction.
        It is important to not overcomplicate the visual style, however the form shoud be styled enough to be inviting to use.
        </p>
      </section>
      <section>
        <h2>User Forms</h2>
        <p>These forms are used for everything user-related. Login/Registration Forms, as well as User-Edit Forms should look like the following example. </p>
        <LoginForm />
        <h3>HTML</h3>
        <CollapsibleCode code={submitFormHTML} language="erb" />
        <h3>SCSS</h3>
        <CollapsibleCode code={submitFormSCSS} language="scss" />
      </section>
      <section>
        <h2>Content Forms</h2>
        <p>These forms are used when content is being added.</p>
        <ContentForm />
        <h3>HTML</h3>
        <CollapsibleCode code={contentFormHTML} language="erb" />
        <h3>SCSS</h3>
        <CollapsibleCode code={contentFormSCSS} language="scss" />
      </section>
    </div >
  );
}
