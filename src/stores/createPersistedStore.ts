import {create, StateCreator} from 'zustand';
import {persist, PersistOptions} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function createPersistedStore<T>(
  name: string,
  initializer: StateCreator<T, [['zustand/persist', unknown]], []>,
) {
  return create<T>()(
    persist(initializer, {
      name,
      storage: {
        getItem: async (key: string) => {
          const value = await AsyncStorage.getItem(key);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (key: string, value: unknown) => {
          await AsyncStorage.setItem(key, JSON.stringify(value));
        },
        removeItem: AsyncStorage.removeItem,
      },
      onRehydrateStorage: () => state => {
        console.log(`[zustand] ✅ ${name} rehydrated`, state);
      },
    } as PersistOptions<T>),
  );
}
