<script setup>
import Header from './components/Header.vue'
import GoodsList from './components/GoodsList.vue'
import { useGenreStore } from './stores/genreStore'
import { useGoodsStore } from './stores/GoodsStore'
import { onMounted } from 'vue'

const genreStore = useGenreStore();
const goodsStore = useGoodsStore();

onMounted(async()=> {
  try{
    await genreStore.fetchAllGenres();
  }catch(error){
    console.log("ジャンルの取得ができませんでした")
  }
  
  try{
    await goodsStore.fetchAllGoods();
  }catch(error){
    console.log("リスト情報の取得に失敗しました。")
  }
})
</script>

<template>
  <div>
    <Header />
    <h2>買い物リスト</h2>
    <GoodsList/>
  </div>
</template>

<style scoped>

</style>
