// 必要なモジュール群をインポート
import React from "react";
import ReactDOM from "react-dom";
import * as ReactBootstrap from "react-bootstrap";
import Text from "./components/input";

const { Container, Button } = ReactBootstrap;

// とりあえず Hello Worldしてみる
// このJavaScriptのなかにHTMLかける構文はJSXという
const Layout = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

const BLayout = () => {
  return (
    <Container>
      <h1 className="mb-3">Hello World!</h1>
      <Button variant="primary">Test Button</Button>
      <Text />
    </Container>
  );
}

// このJSXを表示する場所を指定
const rootElement = document.getElementById("root");
// 表示するためのrootを作る
const root = ReactDOM.createRoot(rootElement);
// rootにLayoutを表示する
root.render(<Layout />);
// BLayout も確認してみよう