const path = require('path');

module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    'nativewind/babel'
  ],
  plugins:[
    [
      'module-resolver',
      {
        "root": ["./"],
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          '@': path.resolve(__dirname, 'src'), // ❗改成你实际的 src 路径
        },
      },
    ],
    'react-native-reanimated/plugin', // 必须放最后
  ]
};
