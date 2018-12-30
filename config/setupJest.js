// This file sets up the Enzyme environment by installing the Enzyme adapter for
// React 16.

const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });
