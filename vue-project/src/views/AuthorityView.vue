<template>
  <div>
    <el-tree
      ref="treeRef"
      :data="list"
      show-checkbox
      node-key="roleId"
      :check-strictly="true"
      :default-checked-keys="authority"
      :props="{
        children: 'roleList',
        label: 'name',
      }"
    />
    <el-buttom @click="changeAuthority">确认修改</el-buttom>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { getAuthorityList } from "../request/api";
import { InitData } from "../type/authority";
export default defineComponent({
  setup() {
    const route = useRoute();
    const params: any = route.params;
    const data = reactive(new InitData(params.id, params.authority));
    onMounted(() => {
      getAuthorityList().then((res) => {
        data.list = res.data;
      });
    });
    const changeAuthority = () => {
      console.log(
        data.treeRef.getCheckedKeys().sort(function (a: number, b: number) {
          return b - a;
        })
      );
    };
    return { ...toRefs(data), changeAuthority };
  },
});
</script>

<style scoped>
</style>