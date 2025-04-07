import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

export default function DetailScreen() {
  const {t} = useTranslation();

  return (
    <View>
      <Text>{t('DetailScreen')}</Text>
      <Text>{t('DetailScreen', {name: '小李'})}</Text>
    </View>
  );
}
