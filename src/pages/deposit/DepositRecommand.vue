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
            <div
              v-for="amount in amounts"
              :key="amount"
              :class="{ active: selectedAmount === amount }"
              @click="selectAmount(amount)"
            >
              {{ amount }}
            </div>
            <!-- 직접입력 버튼 초기화  -->
            <div class="search-filter-icon" @click="resetFilters">
              <i class="fa-solid fa-arrows-rotate"></i>
            </div>
          </div>
        </div>
        <q-dialog v-model="showAmountInput">
          <q-card>
            <q-card-section>
              <div class="text-h6">목표 금액을 입력해주세요.</div>
            </q-card-section>

            <q-card-section>
              <q-input
                v-model="inputAmount"
                type="number"
                label="목표 금액(만원)"
                outlined
              ></q-input>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                flat
                label="취소"
                color="primary"
                @click="showAmountInput = false"
              ></q-btn>
              <q-btn
                flat
                label="확인"
                color="primary"
                @click="confirmAmount()"
              ></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
        <div class="period-wrapper">
          <p>목표기간</p>
          <div class="period-op">
            <div
              v-for="period in periods"
              :key="period"
              :class="{ active: selectedPeriod === period }"
              @click="Selectperiod(period)"
            >
              {{ period }}
            </div>
          </div>
        </div>
        <q-dialog v-model="showPeriodInput">
          <q-card>
            <q-card-section>
              <div class="text-h6">목표 기간을 입력해주세요.</div>
            </q-card-section>

            <q-card-section>
              <q-input
                v-model="inputPeriod"
                type="number"
                label="목표 기간(개월)"
                outlined
              ></q-input>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                flat
                label="취소"
                color="primary"
                @click="showPeriodInput = false"
              ></q-btn>
              <q-btn
                flat
                label="확인"
                color="primary"
                @click="confirPeriod()"
              ></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
        <div class="max-amount-wrapper">
          <div class="txt-max">
            <p>월 납입 가능 금액</p>
            <span>(선택)</span>
          </div>
          <div class="input-amount">
            <input
              type="number"
              placeholder="월 납입 최대 금액을 입력해주세요."
              v-model="Post_options.monthlyAmount"
            />만원
          </div>
        </div>
      </div>
      <div class="txt-option">선택 항목이니 자유롭게 입력해주세요.</div>
      <div class="box-option">
        <div
          v-for="(options, category) in optionCategories"
          :key="category"
          :class="`${category}-wrapper`"
        >
          <p>{{ options.label }}</p>
          <div class="opts">
            <div
              v-for="option in options.items"
              :key="option"
              :class="{ active: selectedOptions[category] === option }"
              @click="selectedOptions[category] = option"
            >
              {{ option }}
            </div>
          </div>
        </div>
        <div class="search-btn">
          <q-btn
            label="검색"
            class="search-btn-item"
            @click="searchSaving()"
          ></q-btn>
        </div>
        <div class="sideBanner" v-if="visible">
          <div v-if="visible_extra">
            <p>월 납입 금액 가입 가능 상품 요약</p>
          </div>
          <div class="sideTitle">적금 요약</div>
          <div class="sideContent">
            <ul class="txt_side">
              <li class="txt_1 stxt">원금 합계</li>
              <li class="txt_2 stxt">세전이자 합계</li>
              <li class="txt_3 stxt">이자과세 합계</li>
              <li class="txt_4 stxt">세후수령액 합계</li>
            </ul>
            <ul class="numb_side">
              <li class="numb_1 snumb">
                {{ total_sum.toLocaleString() }} 원
                <p class="sub-price">
                  (한 달 {{ month_amount.toLocaleString() }} 원)
                </p>
              </li>
              <li class="numb_2 snumb">
                {{ total_interest.toLocaleString() }} 원
              </li>
              <li class="numb_3 snumb">{{ total_tax.toLocaleString() }} 원</li>
              <li class="numb_4 snumb">
                {{ total_final_amount.toLocaleString() }} 원
              </li>
            </ul>
          </div>
          <div class="extra-sum" v-if="summary" @click="summary_func('열기')">
            <p>추가 적금 요약 펼치기</p>
          </div>
          <div class="extra-summary" v-if="visible_summary">
            <div class="sideTitle">추가 적금 요약</div>
            <div class="sideContent">
              <ul class="txt_side">
                <li class="txt_1 stxt">원금 합계</li>
                <li class="txt_2 stxt">세전이자 합계</li>
                <li class="txt_3 stxt">이자과세 합계</li>
                <li class="txt_4 stxt">세후수령액 합계</li>
              </ul>
              <ul class="numb_side">
                <li class="numb_1 snumb">
                  {{ (extra_sum.extra_total_sum || 0).toLocaleString() }} 원
                  <p class="sub-price">
                    (한 달
                    {{ (extra_sum.extra_month_amount || 0).toLocaleString() }}
                    원)
                  </p>
                </li>
                <li class="numb_2 snumb">
                  {{ (extra_sum.extra_total_interest || 0).toLocaleString() }}
                  원
                </li>
                <li class="numb_3 snumb">
                  {{ (extra_sum.extra_total_tax || 0).toLocaleString() }} 원
                </li>
                <li class="numb_4 snumb">
                  {{
                    (extra_sum.extra_total_final_amount || 0).toLocaleString()
                  }}
                  원
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div v-if="result_visible">
        <div class="txt-saving">
          선택하신 조건에 맞는 {{ resultDeposit.length }}개 적금입니다.
        </div>
        <div
          class="box-saving result"
          v-for="(item, idx) in resultDeposit"
          :key="idx"
          @click="goDepositDetail(item.deposit.code)"
        >
          <div class="saving-top">
            <div class="top-left">
              <div class="saving-img">
                <img
                  :src="item.deposit.companylogourl"
                  alt=""
                  class="deposit-img"
                />
              </div>
              <div class="saving-tit">
                <p class="saving-name">
                  {{ item.deposit.name }} ({{
                    item.deposit.product_period
                  }}개월)
                </p>
                <p class="bank-name">{{ item.deposit.companyName }}</p>
              </div>
            </div>
            <div class="top-right">
              <p class="rate-text">금리</p>
              <span class="max-rate">
                {{ item.deposit.primeInterestRate }}%</span
              >
            </div>
          </div>
          <div class="saving-bott">
            <!-- 삭제 예정 테스트용 -->
            <!-- <p style="font-weight: 900">
              매월{{ item.m_월납입금.toLocaleString() }}
            </p> -->
            <!-- 삭제 예정 테스트용 -->
            <div class="nmonth-area">
              <div
                class="nmonth-q"
                @mouseover="showTriTxt = true"
                @mouseleave="showTriTxt = false"
              >
                ?
              </div>
              <div class="tri-txt" v-show="showTriTxt">
                <div class="nmonth-tri"></div>
                <div class="nmonth-txt">
                  아래 계산은 총 3번의 상품 가입을 기준으로 계산 된 수치입니다.
                </div>
              </div>
            </div>
            <div class="box-tot-price">
              <p>원금 합계</p>
              <p class="tot-price">{{ item.m_원금.toLocaleString() }}원</p>
            </div>
            <div class="box-bef-int">
              <p>세전 이자</p>
              <p class="bef-int">+{{ item.m_이자.toLocaleString() }}원</p>
            </div>
            <div class="box-int-tax">
              <p>이자과세(15.4%)</p>
              <p class="int-tax">-{{ item.m_세금.toLocaleString() }}원</p>
            </div>
            <div class="line"></div>
            <div class="box-aft-tax">
              <p>세후수령액</p>
              <p class="aft-tax">{{ item.m_만기금액.toLocaleString() }}원</p>
            </div>
          </div>
        </div>
      </div>
      <div class="plus-btn" v-if="visible_extra" @click="open_plus('열기')">
        목표 달성을 위한 추가 상품 확인하기
        <i class="fa-solid fa-arrow-down"></i>
      </div>
      <!-- 추가 상품 -->
      <div v-if="extra_btn">
        <div
          class="box-saving result"
          v-for="(item, idx) in extra_deposit"
          :key="idx"
          @click="goDepositDetail(item.deposit.code)"
        >
          <div class="saving-top">
            <div class="top-left">
              <div class="saving-img">
                <img
                  :src="item.deposit.companylogourl"
                  alt=""
                  class="deposit-img"
                />
              </div>
              <div class="saving-tit">
                <p class="saving-name">{{ item.deposit.name }}</p>
                <p class="bank-name">{{ item.deposit.companyName }}</p>
                <p class="top-middle">
                  * 해당 상품은 목표 달성을 위한 추가 상품입니다.
                </p>
              </div>
            </div>
            <div class="top-right">
              금리
              <span class="max-rate"
                >{{ item.deposit.primeInterestRate }}%</span
              >
            </div>
          </div>
          <div class="saving-bott">
            <div class="box-tot-price">
              <p>원금 합계</p>
              <p class="tot-price">{{ item.m_원금.toLocaleString() }}원</p>
            </div>
            <div class="box-bef-int">
              <p>세전 이자</p>
              <p class="bef-int">+{{ item.m_이자.toLocaleString() }}원</p>
            </div>
            <div class="box-int-tax">
              <p>이자과세(15.4%)</p>
              <p class="int-tax">-{{ item.m_세금.toLocaleString() }}원</p>
            </div>
            <div class="line"></div>
            <div class="box-aft-tax">
              <p>세후수령액</p>
              <p class="aft-tax">{{ item.m_만기금액.toLocaleString() }}원</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="plus-btn close-btn"
        v-if="close_extra"
        @click="open_plus('닫기')"
      >
        목표 달성을 위한 추가 상품 접기
        <i class="fa-solid fa-arrow-up"></i>
      </div>
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

const showTriTxt = ref(false);

const $router = useRouter();
const $route = useRoute();
const $q = useQuasar();
const upAmount = ref("직접 입력");
const upPeriod = ref("직접 입력");

const amounts = computed(() => [
  "1000만원",
  "3000만원",
  "5000만원",
  "1억",
  upAmount.value,
]);

const periods = computed(() => [
  "6개월",
  "1년",
  "2년",
  "3년",
  "5년",
  upPeriod.value,
]);

const selectedAmount = ref("");
const selectedPeriod = ref("");
const showAmountInput = ref(false);
const showPeriodInput = ref(false);

const resetAmount = () => {
  selectedAmount.value = "";
  upAmount.value = "직접 입력";
  showAmountInput.value = false;
};

const optionCategories = {
  age: {
    label: "청년여부",
    items: ["미성년자", "만 19세 - 34세", "만 40세 이상"],
  },
  weak: {
    label: "취약계층",
    items: ["해당 있음", "해당 없음"],
  },
  child: {
    label: "자녀여부",
    items: ["자녀 있음", "자녀 없음"],
  },
  business: {
    label: "사업자여부",
    items: ["사업자", "개인"],
  },
  military: {
    label: "군복무여부",
    items: ["해당 있음", "해당 없음"],
  },
};

const selectedOptions = ref({
  age: "",
  weak: "",
  child: "",
  business: "",
  military: "",
});

const Post_options = ref({
  period: "",
  targetAmount: "",
  mainBank: "",
  monthlyAmount: 0,
  business: "N",
  children: "N",
  vulnerableSocialGroup: "N",
  young: "N",
  old: "N",
  soldier: "N",
});

const selectingOptions = (option) => {
  selectedOptions.value = option;
};

const selectAmount = (amount) => {
  selectedAmount.value = amount;

  if (amount == "1000만원") {
    Post_options.value.targetAmount = 10000000;
  } else if (amount == "3000만원") {
    Post_options.value.targetAmount = 30000000;
  } else if (amount == "5000만원") {
    Post_options.value.targetAmount = 50000000;
  } else if (amount == "1억") {
    Post_options.value.targetAmount = 100000000;
  } else if (amount == "직접 입력") {
    Post_options.value.targetAmount = 0;
  }

  console.log("목표금액 확인", Post_options.value.targetAmount);
  if (amount === "직접 입력") {
    showAmountInput.value = true;
  }
};

const Selectperiod = (period) => {
  selectedPeriod.value = period;
  if (period == "6개월") {
    Post_options.value.period = 6;
  } else if (period == "1년") {
    Post_options.value.period = 12;
  } else if (period == "2년") {
    Post_options.value.period = 24;
  } else if (period == "3년") {
    Post_options.value.period = 36;
  } else if (period == "5년") {
    Post_options.value.period = 60;
  } else if (period == "직접 입력") {
    Post_options.value.period = 0;
  }
  console.log("목표기간 확인", Post_options.value.period);

  if (period === "직접 입력") {
    showPeriodInput.value = true;
  }
};

const inputAmount = ref(0);

const confirmAmount = () => {
  if (selectedAmount.value === "직접 입력") {
    upAmount.value = `${inputAmount.value.toLocaleString()}만원`;
    selectedAmount.value = upAmount.value;
  }

  Post_options.value.targetAmount = inputAmount.value * 10000;
  console.log("목표금액 확인", Post_options.value.targetAmount);

  showAmountInput.value = false;
};

const inputPeriod = ref(0);

const confirPeriod = () => {
  if (selectedPeriod.value === "직접 입력") {
    upPeriod.value = `${inputPeriod.value}개월`;
    selectedPeriod.value = upPeriod.value;
  }

  Post_options.value.period = inputPeriod.value;
  console.log("목표기간 확인", Post_options.value.period);

  showPeriodInput.value = false;
};

watch(
  selectedOptions,
  (newOptions) => {
    // 청년여부 처리
    if (newOptions.age === "미성년자") {
      Post_options.value.young = "N";
      Post_options.value.old = "N";
    } else if (newOptions.age === "만 19세 - 34세") {
      Post_options.value.young = "Y";
      Post_options.value.old = "N";
    } else if (newOptions.age === "만 40세 이상") {
      Post_options.value.young = "N";
      Post_options.value.old = "Y";
    }

    // 취약계층 처리
    if (newOptions.weak === "해당 있음") {
      Post_options.value.vulnerableSocialGroup = "Y";
    } else {
      Post_options.value.vulnerableSocialGroup = "N";
    }

    // 자녀 여부 처리
    if (newOptions.child === "자녀 있음") {
      Post_options.value.children = "Y";
    } else {
      Post_options.value.children = "N";
    }

    // 사업자 여부 처리
    if (newOptions.business === "사업자") {
      Post_options.value.business = "Y";
    } else {
      Post_options.value.business = "N";
    }

    // 군복무 여부 처리
    if (newOptions.military === "해당 있음") {
      Post_options.value.soldier = "Y";
    } else {
      Post_options.value.soldier = "N";
    }

    console.log("Updated Post_options", Post_options.value);
  },
  { deep: true }
);

const resultDeposit = ref({});

const total_sum = ref(0);
const total_interest = ref(0);
const total_tax = ref(0);
const total_final_amount = ref(0);
const month_amount = ref(0);

const visible = ref(false);

const result_visible = ref(false);

const extra_sum = ref({
  extra_total_sum: 0,
  extra_total_interest: 0,
  extra_total_tax: 0,
  extra_total_final_amount: 0,
  extra_month_amount: 0,
});

// 초기화 함수
const resetFilters = () => {
  resetAmount();
  selectedPeriod.value = "";
  selectedOptions.value = {
    age: "",
    weak: "",
    child: "",
    business: "",
    military: "",
  };
  Post_options.value = {
    period: "",
    targetAmount: "",
    mainBank: "",
    monthlyAmount: 0,
    business: "N",
    children: "N",
    vulnerableSocialGroup: "N",
    young: "N",
    old: "N",
    soldier: "N",
  };
};

const extra_deposit = ref({});

const visible_extra = ref(false);

const searchSaving = async () => {
  // $q.loading.show({
  //   message: "맞춤 적금을 분석중입니다. 잠시만 기다려 주세요.",
  //   delay: 400, // ms
  // });

  // Post_options.value.period string 변환
  Post_options.value.period = Post_options.value.period.toString();
  Post_options.value.monthlyAmount = Post_options.value.monthlyAmount * 10000;

  if (
    Post_options.value.period === "" ||
    Post_options.value.targetAmount === ""
  ) {
    $q.notify({
      color: "negative",
      position: "center",
      message: "필수 항목을 입력해주세요.",
    });
    return;
  }

  console.log("Post_options", Post_options.value);

  const url = `${process.env.API}/v1/bank/recommand/deposit`;

  await api.post(url, Post_options.value).then((res) => {
    Post_options.value.monthlyAmount = Post_options.value.monthlyAmount / 10000;
    result_visible.value = true;
    visible.value = true;
    console.log("결과값", res);

    resultDeposit.value = res.data.result;
    total_sum.value = res.data.total_sum;
    total_interest.value = res.data.total_interest;
    total_tax.value = res.data.total_tax;
    total_final_amount.value = res.data.total_final_amount;
    month_amount.value = res.data.month_amount;

    if (
      Array.isArray(res.data.extra_deposit) &&
      res.data.extra_deposit.length > 0
    ) {
      visible_extra.value = true;
      summary.value = true;
    }

    extra_deposit.value = res.data.extra_deposit;

    extra_sum.value.extra_total_sum = res.data.extra_total_sum;
    extra_sum.value.extra_total_interest = res.data.extra_total_interest;
    extra_sum.value.extra_total_tax = res.data.extra_total_tax;
    extra_sum.value.extra_total_final_amount =
      res.data.extra_total_final_amount;
    extra_sum.value.extra_month_amount = res.data.extra_month_amount;

    // $q.loading.hide();
  });
};

const goDepositDetail = (detailId) => {
  console.log("detailId", detailId);
  $router.push({
    path: `/deposit/DepositDetail/${detailId}`,
  });
};

const extra_btn = ref(false);
const close_extra = ref(false);

const open_plus = (value) => {
  if (value == "열기") {
    extra_btn.value = true;
    visible_extra.value = false;
    close_extra.value = true;
  } else if (value == "닫기") {
    extra_btn.value = false;
    visible_extra.value = true;
    close_extra.value = false;
  }
};

const summary = ref(false);

const visible_summary = ref(false);

const summary_func = (value) => {
  if (value == "열기") {
    visible_summary.value = true;
    summary.value = false;
  } else if (value == "닫기") {
    visible_summary.value = false;
  }
};
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
  // cursor: pointer;
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

.amount-op div,
.period-op div {
  background-color: #f9f9f9;
  border-radius: 4px;
  color: #a3a1a1;
  line-height: 30px;
  cursor: pointer;
  width: 71px;
  text-align: center;
}

.amount-op,
.period-op {
  display: flex;
  flex-direction: row;
  margin: 17px 10px;
}

.period-op {
  gap: 12px;
}

.amount-op {
  gap: 8px;
}

.opts {
  display: flex;
  flex-direction: row;
  margin: 17px 10px;
  gap: 10px;
}

.opts div {
  background-color: #f9f9f9;
  border-radius: 4px;
  color: #a3a1a1;
  line-height: 30px;
  padding: 0 15px;
  cursor: pointer;
}

.input-amount input[type="number"] {
  outline: none;
  border: 0;
  border-bottom: 1px solid #b6b6b6;
  margin: 20px 0;
  width: 38%;
  margin-left: 13px;
  padding-left: 5px;
}

.amount-input input[type="number"] {
  outline: none;
  border: 0;
  border-bottom: 1px solid #b6b6b6;
  margin-bottom: 20px;
  width: 38%;
  margin-left: 13px;
  padding-left: 5px;
}

.txt-essen,
.txt-option,
.txt-saving {
  padding: 20px 0 7px 50px;
}

.saving-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.top-middle {
  font-size: 12px;
  color: #fd6102;
}

.saving-img {
  width: 50px;
  height: 50px;

  border-radius: 50px;
}
.deposit-img {
  width: 50px;
  height: 50px;

  border-radius: 50px;
}

.top-left {
  display: flex;
  flex-direction: row;
  gap: 22px;
}

.saving-mini-op {
  display: flex;
  flex-direction: row;
}

.saving-name {
  font-weight: bolder;
  color: #1049de;
  font-size: 17px;
  letter-spacing: -0.5px;
  font-family: "Noto Sans KR";
}

.bank-name {
  font-size: 15px;
  letter-spacing: -0.5px;
  font-family: "Noto Sans KR";
}

.box-tot-price,
.box-bef-int,
.box-aft-tax,
.box-int-tax {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.box-aft-tax {
  padding-top: 15px;
}

.line {
  border-bottom: 1px solid rgb(227, 227, 227);
  padding: 8px;
}

.saving-bott {
  padding-top: 50px;
}

.box-saving.result {
  padding-right: 40px;
  margin-top: 20px;
}

.tot-price,
.bef-int,
.int-tax,
.aft-tax {
  font-weight: bolder;
}

.aft-tax {
  color: #1049de;
  font-size: 18px;
}

.top-right {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  font-weight: 900;
  color: #1049de;
}

.active {
  border: 2px solid #1049de;
}

.amount-op div.active,
.period-op div.active,
.opts div.active {
  color: #1049de;
}

.q-dialog {
  width: 300px;
}
.search-btn {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  // background-color: #fd6102;
}
.search-btn-item {
  background-color: #fd6102;
  color: #ffffff;
}

button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--standard.q-btn--rectangle.bg-primary.text-white.q-btn--actionable.q-focusable.q-hoverable {
  width: 80%;
  font-size: 15px;
}

.sideBanner {
  position: fixed;
  top: 10%;
  right: 2%;
  width: 250px;
  padding: 20px 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  margin-top: 200px;
}

.sideContent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sideTitle {
  font-size: 20px;
  font-weight: bolder;
  padding-bottom: 35px;
  color: #1049de;
}

ul.numb_side {
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-weight: bolder;
  color: #1049de;
  text-align: right;
}

ul.txt_side {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.search-filter-icon {
  // border: 1px solid #e5e8ed;
  // color: #767676;
  padding: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
}
.extra-deposit-top {
  margin-bottom: 20px;
  color: green;
  font-weight: 900;
  border-bottom: solid 1px green;
}

.plus-btn {
  width: 90%;
  background-color: #efae1a;
  border-radius: 7px;
  margin: 0 auto;
  line-height: 35px;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
  font-weight: 800;
}

i.fa-solid.fa-arrow-down {
  color: #343535;
}
.extra-sum {
  width: 90%;
  background-color: #efae1a;
  border-radius: 7px;
  margin: 0 auto;
  line-height: 35px;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
  font-weight: 800;
}
.close-btn {
  margin-bottom: 40px;
}
p.rate-text {
  margin-right: 3px;
}
.sub-price {
  font-size: 12px;
}

.nmonth-tri {
  width: 0px;
  height: 0px;
  border-top: 6px solid transparent;
  border-right: 9px solid #eeeeee;
  border-bottom: 6px solid transparent;
  margin-top: 5px;
}

.nmonth-q {
  width: 19px;
  height: 19px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a4a4a4;
  font-size: 16px;
  cursor: pointer;
}

.nmonth-txt {
  color: #8c8a8a;
  background-color: #eeeeee;
  border-radius: 3px;
  width: 62%;
  font-size: 12px;
  padding-left: 5px;
  line-height: 23px;
}

.tri-txt {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.nmonth-area {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.box-tot-price {
  margin-top: 8px;
}
</style>
