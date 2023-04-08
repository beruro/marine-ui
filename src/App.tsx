// export { default as Button } from "./components/Button";
import React from "react";

import Button from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="fish">Common Button</Button>
        <Button disabled>Disable Button</Button>
        <Button btnType="link" href="www.baidu.com" target="_blank">
          Juejin Link
        </Button>
        <Button btnType="primary" size="lg">
          Large Primary
        </Button>
        <Button btnType="danger" size="sm">
          Small Danger
        </Button>
        <Button disabled btnType="link">
          Disabled Link
        </Button>
        <div>i am a fish</div>
      </header>
    </div>
  );
}

export default App;
