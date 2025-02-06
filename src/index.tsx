import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

if (Platform.OS !== 'ios') {
  throw new Error(
    "The '@candlefinance/blur-view' package is iOS only. " +
      'Please ensure you are running the app on an iOS device or simulator.'
  );
}

const LINKING_ERROR =
  `The package '@candlefinance/blur-view' doesn't seem to be linked properly.\n` +
  "- Make sure you have run 'pod install' in the ios directory.\n" +
  '- Rebuild your app after installing the package.\n' +
  '- Ensure you are not using Expo Go.\n';

type BlurViewProps = {
  style: ViewStyle;
  gradientMask?: string;
  maxBlurRadius?: number;
};

const ComponentName = 'BlurViewView';

export const VariableBlurView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<BlurViewProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
