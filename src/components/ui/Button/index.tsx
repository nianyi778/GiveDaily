import {Pressable, Text, PressableProps} from 'react-native';
import clsx from 'clsx';

interface ButtonProps extends PressableProps {
  title: string;
  block?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  title,
  block = false,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      className={clsx(
        'px-4 py-3 rounded-lg shadow-md', // ✅ 默认有 box-shadow
        {
          'w-full': block, // ✅ 如果 block，宽度为 100%
          'w-auto': !block, // ✅ 如果不 block，宽度自适应
          'bg-primary-light': variant === 'primary', // ✅ 如果 variant 为 primary，背景色为 primary
          'bg-gray-400': variant === 'secondary', // ✅ 如果 variant 为 secondary，背景色为 secondary
        },
        className,
      )}
      {...props}>
      <Text className="text-white text-center font-semibold">{title}</Text>
    </Pressable>
  );
};
