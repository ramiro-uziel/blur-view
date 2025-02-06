"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariableBlurView = void 0;
var _reactNative = require("react-native");
if (_reactNative.Platform.OS !== 'ios') {
  throw new Error("The '@candlefinance/blur-view' package is iOS only. " + 'Please ensure you are running the app on an iOS device or simulator.');
}
const LINKING_ERROR = `The package '@candlefinance/blur-view' doesn't seem to be linked properly.\n` + "- Make sure you have run 'pod install' in the ios directory.\n" + '- Rebuild your app after installing the package.\n' + '- Ensure you are not using Expo Go.\n';
const ComponentName = 'BlurViewView';
const VariableBlurView = _reactNative.UIManager.getViewManagerConfig(ComponentName) != null ? (0, _reactNative.requireNativeComponent)(ComponentName) : () => {
  throw new Error(LINKING_ERROR);
};
exports.VariableBlurView = VariableBlurView;
//# sourceMappingURL=index.js.map