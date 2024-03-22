<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRoutePath } from '@/hooks/use-global-definition'
import { useRouter } from 'vue-router'

const router = useRouter()

router.push({
  path: useRoutePath().value,
})
 
</script>

<template>
  <!-- <nav>
    <RouterLink to="/">sidebar</RouterLink>
    <RouterLink to="/about">panel</RouterLink>
  </nav> -->
  <RouterView />
</template>
