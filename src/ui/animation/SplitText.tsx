import React from 'react';
import {View, TextStyle} from 'react-native';
import {AnimatedChar} from './AnimatedChar';

export type Variant = 'float' | 'bounce' | 'wave';

interface SplitTextProps {
  text: string;
  variant?: Variant;
  delay?: number; // 单位：秒（为了统一和官网 API）
  duration?: number; // 单位：秒
  loop?: boolean;
  style?: TextStyle;
}

export const SplitText = ({
  text,
  variant = 'float',
  delay = 0.05,
  duration = 0.3,
  loop = false,
  style,
}: SplitTextProps) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {text.split('').map((char, index) => (
        <AnimatedChar
          key={index}
          char={char}
          index={index}
          variant={variant}
          delay={delay}
          duration={duration}
          loop={loop}
          style={style}
        />
      ))}
    </View>
  );
};
