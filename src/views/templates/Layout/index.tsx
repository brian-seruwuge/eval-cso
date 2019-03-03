import * as React from "react";
import { Container } from "semantic-ui-react";

const Layout = ({ children }) => (
  <Container style={{ padding: "2rem" }}>{children}</Container>
);

export default Layout;
