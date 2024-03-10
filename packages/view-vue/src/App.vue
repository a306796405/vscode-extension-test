<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import logPath from '@/assets/logo.svg'
import { useWebviewPublicPath } from '@/hooks/use-webview-public-path'

const logoUrl = logPath || useWebviewPublicPath(logPath)
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" :src="logoUrl" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <input type="text">
      </nav>
    </div>
  </header>
  <RouterView />
</template>
