import React, { useState } from "react";
import * as ReactBootstrap from "react-bootstrap";

const { InputGroup, Form } = ReactBootstrap;

export default Text = () => {
  const [value, setValue] = useState("");
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>@</InputGroup.Text>
      <Form.Control type="text" placeholder="Username" value={value} onChange={(e) => setValue(e.target.value)} />
    </InputGroup>
  )
};