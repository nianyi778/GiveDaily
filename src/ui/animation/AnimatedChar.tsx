import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
  Easing,
} from 'react-native-reanimated';
import {Variant} from './SplitText';
import {TextStyle} from 'react-native';
import React from 'react';

export const AnimatedChar = ({
  char,
  index,
  variant,
  delay,
  duration,
  loop,
  style,
}: {
  char: string;
  index: number;
  variant: Variant;
  delay: number;
  duration: number;
  loop: boolean;
  style?: TextStyle;
}) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(10);
  const scale = useSharedValue(1);

  React.useEffect(() => {
    const d = index * delay * 1000; // ms
    const dur = duration * 1000;

    switch (variant) {
      case 'float':
        translateY.value = withDelay(
          d,
          loop
            ? withRepeat(
                withTiming(-5, {
                  duration: dur,
                  easing: Easing.inOut(Easing.ease),
                }),
                -1,
                true,
              )
            : withTiming(0, {duration: dur}),
        );
        opacity.value = withDelay(
          d,
          loop
            ? withRepeat(withTiming(1, {duration: dur}), -1, true)
            : withTiming(1, {duration: dur}),
        );
        break;

      case 'bounce':
        scale.value = withDelay(
          d,
          loop
            ? withRepeat(withTiming(1.2, {duration: dur}), -1, true)
            : withTiming(1, {duration: dur}),
        );
        opacity.value = withDelay(d, withTiming(1, {duration: dur}));
        break;

      case 'wave':
        translateY.value = withDelay(
          d,
          loop
            ? withRepeat(
                withTiming(-8, {
                  duration: dur,
                  easing: Easing.inOut(Easing.ease),
                }),
                -1,
                true,
              )
            : withTiming(0, {duration: dur}),
        );
        opacity.value = withDelay(d, withTiming(1, {duration: dur}));
        break;

      default:
        opacity.value = withTiming(1);
    }
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{translateY: translateY.value}, {scale: scale.value}],
  }));

  return (
    <Animated.Text style={[style, animatedStyle]}>
      {char === ' ' ? '\u00A0' : char}
    </Animated.Text>
  );
};
