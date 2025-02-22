module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver", 
      {
        root: ["./src"],
        alias: {
          "@src": './src',
          "@image": './src/assets/images'
        }
      }
    ],
      'react-native-reanimated/plugin',
    ],
};
