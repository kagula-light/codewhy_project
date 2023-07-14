<template>
  <div class="nav-header">
    <el-icon :size="25" class="fold-menu" @click="handleFoldClick">
      <component :is="menuIcon"></component>
    </el-icon>
    <!--  <el-icon :size="25"><Fold /></el-icon>-->
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const emit = defineEmits(['foldChange'])

const isFold = ref(false)

const menuIcon = computed(() => {
  return isFold.value ? 'Expand' : 'Fold'
})

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.nav-header {
  .fold-menu {
    cursor: pointer;
  }
}
</style>
