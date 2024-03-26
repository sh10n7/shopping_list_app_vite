<script setup>
import { ref } from 'vue'
import { useGenreStore } from '../stores/genreStore'
import { useGoodsStore } from '../stores/GoodsStore';
const statusList = [
  '未購入',
  '購入済み'
]

const genreStore = useGenreStore();
const goodsStore = useGoodsStore();
const emit = defineEmits(['close-modal']); 

const goods = ref({
  name: '',
  quantity: '',
  genreId: '',
  statusId: 0,
})

const goodsSubmit = async() => {
  const resetFormAndCloseModal = () => {
    //入力フォームのリセット
    goods.value = { name:'', quantity: '', genreId: '', statusId: 0 };
    // emitを用いてmodal-closeする
    emit('close-modal');
  };

  try {
  // goods.value.id の有無で処理を分岐
    await goodsStore.addGoods(goods.value);
    resetFormAndCloseModal();
  } catch (error) {
    // エラーメッセージを具体化し、何が失敗したのかを明確に
    console.error(`商品の${goods.value.id ? '更新' : '保存'}に失敗しました。`, error);
  }
}

</script>

<template>
  <div class="modal_body">
      <h2 class="input_menu">リスト編集</h2>
      <form class="goods_form">
        <input type="text" class="form_input" placeholder="品目" v-model="goods.name"/>
        <input type="text" class="form_input" placeholder="数量" v-model="goods.quantity"/>
        <select v-model="goods.genreId" class="form_input" :value="goods.genreId">
          <option :value="genre.id" v-for="genre in genreStore.genres" :key="genre.id">{{ genre.name }}</option>
        </select>
        <select v-model="goods.statusId" class="form_input" :value="goods.statusId">
          <option :value="index" v-for="(status,index) in statusList" :key="index">{{ status }}</option>
        </select>
        <input class="input_submit" type="button" value="送信" @click="goodsSubmit"/>
      </form>
  </div>
</template>

<style scoped>
.goods_form {
  display:flex;
  flex-direction: column;
}

.form_input {
  margin-bottom: 8px;
  padding: 8px;
}

</style>