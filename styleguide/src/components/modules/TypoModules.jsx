import "../../styles/modules/TypoModule.scss"

export function Fonts() {
  return (
    <div className="module fonts-module">
      <div className="fira">
        Fira Code
      </div>
      <div className="montserrat">
        Montserrat
      </div>
    </div>
  );
}

export function FontSizes() {
  {
    return (
      <div className="module fontsize-module">
        <div className="texts">
          <p>This is normal text</p>
        </div>
        <div className="headings">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
        </div>
      </div>
    );
  }
}
