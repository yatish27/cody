const ReactRelay = require("react-relay");

module.exports = {
  ...ReactRelay,
  // Mock createFragmentContainer HOC so it just returns the inner Component
  createFragmentContainer: Component => Component
};
