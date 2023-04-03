// export { default as Button } from "./components/Button";
import React from "react";

import Button, { ButtonSize, ButtonType } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType="primary" size="lg">
          我是按钮
        </Button>
        <Button disabled>不可用按钮</Button>
        <Button btnType="link" href="www.baidu.com">
          我是链接
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>i am a fish</div>
      </header>
    </div>
  );
}

export default App;
