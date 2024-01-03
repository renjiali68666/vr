<template>
  <t-row :gutter="[10, 10]" class="admin">
    <t-col :span="3">
      <t-form>
        <t-form-item label="水平旋转角度">
          <t-input size="small"></t-input>
        </t-form-item>
        <t-form-item label="竖直旋转角度">
          <t-input size="small"></t-input>
        </t-form-item>
        <t-form-item label="标记点类型">
          <t-input size="small"></t-input>
        </t-form-item>
      </t-form>
    </t-col>
    <t-col :span="9">全景图</t-col>
    <t-col :span="12">操作台</t-col>
  </t-row>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.admin {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box !important;
  overflow: hidden;
  background-color: antiquewhite;
  margin: 0 !important;
  padding: 0 !important;
  .t-col-3,
  .t-col-9 {
    height: 70vh;
  }
  .t-col-9 {
    background-color: rgba(128, 128, 128, 0.5);
  }
  .t-col-12 {
    height: 70vh;
  }
}
</style>
