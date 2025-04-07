import {useTranslation} from 'react-i18next';

import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LangSwitcher} from '@/components/LangSwitcher';
import {Button} from '@/components/ui/Button';

export default function HomeScreen() {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <View className="p-4">
      <Text className="text-lg">这是首页</Text>
      <LangSwitcher />
      <Text>{t('welcome')}</Text>
      <Text>{t('greeting', {name: '小李'})}</Text>
      <Button
        variant="primary"
        title="去详情页"
        onPress={() => navigation.navigate('Detail' as never)} // 类型强转防止 ts 报错
      />
    </View>
  );
}
