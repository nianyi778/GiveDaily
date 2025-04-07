import {Pressable, Text, PressableProps} from 'react-native';
import {useThemeStore} from '@/stores/theme';
import {tv} from 'tailwind-variants';
import clsx from 'clsx';

// 1️⃣ 定义 Button 样式变体
const button = tv({
  base: 'px-4 py-3 rounded-xl shadow-md',
  variants: {
    theme: {
      light: 'bg-primary-light',
      dark: 'bg-primary-dark',
      japan: 'bg-primary-japan',
    },
    block: {
      true: 'w-full',
    },
  },
});

// 2️⃣ 定义 Text 样式变体
const buttonText = tv({
  base: 'text-center font-semibold',
  variants: {
    theme: {
      light: 'text-textcolor-light',
      dark: 'text-textcolor-dark',
      japan: 'text-textcolor-japan',
    },
  },
});

interface ThemedButtonProps extends PressableProps {
  title: string;
  block?: boolean;
  className?: string;
}

export const ThemedButton = ({
  title,
  block,
  className,
  ...props
}: ThemedButtonProps) => {
  const {theme} = useThemeStore();

  return (
    <Pressable className={clsx(button({theme, block}), className)} {...props}>
      <Text className={buttonText({theme})}>{title}</Text>
    </Pressable>
  );
};
