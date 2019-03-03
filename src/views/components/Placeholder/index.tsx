import React from "react";
import { Placeholder } from "semantic-ui-react";

const contentPlaceholder = () => (
  <Placeholder style={{ maxWidth: "100%" }}>
    <Placeholder.Header image={true}>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>
);

export default contentPlaceholder;
