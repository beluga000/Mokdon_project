<template>
  <q-layout class="page-container page-background">
    <q-page class="common-container">
      <section class="page-section">
        <div class="card-img-wrap">
          <div class="card-img-box">
            <img
              :src="cardDetail.cardImageUrl"
              class="card-img"
              alt="카드 이미지"
            />
          </div>
        </div>
        <article class="card-detail-article">
          <div class="card-content">
            연회비
            <p><span>국내</span>{{ cardDetail.domesticAnnualFee }}원</p>
            <p><span>해외</span>{{ cardDetail.foreignAnnualFee }}원</p>
          </div>
        </article>
        <article class="card-detail-article">
          <!-- <ul>
            <li>{{ cardDetail.cardName }}</li>
          </ul> -->
          <div class="card-title">
            {{ cardDetail.cardName }}
          </div>
        </article>
        <article class="card-detail-article">
          <div class="card-benefit">
            {{ cardDetail.titleDescription }}
          </div>
        </article>
      </section>
      <section class="page-section">
        <div class="benefits-title">🎁 주요 혜택</div>
        <ul class="benefits-wrap">
          <li
            class="benefits-list"
            v-for="(benefit, index) in cardDetail.benefits"
            :key="index"
          >
            <div class="benefit-icon-wrap">
              <img
                :src="benefit.iconFileNameUrl"
                class="card-img"
                alt="카드 이미지"
              />
            </div>
            <p>{{ benefit.rootBenefitCategoryIdName }}</p>
          </li>
        </ul>
      </section>

      <section class="page-section">
        <!-- <div class="benefits-title">🎁 상세 혜택</div> -->
        <div class="benefits-title">한 달에 이만큼 혜택 받아요</div>

        <div v-if="checkAmount">
          <div class="discount-box">
            <div class="discount-text">
              <div class="amount-text" id="discount-amount">
                {{ discountAmount }}
              </div>
              <div class="sub-amount-text">
                <p>최대할인한도 {{ discountAmount }}</p>
              </div>
            </div>
          </div>
          <div class="h-48"></div>
          <div>전월실적</div>
          <div class="tablelist">
            <button
              class="benefit-button"
              v-for="(item, idx) in cardDetail.max_discount"
              :key="idx"
              @click="handleDiscountClick(item, idx)"
              :class="{ active: activeIndex === idx }"
            >
              <div class="benefit-button-in-div">
                {{ item.amount }}
              </div>
            </button>
          </div>
        </div>

        <div
          class="benefits-box"
          v-for="(item, index) in cardDetailInfo.benefit"
          :key="index"
        >
          <div class="title-box">
            {{ item.title }}
          </div>
          <div class="description-box">
            {{ item.content }}
          </div>
        </div>
      </section>

      <section class="page-section">
        <div class="benefits-title">💳 카드 정보</div>

        <ul>
          <li
            class="info-content"
            v-for="(info, index) in cardDetailInfo.info_detail"
            :key="index"
          >
            <div class="info-title">{{ info.title }}</div>
            <div class="info-detail">{{ info.info }}</div>
          </li>
        </ul>
      </section>
      <section class="page-section more-card-section" @click="goList">
        <div class="d-flex g20">
          <div class="more-icon-warp">?</div>
          <div class="more-text-wrap">
            <p class="more-text">찾는 혜택이 없나요?</p>
            <p class="more-text">다른 {{ companyCode }} 보기</p>
          </div>
        </div>
        <div class="more-btn">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </section>
      <section class="page-section application-section" @click="goApplication">
        <div class="application-button">카드 자세히 보기</div>
      </section>
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
import { defineComponent, onBeforeMount, onMounted, ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { api } from "boot/axios";
import axios from "axios";

defineOptions({
  name: "CardDetail",
});

const $router = useRouter();
const $route = useRoute();

onMounted(() => {
  console.log("$route.params.id", $route.params.id);
  CardData($route.params.id);
});

const cardDetail = ref({});
const cardDetailInfo = ref({});
const activeIndex = ref(0);
const checkAmount = ref(false);

const companyCode = ref("");

const discountAmount = ref("");

const CardData = async (cardAdId) => {
  const url = `${process.env.API}/v1/card/get/${cardAdId}`;

  await api
    .get(url)
    .then((res) => {
      cardDetail.value = res.data.Card;
      cardDetailInfo.value = res.data.CardInfo;

      console.log(res.data.Card);
      cardDetail.value.domesticAnnualFee =
        cardDetail.value.domesticAnnualFee.toLocaleString();
      cardDetail.value.foreignAnnualFee =
        cardDetail.value.foreignAnnualFee.toLocaleString();

      if (
        cardDetail.value.max_discount &&
        cardDetail.value.max_discount.length > 0
      ) {
        if (cardDetail.value.max_discount[0].price === "0") {
          checkAmount.value = false;
        } else {
          checkAmount.value = true;
        }
        discountAmount.value = cardDetail.value.max_discount[0].price + "원";
      }

      console.log("card Company", cardDetail.value.companyCode);

      const code = cardDetail.value.companyCode;
      if (code == "SH") {
        companyCode.value = "신한카드";
      } else if (code == "KB") {
        companyCode.value = "국민카드";
      } else if (code == "NH") {
        companyCode.value = "농협카드";
      } else if (code == "SS") {
        companyCode.value = "삼성카드";
      } else if (code == "LO") {
        companyCode.value = "롯데카드";
      } else if (code == "SK") {
        companyCode.value = "하나카드";
      } else if (code == "HD") {
        companyCode.value = "현대카드";
      } else if (code == "IB") {
        companyCode.value = "IBK기업은행";
      } else if (code == "BC") {
        companyCode.value = "BC카드";
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleDiscountClick = (item, idx) => {
  document.getElementById("discount-amount").innerText = item.price + "원";
  discountAmount.value = item.price + "원";
  activeIndex.value = idx;
};

const goList = () => {
  $router.push({
    path: `/savings/SavingsAccount`,
  });
};

const goApplication = () => {
  window.open(`${cardDetail.value.registerUrl}`);
};
</script>
<style lang="scss" scoped>
.card-img-wrap {
  display: flex;
  justify-content: center;
  .card-img-box {
    position: relative;
    width: 160px;
    height: 160px;
    .card-img {
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      object-fit: cover;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
  }
}
.more-card-section {
  cursor: pointer;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
}
.more-icon-warp {
  border: 1px solid;
  width: 60px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: rgba(135, 142, 156, 0.5);
  color: #ffffff;
  font-weight: 900;
  font-size: 40px;
}
.more-text-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.more-text:nth-child(1) {
  font-size: 16px;
  color: #646d7a;
  font-weight: 700;
}
.more-text:nth-child(2) {
  font-weight: 900;
  font-size: 22px;
}
.more-btn {
  color: #646d7a;
}

.card-detail-article {
  // border: 1px solid;
  text-align: center;
  // padding: 8px 0;
}

.card-title {
  font-size: 24px;
  font-weight: 900;
  padding-bottom: 8px;
}
.card-benefit {
  font-size: 16px;
  color: rgba(100, 109, 122);
}
.card-content {
  // padding: 20px;
  display: flex;
  justify-content: center;
  gap: 4px;
  padding: 10px 0 20px 0;
  font-size: 112x;
  p {
    background-color: #e5e8ed;
    padding: 0 12px;
    border-radius: 4px;
    font-size: 12px;
    display: flex;
    align-items: center;
    span {
      padding-right: 4px;
      font-size: 12px;
    }
  }
}

.benefits-wrap {
  // border: 1px solid;
  display: flex;
  padding-top: 10px;
  flex-wrap: wrap;
}
.benefits-title {
  font-size: 18px;
  font-weight: 900;
}
.benefits-list {
  display: flex;
  gap: 16px;
  // justify-content: center;
  align-items: center;
  // flex-direction: column;
  // border: 1px solid;
  width: calc(100% / 4);
  flex-wrap: wrap;
}

.benefit-icon-wrap {
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 4px;
  }
}

.application-section {
  background-color: #efae1a;
  color: #ffffff;
  padding: 0;
  position: fixed;
  bottom: 20px;
  left: 0px;
  width: 100%;
  max-width: 768px;
  z-index: 10;
  position: -webkit-sticky;
  position: sticky;
}
.application-button {
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 900;
  padding: 16px;
}

.info-content {
  // border: 1px solid;
  .info-title {
    color: rgb(51, 58, 68);
    font-size: 16px;
    font-weight: 900;
    padding: 8px 0;
  }
  .info-detail {
    color: #999999;
    font-size: 13px;
  }
}
@media (max-width: 768px) {
  .benefits-list {
    width: calc(100% / 2);
  }
}
@media (max-width: 468px) {
  .benefits-list {
    width: 100%;
  }
}

.h-24 {
  height: 24px;
}
.flex {
  display: flex;
}
.flex-grow {
  flex-grow: 1;
}
.benefits-box {
  -webkit-box-flex: 1;
  flex-grow: 1;
  margin-top: 40px;
}
.title-box {
  font-size: 17px;
  font-weight: bold;
  color: #efae1a;
  margin: 10px 0 10px;
}
.description-box {
  color: grey;
}
.tablelist {
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 4px;
  margin: 0px;
  background-color: #f4f5f7;
  border-radius: 12px;
  border: none;
}
.benefit-button {
  height: 40px;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  background-color: transparent;
  flex: 1 1 0%;
  display: block;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  border: none;
}
.benefit-button-in-div {
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  border-radius: 10px;
  background-color: rgb(var(--color-white-900));
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}
.benefit-button-in-p {
  position: relative;
  z-index: 1;
}
.benefit-button.active .benefit-button-in-div {
  background-color: #ffffff;
}

.benefit-button.active {
  transform: scale(1.05);
}

.h-48 {
  height: 48px;
}
.discount-box {
  position: sticky;
  z-index: 10;
  padding: 16px 10px;
  background-color: rgba(var(--color-white-900), var(--bg-opacity, 1));
  width: 100%;
  max-width: 960px;
  top: 85px;
}
.discount-text {
  text-align: center;
}
.amount-text {
  display: inline-block;
  font-size: 24px;
  font-weight: 900;
  color: var(--main-color);
}
.sub-amount-text {
  margin-top: 10px;
}
</style>
