<template>
  <q-layout class="page-container page-background">
    <q-page class="common-container">
      <section class="page-section">
        <div class="page-event">🔍 맞춤 카드 검색</div>
      </section>

      <section class="page-section">
        <div class="top-text">카드 혜택 선택</div>

        <div class="select-benefit">
          <q-tabs
            v-model="selectedTab"
            active-color="primary"
            indicator-color="primary"
          >
            <q-tab name="1" label="주유" />
            <q-tab name="2" label="교통" />
            <q-tab name="3" label="통신" />
            <q-tab name="4" label="마트" />
            <q-tab name="5" label="푸드" />
            <q-tab name="6" label="카페" />
            <q-tab name="7" label="공과금" />
            <q-tab name="8" label="교육" />
            <q-tab name="9" label="자동차" />
            <q-tab name="10" label="스포츠" />
          </q-tabs>
        </div>

        <div class="total-box">
          <div class="total-text">전체 가맹점</div>
        </div>
      </section>
    </q-page>
  </q-layout>
</template>

<script setup>
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  ref,
  reactive,
  watch,
  computed,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { api } from "boot/axios";
import axios from "axios";

const $router = useRouter();
const $route = useRoute();
const $q = useQuasar();

const card_company = ref([
  {
    name: "신한카드",
    img: "https://vertical.pstatic.net/vertical-cardad/company/SH.png",
  },
  {
    name: "현대카드",
    img: "https://vertical.pstatic.net/vertical-cardad/company/HD.png",
  },
  {
    name: "삼성카드",
    img: "https://vertical.pstatic.net/vertical-cardad/company/SS.png",
  },
  {
    name: "KB국민카드",
    img: "https://vertical.pstatic.net/vertical-cardad/company/KB.png",
  },
  {
    name: "롯데카드",
    img: "https://vertical.pstatic.net/vertical-cardad/company/LO.png",
  },

  {
    name: "하나카드",
    img: "https://vertical.pstatic.net/vertical-cardad/company/SK.png",
  },

  {
    name: "NH농협카드",
    img: "https://vertical.pstatic.net/vertical-cardad/company/NH.png",
  },
  {
    name: "IBK기업은행",
    img: "https://vertical.pstatic.net/vertical-cardad/company/IB.png",
  },
  {
    name: "BC카드",
    img: "https://vertical.pstatic.net/vertical-cardad/company/bc.png",
  },
]);
</script>

<style lang="scss" scoped>
.inner {
  position: relative;
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 25px;
}
.cont-left {
  float: left;
  width: 840px;
}
.cont-right {
  float: right;
  height: 100%;
  width: 340px;
}

.company-box-3 {
  float: left;
}
.select-benefit {
  width: 70%;
  background-color: #f2eaea;
  border-radius: 20px;
}
.top-text {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
}
.total-box {
  margin-top: 40px;
  background-color: #f1eaea;
  width: 230px;
  height: 230px;
  border-radius: 20px;
}
.total-text {
  font-size: 20px;
  padding-top: 40px;
  padding-left: 20px;
  font-weight: 800;
}
</style>
