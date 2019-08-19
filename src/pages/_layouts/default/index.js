import React from "react";
import PropTypes from "prop-types";

import Header from "~/components/Header";
import Profile from "~/pages/Profile";

import { Wrapper } from "./styles";
import Dashboard from "~/pages/Dashboard";

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header>{children}</Header>
      <Dashboard />
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
