<template>
  <q-layout class="page-container page-background">
    <q-page class="common-container">
      <section class="page-section">
        <div class="main_wrapper">
          <section class="main_title">
            <div class="txt_img">
              <div>
                <h2 class="product-title">{{ DepositDetail.name }}</h2>
                <h4>{{ DepositDetail.companyName }}</h4>
              </div>
              <div class="bank_img">
                <img
                  :src="DepositDetail.companylogourl"
                  class="bank-main-img"
                  alt=""
                />
              </div>
            </div>
            <div class="main_cate_area">
              <div
                class="main_cate c1"
                v-for="(item, idx) in DepositDetail.productCategories"
                :key="idx"
              >
                {{ item }}
              </div>
            </div>
          </section>

          <section class="main_perc">
            <div class="perc p1">
              <div>최고</div>
              <div class="year_best">
                <div>연</div>
                <div>{{ DepositDetail.primeInterestRate }}%</div>
              </div>
            </div>
            <div class="perc p2">
              <div>기본</div>
              <div class="year_ideal">
                <div>연</div>
                <div>{{ DepositDetail.interestRate }}%</div>
                <div class="before">(세전)</div>
              </div>
            </div>
          </section>

          <!-- <section class="main_info">
            <div>특판</div>
            <p>(금리) 기본이율 연 4.00%에 우대금리 연 16.00% 적용 시 최고 연 20.00% 금리 제공
                <br><br>
                32만좌 한정판매
            </p>
        </section> -->

          <section class="main_btns" @click="goApplication">
            <div>공식홈에서 더 알아보기</div>
          </section>
        </div>
      </section>
      <section class="page-section">
        <div class="benefits-title">🎁 상품 안내</div>

        <dl class="TextList-article">
          <div class="TextList-item">
            <dt class="TextList-title">기간</dt>
            <dd class="TextList-desc">
              {{ DepositDetailInfo.join_period }}
            </dd>
          </div>
          <div class="TextList-item">
            <dt class="TextList-title">금액</dt>
            <dd
              class="TextList-desc"
              v-html="DepositDetailInfo.join_amount"
            ></dd>
          </div>
          <div class="TextList-item">
            <dt class="TextList-title">가입방법</dt>
            <dd class="TextList-desc">
              {{ DepositDetailInfo.join_channel }}
            </dd>
          </div>
          <div class="TextList-item">
            <dt class="TextList-title">대상</dt>
            <dd
              class="TextList-desc"
              v-html="DepositDetailInfo.join_target"
            ></dd>
          </div>
          <div class="TextList-item">
            <dt class="TextList-title">이자지급</dt>
            <dd class="TextList-desc">
              {{ DepositDetailInfo.join_payment }}
            </dd>
          </div>
          <div class="TextList-item">
            <dt class="TextList-title">유의</dt>
            <dd class="TextList-desc" v-html="DepositDetailInfo.join_note"></dd>
          </div>
          <div class="TextList-item">
            <dt class="TextList-title">예금자보호</dt>
            <dd class="TextList-desc">
              {{ DepositDetailInfo.join_protection }}
            </dd>
          </div>
        </dl>
      </section>
      <section class="page-section">
        <div class="benefits-title">📈 금리 안내</div>
        <span class="if_12month">12개월 만기시 세후수령액 (단리)</span>
        <div class="m_m_price_area">
          <div class="monthly_m">
            <span>월 적립액</span>
            <div class="input-price">
              <input
                title="금액입력"
                placeholder="금액을 입력해주세요"
                class="InputPrice_input-value__yim9T"
                type="tel"
                :value="formattedAmount"
                @input="onInput"
              />
              <!-- <button class="clear-button" @click="clearInput">x</button> -->
              <i
                class="fa-solid fa-delete-left clear-button"
                @click="clearInput"
              ></i>
            </div>
          </div>
          <p>{{ amount_of_money.toLocaleString() }}원</p>
        </div>
        <ul class="rate-box">
          <li
            class="rate-sperate"
            :class="{ selected: selectedRate === 'primeInterestRate' }"
            @click="selectRate('primeInterestRate')"
          >
            <input
              type="radio"
              class="hidden"
              id="PRIME_INTEREST_RATE"
              :checked="selectedRate === 'primeInterestRate'"
            />
            <label for="PRIME_INTEREST_RATE" class="rate-label">
              최고금리
              <b>{{ DepositDetail.primeInterestRate }}%</b>
            </label>
          </li>
          <li
            class="rate-sperate"
            :class="{ selected: selectedRate === 'interestRate' }"
            @click="selectRate('interestRate')"
          >
            <input
              type="radio"
              class="hidden"
              id="INTEREST_RATE"
              :checked="selectedRate === 'interestRate'"
            />
            <label for="INTEREST_RATE" class="rate-label">
              기본금리
              <b>{{ DepositDetail.interestRate }}%</b>
            </label>
          </li>
        </ul>
        <dl class="RateRecipt_info">
          <div class="RateRecipt-item">
            <dt class="RateRecipt-title">원금합계</dt>
            <dd class="InterestRateReceipt_info-desc">
              {{ totalPrincipal.toLocaleString() }}원
            </dd>
          </div>
          <div class="RateRecipt-item">
            <dt class="RateRecipt-title">세전이자</dt>
            <dd class="InterestRateReceipt_info-desc">
              +{{ preTaxInterest.toLocaleString() }}원
            </dd>
          </div>
          <div class="RateRecipt-item">
            <dt class="RateRecipt-title">이자과세(15.4%)</dt>
            <dd class="InterestRateReceipt_info-desc">
              -{{ taxAmount.toLocaleString() }}원
            </dd>
          </div>
          <div class="RateRecipt-item">
            <dt class="RateRecipt-title">세후수령액</dt>
            <dd class="InterestRateReceipt_info-desc">
              {{ finalAmount.toLocaleString() }}원
            </dd>
          </div>
        </dl>

        <div class="description_area">
          <dl class="TextList_article">
            <div class="TextList_item">
              <dt class="TextList_label">조건별</dt>
              <dd class="TextList_description">
                <p v-html="DepositDetailInfo.specialCondition_description"></p>
              </dd>
            </div>
            <div
              class="TextList_item"
              v-for="(
                item, idx
              ) in DepositDetailInfo.specialCondition_description_info"
              :key="idx"
            >
              <dt class="TextList_label"></dt>
              <dd class="TextList_description_2">
                <ul class="number-list">
                  <li>
                    <b>{{ idx + 1 }}</b>
                    <p v-html="item"></p>
                  </li>
                </ul>
              </dd>
            </div>
            <div class="TextList_item">
              <dt class="TextList_label">유형</dt>
              <dd class="TextList_description">
                {{ DepositDetailInfo.rate_kind }}
              </dd>
            </div>
          </dl>
        </div>
        <ul>
          <!-- <li class="info-content" v-for="(info, index) in cardDetailInfo.info_detail" :key="index">
            <div class="info-title">{{ info.title }}</div>
            <div class="info-detail">{{ info.info }}</div>
          </li> -->
        </ul>
      </section>

      <section class="page-section">
        <div class="TabPanel_article__avbnv" id="RELATED_PRODUCT">
          <h4 class="TabPanel_title">금리 높은 적금</h4>
          <ul>
            <li
              class="RelatedProduct_item"
              v-for="(item, idx) in Deposit_Top3"
              :key="idx"
            >
              <div
                class="ProductInfo_article ProductInfo_type"
                @click="goDepositDetail(item.code)"
              >
                <span class="ProductInfo_bi-circle">
                  <span
                    class="BiImage-module_article"
                    style="width: 40px; height: 40px"
                  >
                    <img
                      :src="item.companylogourl"
                      alt="BK_DAEGU_Profile"
                      width="40"
                      height="40"
                      loading="eager"
                    />
                  </span>
                </span>
                <div class="ProductInfo_area-info">
                  <div class="ProductInfo_info-text">
                    <div class="ProductInfo_title-box">
                      <strong class="ProductInfo_title">{{ item.name }}</strong>
                    </div>
                    <p class="ProductInfo_bank-name">{{ item.companyName }}</p>
                  </div>
                  <div class="ProductInfo_info-rates">
                    <div class="ProductInfo_top-rate">
                      최고
                      <b class="ProductInfo_number">{{
                        item.primeInterestRate
                      }}</b>
                      <span class="ProductInfo_percent">%</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="TabPanelButton_article" @click="goList">
            <div class="TabPanelButton_button">
              더 많은 상품보기
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path
                  d="m1 1 4 4 4-4"
                  stroke="#929294"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- <section class="page-section more-card-section" @click="goList">
        <div class="d-flex g20">
          <div class="more-icon-warp">?</div>
          <div class="more-text-wrap">
            <p class="more-text">찾는 혜택이 없나요?</p>
            <p class="more-text">다른 신한카드 보기</p>
          </div>
        </div>
        <div class="more-btn">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </section> -->
      <section class="page-section application-section" @click="goApplication">
        <div class="application-button">적금 자세히 보기</div>
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
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { api } from "boot/axios";

defineOptions({
  name: "DepositDetail",
});

const $router = useRouter();
const $route = useRoute();

const DepositDetail = ref({});
const DepositDetailInfo = ref({});

const formatCurrency = (value) => {
  const number = parseInt(value.toString().replace(/[^\d]/g, ""));
  return isNaN(number) ? "" : number.toLocaleString() + "원";
};

const DepositData = async (code) => {
  const url = `${process.env.API}/v1/bank/deposit/get/${code}`;

  await api
    .get(url)
    .then((res) => {
      DepositDetail.value = res.data.Deposit;
      DepositDetailInfo.value = res.data.Deposit_Detail;

      const transformCategory = (category) => {
        const categoryMap = {
          specialOffer: "특판",
          online: "방문없이가입",
          savingFixed: "정기적금",
          savingFree: "자유적금",
          savingForYouth: "청년적금",
          savingForJumpingYouth: "청년도약계좌",
          savingForSoldier: "군인적금",
          housingSubscription: "주택청약",
        };
        return categoryMap[category] || category;
      };

      const formatInterestRate = (rate) => {
        return parseFloat(rate).toFixed(2);
      };

      DepositDetail.value.productCategories =
        DepositDetail.value.productCategories.map(transformCategory);
      DepositDetail.value.interestRate = formatInterestRate(
        DepositDetail.value.interestRate
      );
      DepositDetail.value.primeInterestRate = formatInterestRate(
        DepositDetail.value.primeInterestRate
      );

      console.log("res.data", res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const Deposit_Top3 = ref([]);

const DepositList = async () => {
  const url = `${process.env.API}/v1/bank/deposit/top3`;
  await api
    .get(url)
    .then((res) => {
      Deposit_Top3.value = res.data.Deposits;

      console.log("Deposit_Top3", Deposit_Top3.value);
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  console.log("$route.params.id", $route.params.id);
  DepositData($route.params.id);
  DepositList();
});

const amount_of_money = ref(100000);
const selectedRate = ref("primeInterestRate");

const formattedAmount = ref(formatCurrency(amount_of_money.value));

const onInput = (event) => {
  const value = event.target.value;
  const number = parseInt(value.replace(/[^\d]/g, ""));
  if (!isNaN(number)) {
    amount_of_money.value = number;
    formattedAmount.value = formatCurrency(number);
  } else {
    formattedAmount.value = value;
    amount_of_money.value = 0;
  }
};

const totalPrincipal = computed(() => amount_of_money.value * 12);

const selectedInterestRate = computed(() => {
  return selectedRate.value === "primeInterestRate"
    ? parseFloat(DepositDetail.value.primeInterestRate)
    : parseFloat(DepositDetail.value.interestRate);
});

// 단리로 세전이자 계산
const preTaxInterest = computed(() => {
  // amount_of_money는 매월 적립액이므로 이를 12개월로 곱해 원금을 계산한 후 단리 적용
  const monthlyDeposit = amount_of_money.value;
  const yearlyInterestRate = selectedInterestRate.value / 100;
  const principal = totalPrincipal.value;
  // 매월 적립되는 금액에 대한 단리 이자 계산
  let interest = 0;
  for (let month = 1; month <= 12; month++) {
    interest += monthlyDeposit * yearlyInterestRate * ((12 - month + 1) / 12);
  }
  return interest;
});
const taxAmount = computed(() => {
  return preTaxInterest.value * 0.154;
});

const finalAmount = computed(() => {
  return totalPrincipal.value + preTaxInterest.value - taxAmount.value;
});

const selectRate = (rate) => {
  selectedRate.value = rate;
};

const goList = () => {
  $router.push({
    path: `/deposit/DepositList`,
  });
};

const goApplication = () => {
  window.open(`${DepositDetailInfo.value.company_pcLink}`);
};
const clearInput = () => {
  formattedAmount.value = "";
  amount_of_money.value = 0;
};

const goDepositDetail = (detailId) => {
  console.log("detailId", detailId);
  $router.push({
    path: `/deposit/DepositDetail/${detailId}`,
  });
};
</script>

<style lang="scss" scoped>
.card-img-wrap {
  display: flex;
  justify-content: right;
  .card-img-box {
    position: absolute;
    width: 160px;
    height: 160px;
    .card-img {
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      object-fit: cover;
      top: 0%;
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

.card-annualfee div:nth-child(2) {
  width: 14%;
  height: 10%;
  background-color: #ececec;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.card-annualfee div:nth-child(1) {
  width: 5%;
  height: 10%;
  background-color: #ececec;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.card-annualfee {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.card-annualfee div:nth-child(3) {
  width: 10%;
  height: 10%;
  background: #ececec;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
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
  margin-bottom: 4px;
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
  background-color: var(--main-color);
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

.category-item {
  display: flex;
  gap: 4px;
  background-color: rgba(100, 109, 122, 0.1);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}

.deposit-title {
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.5px;
  word-break: break-word;
}

.deposit-bank {
  font-size: 15px;
  line-height: 21px;
  letter-spacing: -0.3px;
  display: block;
  margin-top: 2px;
}

.InputPrice_article__oiwrr.InputPrice_type-detail__j09c1
  .InputPrice_input-value__yim9T {
  font-size: 28px;
  line-height: 34px;
}

.InputPrice_input-value__yim9T {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-weight: 700;
  color: #1e1e23;
  border-style: none;
  border-bottom: 1px solid #343535;
}

.input-price {
  position: relative;
  padding-bottom: 5px;
}

.clear-button {
  position: absolute;
  right: 0;
  top: 30%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  height: 100%;
}

.clear-button:hover {
  color: #f08200;
}

.rate-box {
  display: flex;
  margin-top: 30px;
}

.rate-sperate {
  flex: 1 1;
}

.rate-label {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid #dcdee0;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #767678;
  cursor: pointer;
  .b {
    font: bold;
  }
}

.RateRecipt_info {
  margin-top: 16px;
  padding: 20px 16px 17px;
  border-radius: 12px;
  background-color: #eef9f3;
  line-height: 20px;
}
.RateRecipt-item {
  display: flex;
  justify-content: space-between;
}
.RateRecipt-title {
  color: #767678;
}

.TextList-article {
  display: table;
  width: 100%;
  font-size: 15px;
  line-height: 21px;
}
.TextList-item {
  display: table-row;
}
.TextList-title {
  display: table-cell;
  width: 1%;
  padding-right: 10px;
  font-size: 15px;
  white-space: nowrap;
  color: #929294;
}
.TextList-desc {
  display: table-cell;
  color: #1e1e23;
}
.rate-sperate.selected .rate-label {
  background-color: #f0f8ff;
  border-color: #f08200;
}
.description_area {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #f08200;
}
.TextList_article {
  display: table;
  width: 100%;
  font-size: 15px;
  line-height: 21px;
}
.TextList_item {
  display: table-row;
}
.TextList_label {
  display: table-cell;
  width: 1%;
  padding-right: 10px;
  font-size: 15px;
  white-space: nowrap;
  color: #929294;
}
.TextList_description {
  display: table-cell;
  color: #1e1e23;
}
.TextList_description_2 {
  padding-top: 6px;
}
.number-list {
  color: #767678;
}

.m_m_price_area {
  padding-left: 12px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.if_12month {
  font-size: 25px;
  color: #929292;
}

.main_wrapper {
  width: 100%;
  padding: 30px 20px;
}

.main_title h2 {
  font-size: 30px;
  font-family: "Pretendard";
  margin: 0;
}

.main_title h4 {
  font-size: 22px;
  font-family: "Pretendard";
  font-weight: normal;
  margin: 7px 0 5px 0;
}

.main_cate_area {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.main_cate {
  background-color: #f4f4f4;
  border-radius: 5px;
  font-size: 17px;
  font-weight: bold;
  font-family: "Pretendard";
  display: inline-block; /* 항목의 내용에 맞게 너비 조절 */
  padding: 0 8px; /* 항목의 좌우 여백 추가 */
  line-height: 26px; /* 항목의 높이 */
  text-align: center; /* 텍스트 중앙 정렬 */
  color: #f08200;
  background-color: #dcf2ff;
}

.main_cate.c1 {
  // width: 6%;
  line-height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f08200;
  background-color: #dcf2ff;
}

.main_cate.c2 {
  width: 13%;
  line-height: 26px;
  color: #8f8f8f;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main_cate.c3 {
  width: 8%;
  line-height: 26px;
  color: #8f8f8f;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
}

.perc {
  display: flex;
  flex-direction: column;
}

.year_best,
.year_ideal {
  display: flex;
  flex-direction: row;
  gap: 4px;
}

.main_perc {
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
}

section.main_info {
  background-color: #f2f7f9;
  border-radius: 13px;
  padding: 19px 21px;
}

.main_info div {
  font-family: "Pretendard";
  font-size: 22px;
  font-weight: bold;
  color: rgb(6 137 225);
}

.main_info p {
  font-family: "Pretendard";
  font-size: 20px;
}

.main_btns {
  display: flex;
  flex-direction: row;
  margin: 20px 10px;
  gap: 10px;
  cursor: pointer;
}

.main_btns div:nth-child(1) {
  background-color: #e1f6eb;
  color: rgb(10, 161, 43);
  font-size: 22px;
}

.main_btns div:nth-child(2) {
  background-color: #06b45d;
  color: white;
  font-size: 22px;
}

.main_btns div {
  border-radius: 7px;
  line-height: 57px;
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: bold;
}

.perc div {
  font-family: "Pretendard";
  font-size: 18px;
  color: gray;
}

.year_best div,
.year_ideal div {
  color: #f08200;
  font-weight: bold;
  font-size: 30px;
  font-family: "Pretendard";
  letter-spacing: -1px;
}

.perc.p1 {
  border-right: 2px solid rgb(223, 223, 223);
  padding: 0 20px 0 0;
  margin-top: 30px;
  gap: 13px;
}

.perc.p2 {
  padding: 0 0 0 20px;
  margin-top: 30px;
  gap: 13px;
}

div.before {
  font-size: 17px;
  color: rgb(145 145 145);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
}

.bank_img {
  width: 80px;
  height: 80px;
}

.txt_img {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.bank-main-img {
  width: 100%;
}
.product-title {
  font-weight: bold;
}
.TabPanel_title {
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f3f5f7;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  color: #1e1e23;
}
.RelatedProduct_item {
  padding-bottom: 20px;
  border-bottom: 1px solid #f3f5f7;
  cursor: pointer;
}
.ProductInfo_article {
  position: relative;
  margin-top: 10px;
}
.ProductInfo_type {
  padding-left: 50px;
}
.ProductInfo_bi-circle {
  overflow: hidden;
  position: relative;
  display: inline-block;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  vertical-align: top;
  position: absolute;
  top: 0;
  left: 0;
}
.BiImage-module_article {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.ProductInfo_area-info {
  display: flex;
  justify-content: space-between;
}
.ProductInfo_info-text {
  flex: 1 1;
  min-width: 0;
}
.ProductInfo_title-box {
  display: flex;
}
.ProductInfo_title {
  font-size: 17px;
  line-height: 23px;
  letter-spacing: -0.3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  color: #1e1e23;
}
.ProductInfo_bank-name {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.3px;
  margin-top: 2px;
  color: #1e1e23;
}
.ProductInfo_info-rates {
  margin-left: 3px;
  text-align: right;
  white-space: nowrap;
}
.ProductInfo_top-rate {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: #f08200;
}
.ProductInfo_number {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5px;
  font-weight: bold;
  font-family: "Pretendard";
  letter-spacing: -1px;
}
.ProductInfo_percent {
  font-size: 19px;
}
.TabPanelButton_article {
  margin-top: 20px;
  cursor: pointer;
}
.TabPanelButton_button {
  display: block;
  text-align: center;
}
.InterestRateReceipt_info-desc {
  font-weight: bold;
  color: #f08200;
}
</style>
