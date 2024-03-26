<script setup>
import FormModal from './FormModal.vue'
import { ref } from 'vue'

const showModal = ref(false);

const openModal = () => {
  showModal.value = !showModal.value;
}

</script>

<template>
  <div class="header-list">
    <button class="add-list" @click="openModal">リスト追加</button>
    <button>ジャンル追加</button>
    <Modal v-model="showModal">
      <FormModal :isOpen="showModal" @close-modal="showModal = false"/>
    </Modal>
  </div>
</template>

<style scoped>
.add-list {
  margin-right: 8px;
}
</style>