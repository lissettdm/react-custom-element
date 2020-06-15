# Export react components as custom element

## Getting Started

npm install react-create-custom-element

**Requires react and react-dom as a peer dependency.**

## Usage

```javascript
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ShadowContainer from "react-create-custom-element";

createElement(
  SomeReactComponent, // component
  "timer-ce", // tag name for custom element
  {
    properties: ["name"], // properties
    customEvents: ["onUpdate"], // events
  }
);

const App = () => {
  const [name, setName] = useState("timer");
  useEffect(() => {
    setInterval(() => {
      // property changes
      setName(new Date().getTime());
      console.log("change");
    }, 3000);

    // listen onUpdate
    document
      .getElementsByTagName("timer-ce")[0]
      .addEventListener("onUpdate", (e) => console.log("updated"));
  });
  return <timer-ce name={name} />;
};
ReactDOM.render(<App />, document.getElementById("root"));
```

## With Shadow DOM

```javascript
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ShadowContainer from "react-create-custom-element";

createElement(
  SomeReactComponent, // component
  "timer-ce", // tag name for custom element
  {
    properties: ["name"], // properties
    customEvents: ["onUpdate"], // events
    shadowDOM: true,
    mode: 'open', // 'open' || 'close'
  }
);

const App = () => {
  const [name, setName] = useState("timer");
  useEffect(() => {
    setInterval(() => {
      // property changes
      setName(new Date().getTime());
      console.log("change");
    }, 3000);

    // listen onUpdate
    document
      .getElementsByTagName("timer-ce")[0]
      .addEventListener("onUpdate", (e) => console.log("updated"));
  });
  return <timer-ce name={name} />;
};
ReactDOM.render(<App />, document.getElementById("root"));
```
