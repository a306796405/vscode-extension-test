<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import logPath from '@/assets/logo.svg'
import { usePublicPath, useRoutePath } from '@/hooks/use-global-definition'
import { useRouter } from 'vue-router'

const logoUrl = logPath || usePublicPath(logPath)
console.log("🚀 ~ logoUrl:", logoUrl)
const router = useRouter()

router.push({
  path: useRoutePath().value,
})
 
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>
