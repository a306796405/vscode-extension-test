import { ref, onMounted} from 'vue'
import getMessenger from '@/utils/messenger';
import { messages } from '@hf/ext-common'

export function useVscColorTheme() {
  const colorTheme = ref<string>()
  const messenger = getMessenger();
  const { sidebar: { sidebarA: { methods, participant } } } = messages

  onMounted(async() => {
      colorTheme.value = await messenger.sendRequest({ method: methods.FETCH_THEME }, participant);
  })

  const updateTheme = async (colorTheme: string) => {
    const result = await messenger.sendRequest({ method: methods.UPDATE_THEME }, participant, colorTheme);
    console.log("🚀 ~ updateTheme ~ result:", result)
  }

  return { colorTheme, vscColorThemeOptions, updateTheme }
}


export const vscColorThemeOptions = [
  {
    label: 'Light High Contrast',
    value: 'Default High Contrast Light'
  },
  {
    label: 'Light (Visual Studio)',
    value: 'Visual Studio Light'
  },
  {
    label: 'Light Modern',
    value: 'Default Light Modern'
  },
  {
    label: 'Light+',
    value: 'Default Light+'
  },
  {
    label: 'Dark High Contrast',
    value: 'Default High Contrast'
  },
  {
    label: 'Dark (Visual Studio)',
    value: 'Visual Studio Dark'
  },
  {
    label: 'Dark Modern',
    value: 'Default Dark Modern'
  },
  {
    label: 'Dark+',
    value: 'Default Dark+'
  },
  {
    label: 'Red',
    value: 'Red'
  }
]