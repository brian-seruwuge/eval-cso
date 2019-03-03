import React from "react";
import { connect } from "react-redux";
import Quality from "src/views/templates/Quality";

const index = () => <Quality />;

export default connect()(index);
