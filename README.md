# svg-colorize-from-url     (WIP)

svg-colorize-from-url package accepts url of an svg or the plain svg as string with a color parameter and will return a new svg with the passed color. This only works with browser and some svg's are exception.

This was made for a use case with react project and as of now it only works by setting ref as in the example

# Example 1

```
import React from "react";
import "./App.css";
import { colorizeSVG } from "svg-colorize-from-url";
const url = 'https://upload.wikimedia.org/wikipedia/commons/1/17/Yin_yang.svg';

function App() {

  const imageRef = React.useRef();
  const changeSVGColor = async (color) => {
    console.log(imageRef.current.src);
    //first param can be url or svg string, second should be color and , if first param is url then set third param as URL and if it's
    // string set the third param as INLINE
    imageRef.current.src = await colorizeSVG(url, color, 'URL')

  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={url}
          ref={imageRef}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={(e) => changeSVGColor("red")}>Change Color</button>
      </header>
    </div>
  );
}

export default App;

```

# Example 2

```
import React from "react";
import "./App.css";
import { colorizeSVG } from "svg-colorize-from-url";
const url = "https://upload.wikimedia.org/wikipedia/commons/1/17/Yin_yang.svg";
function App() {
  const setSvg = async (node, color) => {
    console.log(node);
    node.src = await colorizeSVG(node.src, color, "URL");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={url}
          ref={(node) => {
            setSvg(node, "red");
          }}
          className="App-logo"
          alt="logo"
        />

        <img
          src={url}
          ref={(node) => {
            setSvg(node, "blue");
          }}
          className="App-logo"
          alt="logo"
        />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```

As of now it only works on the above usecase

##### THIS IS STILL WIP

| Param        |                                               |
| ------------ | --------------------------------------------- |
| first param  | url or svg as string                          |
| second param | color as string, accepts color codes also     |
| third param  | if url pass 'URL' if svg string pass 'INLINE' |

eg:

#### In case of URL

const url = 'https://upload.wikimedia.org/wikipedia/commons/1/17/Yin_yang.svg';

```
await colorizeSVG(url, color, 'URL')
```

#### In case of SVG STRING

const data ='

<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg" width="466" height="466" viewBox="-40 -40 80 80">
	<circle r="39"/>
	<path d="M0,38a38,38 0 0 1 0,-76a19,19 0 0 1 0,38a19,19 0 0 0 0,38" fill="#fff"/>
	<circle cy="19" r="5" fill="#fff"/>
	<circle cy="-19" r="5"/>
</svg>';

```
await colorizeSVG(data, color, 'INLINE')
```
