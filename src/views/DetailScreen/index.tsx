import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {ThemedButton} from '@/components/ui/ThemedButton';
import {ThemeSwitcher} from '@/components/ThemeSwitcher';

export default function DetailScreen() {
  const {t} = useTranslation();

  return (
    <View>
      <ThemeSwitcher />
      <ThemedButton title="主题按钮" />
      <Text>{t('DetailScreen')}</Text>
      <Text>{t('DetailScreen', {name: '小李'})}</Text>
    </View>
  );
}
