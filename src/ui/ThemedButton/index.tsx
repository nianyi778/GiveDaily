import {Pressable, Text, PressableProps} from 'react-native';
import {useThemeStore} from '@/stores/theme';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary';

interface ThemedButtonProps extends PressableProps {
  title?: string;
  children?: React.ReactNode;
  block?: boolean;
  variant?: Variant;
  shadow?: boolean;
  className?: string;
  textClassName?: string;
}

// ✅ 明确所有主题样式，避免动态 className 无效
const buttonThemeMap: Record<string, string> = {
  light: 'bg-primary-light',
  dark: 'bg-primary-dark',
  japan: 'bg-primary-japan',
};

const textThemeMap: Record<string, string> = {
  light: 'text-textcolor-light',
  dark: 'text-textcolor-dark',
  japan: 'text-textcolor-japan',
};

export const ThemedButton = ({
  title,
  children,
  block = false,
  variant = 'primary',
  shadow = true,
  className,
  textClassName,
  ...props
}: ThemedButtonProps) => {
  const {theme} = useThemeStore();

  return (
    <Pressable
      className={clsx(
        'px-4 py-3 rounded-xl justify-center items-center',
        block && 'w-full',
        shadow && 'shadow-md',
        variant === 'primary' && buttonThemeMap[theme],
        variant === 'secondary' && 'bg-muted-light dark:bg-muted-dark',
        className,
      )}
      {...props}>
      {children ? (
        children
      ) : (
        <Text
          className={clsx(
            'text-base font-semibold',
            variant === 'primary' && textThemeMap[theme],
            variant === 'secondary' &&
              'text-textcolor-light dark:text-textcolor-dark',
            textClassName,
          )}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};
