import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const PageWrapper = ({children}: {children: React.ReactNode}) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View style={{paddingTop: top, paddingBottom: bottom}} className="flex-1">
      {children}
    </View>
  );
};
