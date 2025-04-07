const path = require("path");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = mergeConfig(getDefaultConfig(__dirname), {
  reporter:{
    alias:{
      '@': path.resolve(__dirname, './src'),
    }
  }
});
module.exports = withNativeWind(config, { input: "./global.css" });