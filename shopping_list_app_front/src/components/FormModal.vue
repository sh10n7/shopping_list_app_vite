<script setup>
import GoodsBody from './GoodsBody.vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close-modal']); 

const closeModal = () => {
  emit('close-modal')
}

</script>

<template>
  <div v-if="isOpen">
    <GoodsBody @close-modal="closeModal"/>
  </div>
</template>


