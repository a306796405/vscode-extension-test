<template>
  <div>
    <img alt="Vue logo" class="logo" :src="carUrl" width="125" height="125" />
    <div class="example-block">
      <button @click="clickToOpenPanel">打开panel窗口</button>
    </div>
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
import { messages } from '@hf/ext-common'
import carPath from '@/assets/car.jpg'
import { usePublicPath } from '@/hooks/use-global-definition';
import { useVscColorTheme } from '@/hooks/use-vsc-color-theme';
import { useCommand } from '@/hooks/use-command'

// Webview 公共资源地址示例
const carUrl = usePublicPath(carPath)
const messenger = getMessenger();
const { sendNotification } = useCommand();
const { panel: { panelA: { participant, methods, commands }}} = messages;

// Vscode 主题监听和设置示例
const { colorTheme, vscColorThemeOptions, updateTheme } = useVscColorTheme()

const clickToOpenPanel = async () => {
  await sendNotification({ method: methods.SHOW_PANEL }, participant, commands.SHOW_PANEL);
}

const onChangeUpdateTheme = async () => {
  await updateTheme(colorTheme.value!)
}

messenger.start()
</script>

<style>
  .example-block {
    margin-bottom: 20px;
  }
</style>
