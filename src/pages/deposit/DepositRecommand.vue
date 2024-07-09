<template>
  <q-layout class="page-container page-background">
    <q-page class="common-container">
      <div class="common-container info-wrap">
        <p class="info-title">나의 상황에 맞는 적금 찾기!</p>
      </div>
      <div class="txt-essen">* 필수 항목이니 반드시 입력해주세요.</div>
      <div class="box-essen">
        <div class="amount-wrapper">
          <p>목표금액</p>
          <div class="amount-op">
            <div>이하 금액</div>
            <div>1000만원</div>
            <div>3000만원</div>
            <div>5000만원</div>
            <div>1억</div>
            <div>이상 금액</div>
          </div>
        </div>
        <div class="period-wrapper">
          <p>납입기간</p>
          <div class="period-op">
            <div>6개월</div>
            <div>1년</div>
            <div>2년</div>
            <div>3년</div>
            <div>5년</div>
            <div>직접 입력</div>
          </div>
        </div>
        <div class="max-amount-wrapper">
          <div class="txt-max">
            <p>납입 최대 금액</p>
            <span>(선택)</span>
          </div>
          <div class="input-amount"><input type="text" />만원</div>
        </div>
      </div>
      <div class="txt-option">선택 항목이니 자유롭게 입력해주세요.</div>
      <div class="box-option">
        <div class="age-wrapper">
          <p>청년여부</p>
          <div class="age-op opts">
            <div>미성년자</div>
            <div>만 19세 - 34세</div>
            <div>만 40세 이상</div>
          </div>
        </div>
        <div class="weak-wrapper">
          <p>취약계층</p>
          <div class="weak-op opts">
            <div>해당 있음</div>
            <div>해당 없음</div>
          </div>
        </div>
        <div class="child-wrapper">
          <p>자녀여부</p>
          <div class="child-op opts">
            <div>자녀 있음</div>
            <div>자녀 없음</div>
          </div>
        </div>
        <div class="business-wrapper">
          <p>사업자여부</p>
          <div class="busi-op opts">
            <div>사업자</div>
            <div>개인</div>
          </div>
        </div>
        <div class="military-wrapper">
          <p>군복무여부</p>
          <div class="mili-op opts">
            <div>해당 있음</div>
            <div>해당 없음</div>
          </div>
        </div>
      </div>
      <div class="txt-saving">선택하신 조건에 맞는 적금입니다.</div>
      <div class="box-saving"></div>
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

<style lang="scss" scoped>
.box-essen,
.box-option,
.box-saving {
  width: 90%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 42px 0 42px 44px;
  margin: 0 auto;
}

p.info-title {
  text-align: center;
  font-size: 21px;
  font-weight: bold;
  color: #343535;
  padding: 80px 0px 20px 0px;
}

.amount-wrapper p,
.period-wrapper p,
.max-amount-wrapper p,
.age-wrapper p,
.weak-wrapper p,
.child-wrapper p,
.business-wrapper p,
.military-wrapper p {
  font-size: 14px;
  font-weight: bold;
}

.amount-op div {
  background-color: #f9f9f9;
  border-radius: 4px;
  color: #a3a1a1;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.opts div {
  background-color: #f9f9f9;
  border-radius: 4px;
  color: #a3a1a1;
  line-height: 30px;
  padding: 0 15px;
}

.busi-op div {
  background-color: #f9f9f9;
  border-radius: 4px;
}

.period-op div {
  background-color: #f9f9f9;
  border-radius: 4px;
  color: #a3a1a1;
  padding: 5px 0;
}

.amount-op,
.period-op,
.max-amount-op {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 17px 10px;
}

.opts {
  display: flex;
  flex-direction: row;
  margin: 17px 10px;
  gap: 10px;
}

.busi-op.opts div:nth-child(1) {
  padding: 0 23px;
}

.busi-op.opts div:nth-child(2) {
  padding: 0 29px;
}

.opts div {
  cursor: pointer;
}

.txt-max {
  display: flex;
  flex-direction: row;
}

.txt-max span {
  color: #a3a1a1;
  margin-left: 4px;
}

.input-amount input[type="text"] {
  outline: none;
  border: 0;
  border-bottom: 1px solid #b6b6b6;
  margin: 20px 0;
}

.txt-essen,
.txt-option,
.txt-saving {
  padding-left: 40px;
}
</style>
