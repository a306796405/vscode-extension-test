<template>
  <div>
    <img alt="Vue logo" class="logo" :src="carUrl" width="125" height="125" />
    <div class="example-block">
      <h2>主题获取、监听和设置演示</h2>
      <label for="color-theme-select">请选择 Vscode 的主题:</label>
      <select id="color-theme-select" v-model="colorTheme" @change="onChangeUpdateTheme()">
        <option v-for="{ value, label } of vscColorThemeOptions" :key="value" :value="value">
          {{ label }}
        </option>
      </select>
      <div>当前窗口 vscode 的主题类型: {{ colorTheme }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import getMessenger from '@/utils/messenger';
import type { MessageParticipant } from 'vscode-messenger-common';
import carPath from '@/assets/car.jpg'
import { usePublicPath } from '@/hooks/use-global-definition';
import { useVscColorTheme } from '@/hooks/use-vsc-color-theme';

// Webview 公共资源地址示例
const carUrl = carPath || usePublicPath(carPath)
const messenger = getMessenger();

// Vscode 主题监听和设置示例
const { colorTheme, vscColorThemeOptions, updateTheme } = useVscColorTheme()
const onChangeUpdateTheme = async () => {
  await updateTheme(colorTheme.value!)
}

const sendMessenger = (async () => {
  const addressBook = {
    bAbout: { type: 'extension', extensionId: 'sidebar-view-container' }
  } satisfies Record<string, MessageParticipant>;
  const result = await messenger.sendRequest({ method: 'add' }, addressBook.bAbout, 25);
  console.log("🚀 ~ sendMessenger ~ result:", result)
})

messenger.start()
</script>

<style>
</style>
