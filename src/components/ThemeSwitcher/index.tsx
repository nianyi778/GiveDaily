import {useThemeStore} from '@/stores/theme';
import {Button, Text, View} from 'react-native';

export const ThemeSwitcher = () => {
  const {theme, setTheme} = useThemeStore();

  return (
    <View className="flex-row gap-2 mt-4">
      <Text>{theme}</Text>
      <Button title="🌞 Light" onPress={() => setTheme('light')} />
      <Button title="🌙 Dark" onPress={() => setTheme('dark')} />
      <Button title="🇯🇵 Japan" onPress={() => setTheme('japan')} />
    </View>
  );
};
