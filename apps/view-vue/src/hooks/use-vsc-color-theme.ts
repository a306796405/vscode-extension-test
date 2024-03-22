import { ref, onUnmounted, onMounted} from 'vue'
import getMessenger from '@/utils/messenger';
import type { MessageParticipant } from 'vscode-messenger-common';

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

export function useVscColorTheme() {
  const colorTheme = ref<string>()
  const messenger = getMessenger();
  const addressBook = {
    fetchTheme: { type: 'extension', extensionId: 'sidebar-view-container' },
    updateTheme: { type: 'extension', extensionId: 'sidebar-view-container' }
  } satisfies Record<string, MessageParticipant>;

  onMounted(async() => {
     
      colorTheme.value = await messenger.sendRequest({ method: 'fetchTheme' }, addressBook.fetchTheme);
  })

  const updateTheme = async (colorTheme: string) => {
    const result = await messenger.sendRequest({ method: 'updateTheme' }, addressBook.updateTheme, colorTheme);
    console.log("🚀 ~ updateTheme ~ result:", result)
  }

  return { colorTheme, vscColorThemeOptions, updateTheme }
}