<template>
  <div>
    <VitePwaManifest />
    <NuxtWelcome />
  </div>
</template>
<script setup >
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })

</script>