<script setup>
import { ref } from 'vue'
import PswdPop from '@/components/PswdPop.vue'

const popRef = ref(null)
const handleGetPay = () => {
  popRef.value.showPswdPop = true
}
</script>

<template>
  <button @click="handleGetPay">立即支付</button>
  <pswd-pop ref="popRef" />
</template>

<style scoped>

</style>
