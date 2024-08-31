const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(path.dirname);

module.exports = withNativeWind(config, { input: "./src/styles/global.css" });
