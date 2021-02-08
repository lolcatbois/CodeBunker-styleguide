import { SubmitButton, TagButton } from "../modules/ButtonModules";
import CollapsibleCode from "../modules/CollapsibleCode";

export default function Buttons() {
  const submitButtonHTML = `<input type="submit" class="submit small">`
  const tagButtonHTML = `<a href="#" class="tag"></a>"`

  const submitButtonSCSS = `.submit {
    cursor: pointer;
    filter: drop-shadow(0 0.15rem 0.25rem $background-sexy);
    text-transform: uppercase;
    padding: 0.5rem 2rem;
    background-color: $highlight;
    border: solid 0.15rem $background-sexy;
    border-radius: 0.25rem;
    font-family: $heading;
    font-size: $size-heading;
    transition: transform 0.5s ease-in-out;

    &.small {
        font-size: $size-heading-small;
        padding: 0.3rem 1.5rem;
    }

    &.extra-small {
        font-size: $size-heading-small;
        padding: 0.1rem 1.3rem;
    }

    &:focus {
        border: solid 0.25rem $highlight;
        background-color: $background-sexy;
        color: white;
        filter: drop-shadow(0 0.15rem 0.25rem $highlight);
    }
    &:hover {
        transform: scale(1.07);
    }
    }`

  const tagButtonSCSS = `.tag {
  cursor: pointer;
  font-family: $heading;
  padding: 0.3rem 1.5rem;
  border: solid 2px $background-sexy;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  background-color: $background-light;
  filter: drop-shadow(0 0.2rem 0.15rem $background-sexy);
  text-decoration: none;
  color: black;
  transition: ease-in-out 0.25s;
  font-size: 1.3rem;
  p {
    text-align: center;
  }

  &:hover {
    border-color: $highlight;
    filter: drop-shadow(0 0.2rem 0.15rem $highlight);
    background-color: $background-sexy;
    color: white;

    img {
      filter: invert(1);
    }

    transform: scale(1.1);
  }
}
.owned {
  background-color: $highlight;
  transition: none;
  &:hover {
    border: solid 2px $background-sexy;
    background-color: $highlight;
    color: $background-sexy;
    filter: drop-shadow(0 0.2rem 0.15rem $background-sexy);
  }
}

`

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
        <CollapsibleCode code={submitButtonHTML} language="erb" />
        <h3>SCSS</h3>
        <CollapsibleCode code={submitButtonSCSS} language="scss" />
      </section>
      <section>
        <h2>Tag Button</h2>
        <p>This button can be toggled between two states.</p>
        <TagButton />
        <h3>HTML</h3>
        <CollapsibleCode code={tagButtonHTML} language="erb" />
        <h3>SCSS</h3>
        <CollapsibleCode code={tagButtonSCSS} language="scss" />
      </section>
    </div>
  );
}
