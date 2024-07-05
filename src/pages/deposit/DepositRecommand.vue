<template>
  <q-layout class="page-container page-background">
    <q-page class="common-container">
      <div class="common-container info-wrap">
        <p class="info-title">
          <i class="fa-solid fa-circle-info"></i> 안내 사항
        </p>
        <p>
          해당 사이트는 포트폴리오용 사이트로 실제 서비스가 되지 않으며,
          제공되는 정보는 올바르지 않을 수 있음을 알립니다.
        </p>
      </div>
    </q-page>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { api } from "boot/axios";

defineOptions({
  name: "DepositRecommand",
});

const $router = useRouter();
const $route = useRoute();
</script>

<style lang="scss" scoped></style>
