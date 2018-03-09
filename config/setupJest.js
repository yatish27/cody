// This file sets up the Enzyme environment by installing the Enzyme adapter for
// React 16.

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
