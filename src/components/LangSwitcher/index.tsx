import { useI18nStore } from '@/store/i18n'
import { Button, View } from 'react-native'

export const LangSwitcher = () => {
  const { lang, setLang } = useI18nStore()

  return (
    <View className="flex-row">
      <Button onPress={() => setLang('zh')} title="中文" />
      <Button onPress={() => setLang('en')} title="English" />
    </View>
  )
}
