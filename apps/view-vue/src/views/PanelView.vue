<script setup lang="ts">
import getMessenger from '@/utils/messenger';
import type { MessageParticipant } from 'vscode-messenger-common';

const sendMessenger = (async () => {
  const messenger = getMessenger();
  const addressBook = {
    aHome: { type: 'extension', extensionId: 'panel-view-container' }
  } satisfies Record<string, MessageParticipant>;
  const result = await messenger.sendRequest({ method: 'fullName' }, addressBook.aHome, 'Jeffery');
  console.log("🚀 ~ sendMessenger ~ result:", result)
})
</script>

<template>
  <main>
    <h1>我是panel</h1>
    <!-- <button @click="sendMessenger">home按钮</button> -->

    <!-- <div class="example-block">
      <h2>主题获取、监听和设置演示</h2>
      <label for="color-theme-select">请选择 Vscode 的主题:</label>
      <select id="color-theme-select" v-model="colorTheme" @input="onColortThemeInput()">
        <option v-for="{ value, label } of vscColorThemeOptions" :key="value" :value="value">
          {{ label }}
        </option>
      </select>
      <div>当前窗口 vscode 的主题类型: {{ colorTheme }}</div>
    </div> -->
  </main>
</template>
