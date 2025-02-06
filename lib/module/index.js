import { requireNativeComponent, UIManager, Platform } from 'react-native';
if (Platform.OS !== 'ios') {
  throw new Error("The '@candlefinance/blur-view' package is iOS only. " + 'Please ensure you are running the app on an iOS device or simulator.');
}
const LINKING_ERROR = `The package '@candlefinance/blur-view' doesn't seem to be linked properly.\n` + "- Make sure you have run 'pod install' in the ios directory.\n" + '- Rebuild your app after installing the package.\n' + '- Ensure you are not using Expo Go.\n';
const ComponentName = 'BlurViewView';
export const VariableBlurView = UIManager.getViewManagerConfig(ComponentName) != null ? requireNativeComponent(ComponentName) : () => {
  throw new Error(LINKING_ERROR);
};
//# sourceMappingURL=index.js.map