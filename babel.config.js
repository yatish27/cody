module.exports = function(api) {
  api.cache(() => process.env.NODE_ENV);

  const modulesSetting = process.env.NODE_ENV == "test" ? "commonjs" : false;

  const presets = [
    [
      "@babel/preset-env",
      {
        modules: modulesSetting,
        targets: { browsers: "> 1%" },
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-react",
    "@babel/preset-flow"
  ];

  const plugins = [
    "react-hot-loader/babel",
    "relay",
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-proposal-class-properties", { spec: true }],
    ["@babel/plugin-proposal-object-rest-spread", { useBuiltIns: "usage" }]
  ];

  return {
    presets,
    plugins
  };
};
