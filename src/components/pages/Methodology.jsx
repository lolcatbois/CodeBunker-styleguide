import CollapsibleCode from "../modules/CollapsibleCode";


export default function Methodology() {

    const scssReset = `
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

ul,
ol {
  padding: 0;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`

    const scssFileStructure = `
├── main.scss
├── reset.css
├── _button.scss
├── _conversation.scss
├── _fonts.scss
├── _form.scss
├── _header.scss
├── _helper.scss
├── _keyframes.scss
├── _mixin.scss
├── _nav.scss
├── _posts.scss
├── _users.scss
└── _variables.scss

`
    return (
        <div className="page">
            <section>
                <h1>METHODOLOGY</h1>
                <p>
                    This page describes our code conventions and CSS environment.
                </p>
            </section>
            <section>
                <h2>Framework</h2>
                <p>
                    We are using SCSS in all stylesheets, following a main-partials system.
                    The main entrypoint should be named main.scss and all partials should be imported there.
                    Partials are named and categorized thematically.
                </p>
                <p>
                    Here is an example how the file structure could look like using Ruby on Rails.
                    Note, that <code>reset.css</code> is not a partial here and gets loaded before everything else in the asset pipeline used by rails.
                </p>
                <h3>File structure</h3>
                <CollapsibleCode code={scssFileStructure} language="bash" />
            </section>
            <section>
                <h2>RESET.CSS</h2>
                <p>
                    We are using the following opinionated, modern reset:
                </p>
                <h3>SCSS</h3>
                <CollapsibleCode code={scssReset} language="scss" />
            </section>
            <section>
                <h2>Naming Conventions</h2>
                <p>
                    We heavily use nesting in our SCSS code and as such, do not set strict guidelines
                    on how classes should be named. Where it is necessary, class names should contain words that make
                    the class classifiable to a html component when reading it.
                </p>
            </section>
            <section>
                <h2>Units</h2>
                <p>
                    <code>rem</code> for font sizes, <code>vh/vw</code> for top-level layouts, <code>%</code> for mid-level components and <code>px</code> for borders and other small modules.
                </p>
            </section>
            <section>
                <h2>Indentation</h2>
                <p>
                    We are using 2 spaces for indentation and <code>scss-stylelint</code> as a linter.
                </p>
            </section>
        </div>
    );
}
