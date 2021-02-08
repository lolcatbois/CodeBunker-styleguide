import "../../styles/modules/FormModule.scss"

export function LoginForm() {
    return (
        <div className="module form-module">
          <form className="devise-form">
            <h2>Log in</h2>
            <div className="field">
              <label for="user_email">Email</label><br />
              <input autofocus="autofocus" autocomplete="email" type="email" name="user_email" />
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
              <input onClick={(e) => e.preventDefault()} type="submit" name="commit" value="Log in" className="submit" />
              <a onClick={(e) => e.preventDefault()} href="/users/sign_up">Sign up</a><br />
              <a onClick={(e) => e.preventDefault()} href="/users/password/new">Forgot your password?</a><br />
            </div>
          </form>
        </div>
    );
}

export function ContentForm() {
    return (
        <div className="module content-form-module">
          <form className="content-form" enctype="multipart/form-data" action="/posts" accept-charset="UTF-8" method="post">
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
          </form>
        </div>
    );
}
