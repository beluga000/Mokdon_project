<template>
  <q-layout class="page-container page-background">
    <!-- <section class="">
      <div class="q-pa-md q-gutter-sm">
        <q-btn no-caps push color="primary" label="List BottomSheet" @click="show()" />
        <q-btn no-caps push color="white" text-color="primary" label="Grid BottomSheet" @click="show(true)" />
      </div>
    </section> -->
    <q-page class="common-container">
      <section class="page-section">
        <div class="page-event">신용카드</div>
      </section>
      <section class="page-section">
        <article class="card-article">
          <div class="article-title">카드사</div>
          <q-tabs
            v-model="cardCompanyCode"
            inline-label
            class="bg-white tab-list"
          >
            <q-tab @click="selectCardCompany('SH', '신한카드')">
              <div class="card-company-logo">
                <img
                  src="https://vertical.pstatic.net/vertical-cardad/company/SH.png"
                  alt="신한카드"
                />
              </div>
            </q-tab>
            <q-tab @click="selectCardCompany('HD', '현대카드')">
              <div class="card-company-logo">
                <img
                  class="logo"
                  src="https://vertical.pstatic.net/vertical-cardad/company/HD.png"
                  alt="현대카드"
                />
              </div>
            </q-tab>
            <q-tab @click="selectCardCompany('SS', '삼성카드')">
              <div class="card-company-logo">
                <img
                  class="logo"
                  src="https://vertical.pstatic.net/vertical-cardad/company/SS.png"
                  alt="삼성카드"
                />
              </div>
            </q-tab>
            <q-tab @click="selectCardCompany('KB', 'KB국민카드')">
              <div class="card-company-logo">
                <img
                  class="logo"
                  src="https://vertical.pstatic.net/vertical-cardad/company/KB.png"
                  alt="KB국민카드"
                />
              </div>
            </q-tab>
            <q-tab @click="selectCardCompany('LO', '롯데카드')">
              <div class="card-company-logo">
                <img
                  class="logo"
                  src="https://vertical.pstatic.net/vertical-cardad/company/LO.png"
                  alt="롯데카드"
                />
              </div>
            </q-tab>
            <q-tab @click="selectCardCompany('SK', '하나카드')">
              <div class="card-company-logo">
                <img
                  class="logo"
                  src="https://vertical.pstatic.net/vertical-cardad/company/SK.png"
                  alt="하나카드"
                />
              </div>
            </q-tab>
            <q-tab @click="selectCardCompany('NH', 'NH농협카드')">
              <div class="card-company-logo">
                <img
                  class="logo"
                  src="https://vertical.pstatic.net/vertical-cardad/company/NH.png"
                  alt="NH농협카드"
                />
              </div>
            </q-tab>
            <q-tab @click="selectCardCompany('IB', 'IBK기업은행')">
              <div class="card-company-logo">
                <img
                  class="logo"
                  src="https://vertical.pstatic.net/vertical-cardad/company/IB.png"
                  alt="IBK기업은행"
                />
              </div>
            </q-tab>
            <q-tab @click="selectCardCompany('BC', 'BC카드')">
              <div class="card-company-logo">
                <img
                  class="logo"
                  src="https://vertical.pstatic.net/vertical-cardad/company/bc.png"
                  alt="BC카드"
                />
              </div>
            </q-tab>
          </q-tabs>
        </article>
        <article class="card-article">
          <div class="article-title">전월실적</div>
          <q-tabs
            v-model="cardPerformance"
            inline-label
            class="bg-white tab-list"
          >
            <q-tab
              name="전체"
              label="전체"
              @click="changeSearchForm('basement', '0')"
            />
            <q-tab
              name="~30만원"
              label="~30만원"
              @click="changeSearchForm('basement', '300000')"
            />
            <q-tab
              name="~50만원"
              label="~50만원"
              @click="changeSearchForm('basement', '500000')"
            />
          </q-tabs>
        </article>
        <article class="card-article">
          <div class="article-title">연회비</div>
          <q-tabs
            v-model="cardAnnualFee"
            inline-label
            class="bg-white tab-list"
          >
            <q-tab
              name="전체"
              label="전체"
              @click="changeSearchForm('maxAnnualFee', '0')"
            />
            <q-tab
              name="~1만원"
              label="~1만원"
              @click="changeSearchForm('maxAnnualFee', '10000')"
            />
            <q-tab
              name="~3만원"
              label="~3만원"
              @click="changeSearchForm('maxAnnualFee', '30000')"
            />
            <q-tab
              name="~10만원"
              label="~10만원"
              @click="changeSearchForm('maxAnnualFee', '100000')"
            />
          </q-tabs>
        </article>
        <article class="card-article">
          <div class="article-title">혜택</div>
          <q-tabs inline-label class="bg-white tab-list">
            <q-tab
              name="주유"
              label="주유"
              @click="handleBenefitClick('주유')"
            />
            <q-tab
              name="쇼핑"
              label="쇼핑"
              @click="handleBenefitClick('쇼핑')"
            />
            <q-tab
              name="대형마트"
              label="대형마트"
              @click="handleBenefitClick('대형마트')"
            />
            <q-tab
              name="편의점"
              label="편의점"
              @click="handleBenefitClick('편의점')"
            />
            <q-tab
              name="외식"
              label="외식"
              @click="handleBenefitClick('외식')"
            />
            <q-tab
              name="카페/베이커리"
              label="카페/베이커리"
              @click="handleBenefitClick('카페/베이커리')"
            />
            <q-tab
              name="영화"
              label="영화"
              @click="handleBenefitClick('영화')"
            />
            <q-tab
              name="대중교통"
              label="대중교통"
              @click="handleBenefitClick('대중교통')"
            />
            <q-tab
              name="관리비"
              label="관리비"
              @click="handleBenefitClick('관리비')"
            />
            <q-tab
              name="통신"
              label="통신"
              @click="handleBenefitClick('통신')"
            />
            <q-tab
              name="교육"
              label="교육"
              @click="handleBenefitClick('교육')"
            />
            <q-tab
              name="육아"
              label="육아"
              @click="handleBenefitClick('육아')"
            />
            <q-tab
              name="문화"
              label="문화"
              @click="handleBenefitClick('문화')"
            />
            <q-tab
              name="레저"
              label="레저"
              @click="handleBenefitClick('레저')"
            />
            <q-tab
              name="항공마일리지"
              label="항공마일리지"
              @click="handleBenefitClick('항공마일리지')"
            />
            <q-tab
              name="Priority Pass"
              label="Priority Pass"
              @click="handleBenefitClick('Priority Pass')"
            />
            <q-tab
              name="프리미엄"
              label="프리미엄"
              @click="handleBenefitClick('프리미엄')"
            />
            <q-tab
              name="하이패스"
              label="하이패스"
              @click="handleBenefitClick('하이패스')"
            />
            <q-tab
              name="오토"
              label="오토"
              @click="handleBenefitClick('오토')"
            />
            <q-tab
              name="의료"
              label="의료"
              @click="handleBenefitClick('의료')"
            />
            <q-tab
              name="뷰티"
              label="뷰티"
              @click="handleBenefitClick('뷰티')"
            />
            <q-tab
              name="금융"
              label="금융"
              @click="handleBenefitClick('금융')"
            />
            <q-tab
              name="체크카드겸용"
              label="체크카드겸용"
              @click="handleBenefitClick('체크카드겸용')"
            />
            <q-tab
              name="포인트/캐시백"
              label="포인트/캐시백"
              @click="handleBenefitClick('포인트/캐시백')"
            />
            <q-tab
              name="바우처"
              label="바우처"
              @click="handleBenefitClick('바우처')"
            />
            <q-tab
              name="언제나할인"
              label="언제나할인"
              @click="handleBenefitClick('언제나할인')"
            />
            <q-tab
              name="간편결제"
              label="간편결제"
              @click="handleBenefitClick('간편결제')"
            />
            <q-tab
              name="렌탈"
              label="렌탈"
              @click="handleBenefitClick('렌탈')"
            />
            <q-tab
              name="경차유류환급"
              label="경차유류환급"
              @click="handleBenefitClick('경차유류환급')"
            />
            <q-tab
              name="연회비지원"
              label="연회비지원"
              @click="handleBenefitClick('연회비지원')"
            />
            <q-tab
              name="국민행복카드"
              label="국민행복카드"
              @click="handleBenefitClick('국민행복카드')"
            />
            <q-tab
              name="그린카드"
              label="그린카드"
              @click="handleBenefitClick('그린카드')"
            />
            <q-tab
              name="THE CJ카드"
              label="THE CJ카드"
              @click="handleBenefitClick('THE CJ카드')"
            />
            <q-tab
              name="납부 혜택"
              label="납부 혜택"
              @click="handleBenefitClick('납부 혜택')"
            />
            <q-tab
              name="반려동물"
              label="반려동물"
              @click="handleBenefitClick('반려동물')"
            />
          </q-tabs>
        </article>
      </section>
      <section class="page-section">
        <div class="search-filter-wrap">
          <!-- <p>선택 검색 조건</p> -->
          <ul class="search-filter-item-wrap">
            <li class="search-filter-item" v-if="cardCompanyName">
              <p>{{ cardCompanyName }}</p>
              <span @click="removeFilter('cardCompany')">
                <i class="fa-solid fa-xmark"></i>
              </span>
            </li>
            <li
              class="search-filter-item"
              v-for="(benefit, index) in cardBenefits"
              :key="index"
            >
              <p>{{ benefit }}</p>
              <span @click="removeFilter('cardBenefits', index)">
                <i class="fa-solid fa-xmark"></i>
              </span>
            </li>
            <li class="search-filter-item" v-if="cardAnnualFee">
              <p>{{ cardAnnualFee }}</p>
              <span @click="removeFilter('cardAnnualFee')">
                <i class="fa-solid fa-xmark"></i>
              </span>
            </li>
            <li class="search-filter-item" v-if="cardPerformance">
              <p>{{ cardPerformance }}</p>
              <span @click="removeFilter('cardPerformance')">
                <i class="fa-solid fa-xmark"></i>
              </span>
            </li>
          </ul>
          <div class="search-filter-icon" @click="resetFilters">
            <i class="fa-solid fa-arrows-rotate"></i>
          </div>
        </div>
      </section>
      <section class="sort-button">
        <button class="filter_button" @click="changeFilterOption">
          {{ filterOption }}
        </button>
        <select class="sort-select" @change="changeSortOrder">
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
      </section>
      <div>
        <div v-if="product.cards && product.cards.length > 0">
          <section
            class="page-section"
            v-for="(li, idx) in product.cards"
            :key="idx"
            @click="goCardsDetail(li.cardAdId)"
          >
            <div class="card-section">
              <div class="card-img-box">
                <div class="card-img-wrap">
                  <img
                    :src="li.cardImageUrl"
                    class="card-img"
                    alt="카드 이미지"
                  />
                </div>
              </div>
              <div class="card-text">
                <ul class="card-list">
                  <li class="card-name">{{ li.cardName }}</li>
                  <li
                    class="discount-amount"
                    v-if="li.max_discount[0].price != '0'"
                  >
                    월 최대 혜택
                    {{ li.max_discount[0].price.toLocaleString() }} 원
                  </li>
                  <li>
                    <div class="card-description">
                      {{ li.titleDescription }}
                    </div>
                  </li>
                  <li class="card-fee-benefit">
                    <div class="card-annualfee">
                      <p>연회비</p>
                      <p>
                        <span class="annualfee-title">국내</span>
                        {{ li.domesticAnnualFee.toLocaleString() }}원
                      </p>
                      <p>
                        <span class="annualfee-title">해외</span>
                        {{ li.foreignAnnualFee.toLocaleString() }}원
                      </p>
                    </div>
                  </li>
                  <li class="card-benefits">
                    <div v-for="(benefit, idx) in li.benefits" :key="idx">
                      <span class="benefits-item" v-if="idx < 2">
                        <span>💎</span>
                        {{ benefit.rootBenefitCategoryIdName }}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div v-else>
          <section class="page-section">
            <div>검색결과가 없습니다.</div>
          </section>
        </div>
      </div>
      <div v-if="product.cards && product.cards.length > 0">
        <article>
          <button class="addData" @click="loadMoreCards">
            <span v-if="product.cards"
              >{{ product.cards.length }} / {{ totalData }}</span
            >
          </button>
        </article>
      </div>
    </q-page>
    <div class="common-container info-wrap">
      <p class="info-title">
        <i class="fa-solid fa-circle-info"></i> 안내 사항
      </p>
      <p>
        해당 사이트는 포트폴리오용 사이트로 실제 서비스가 되지 않으며, 제공되는
        정보는 올바르지 않을 수 있음을 알립니다.
      </p>
    </div>
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
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { api } from "boot/axios";
import axios from "axios";

defineOptions({
  name: "SavingsAccount",
});

const $router = useRouter();
const $route = useRoute();
const $q = useQuasar();
// 필터
const cardCompanyCode = ref("");
const cardCompanyName = ref("");
const cardBenefits = reactive([]);
const cardAnnualFee = ref("");
const cardPerformance = ref("");

const benefitIcon = ref("");

const filterOption = ref("연회비");
const sortOrder = ref("asc");
const changeFilterOption = () => {
  filterOption.value = filterOption.value === "연회비" ? "전월실적" : "연회비";
  updateSortParams();
  CardList();
};

const updateSortParams = () => {
  if (filterOption.value === "연회비") {
    searchForm.value.annualFeeSort = sortOrder.value;
    searchForm.value.basementSort = "";
  } else {
    searchForm.value.annualFeeSort = "";
    searchForm.value.basementSort = sortOrder.value;
  }
};

const changeSortOrder = (event) => {
  sortOrder.value = event.target.value;
  updateSortParams();
  CardList();
};

// const show = (grid) => {
//       $q.bottomSheet({
//         message: 'Bottom Sheet message',
//         grid,
//         actions: [
//           {
//             label: 'Drive',
//             img: 'https://cdn.quasar.dev/img/logo_drive_128px.png',
//             id: 'drive'
//           },
//           {
//             label: 'Keep',
//             img: 'https://cdn.quasar.dev/img/logo_keep_128px.png',
//             id: 'keep'
//           },
//           {
//             label: 'Google Hangouts',
//             img: 'https://cdn.quasar.dev/img/logo_hangouts_128px.png',
//             id: 'calendar'
//           },
//           {
//             label: 'Calendar',
//             img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png',
//             id: 'calendar'
//           },
//           {},
//           {
//             label: 'Share',
//             icon: 'share',
//             id: 'share'
//           },
//           {
//             label: 'Upload',
//             icon: 'cloud_upload',
//             color: 'primary',
//             id: 'upload'
//           },
//           {},
//           {
//             label: 'John',
//             avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
//             id: 'john'
//           }
//         ]
//       }).onOk(action => {
//         // console.log('Action chosen:', action.id)
//       }).onCancel(() => {
//         // console.log('Dismissed')
//       }).onDismiss(() => {
//         // console.log('I am triggered on both OK and Cancel')
//       })
//     }

// onMounted(() => {
//   CardList();
//   console.log("onmounted");
// });

const searchForm = ref({
  limit: "10",
  page: "1",
  code: "",
  benefits: "",
  basement: "",
  maxAnnualFee: "",
  annualFeeSort: "asc",
  basementSort: "",
});

const changeSearchForm = (key, value) => {
  searchForm.value[key] = value;
  CardList();
};

const selectCardCompany = (code, name) => {
  cardCompanyCode.value = code;
  cardCompanyName.value = name;
  changeSearchForm("code", code);
};

const handleBenefitClick = (benefit) => {
  toggleBenefit(benefit);
  changeSearchForm("benefits", cardBenefits.join(","));
};

const toggleBenefit = (benefit) => {
  const index = cardBenefits.indexOf(benefit);
  if (index === -1) {
    cardBenefits.push(benefit);
  } else {
    cardBenefits.splice(index, 1);
  }
};

const totalData = ref(0);

const product = ref({ cards: [] });

const CardList = async (menu_to_benefit) => {
  if (menu_to_benefit) {
    if (!cardBenefits.includes(menu_to_benefit)) {
      cardBenefits.push(menu_to_benefit);
    }
    changeSearchForm("benefits", cardBenefits.join(","));
  }

  console.log("..?");
  const url = `${process.env.API}/v1/card/list?limit=${encodeURIComponent(
    searchForm.value.limit
  )}&page=${encodeURIComponent(
    searchForm.value.page
  )}&code=${encodeURIComponent(
    searchForm.value.code
  )}&benefits=${encodeURIComponent(
    searchForm.value.benefits
  )}&basement=${encodeURIComponent(
    searchForm.value.basement
  )}&maxAnnualFee=${encodeURIComponent(
    searchForm.value.maxAnnualFee
  )}&annualFeeSort=${encodeURIComponent(
    searchForm.value.annualFeeSort
  )}&basementSort=${encodeURIComponent(searchForm.value.basementSort)}`;

  await api
    .get(url)
    .then((res) => {
      if (res.data.cards === null) {
        console.log("검색 결과없음");
        product.value.cards = [];
      }

      if (searchForm.value.page === "1") {
        product.value.cards = res.data.cards;
      } else {
        product.value.cards = product.value.cards.concat(res.data.cards);
      }
      totalData.value = res.data.total;
    })
    .catch((err) => {
      console.log(err);
    });
};

const loadMoreCards = () => {
  searchForm.value.page = (parseInt(searchForm.value.page) + 1).toString();
  CardList();
};

const removeFilter = (type, index = null) => {
  if (type === "cardCompany") {
    cardCompanyCode.value = "";
    cardCompanyName.value = "";
    changeSearchForm("code", "");
  } else if (type === "cardBenefits" && index !== null) {
    if (cardBenefits) {
      cardBenefits.splice(index, 1);
      changeSearchForm("benefits", cardBenefits.join(","));
    }
  } else if (type === "cardAnnualFee") {
    cardAnnualFee.value = "";
    changeSearchForm("maxAnnualFee", "");
  } else if (type === "cardPerformance") {
    cardPerformance.value = "";
    changeSearchForm("basement", "");
  }
};

const resetFilters = () => {
  cardCompanyCode.value = "";
  cardCompanyName.value = "";
  cardBenefits.length = 0;
  cardAnnualFee.value = "";
  cardPerformance.value = "";
  searchForm.value = {
    limit: "10",
    page: "1",
    code: "",
    benefits: "",
    basement: "",
    maxAnnualFee: "",
  };
  CardList();
};

const goCardsDetail = (detailId) => {
  console.log("detailId", detailId);
  $router.push({
    path: `/savings/cards/${detailId}`,
  });
};

onMounted(() => {
  CardList($route.params.id);
});

watch($route, (newRoute) => {
  resetFilters();
  CardList(newRoute.params.id);
});
</script>
<style lang="scss" scoped>
.card-article {
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 6px;
}
.card-article::after {
  content: "";
  border: 1px solid #f3f5f7;
  width: calc(100%);
  position: absolute;
  bottom: 4px;
}
.article-title {
  min-width: 80px;
  text-align: center;
  font-weight: 900;
}
.tab-list {
  width: calc(100% - 80px);
}
.footer {
  max-width: 68;
}
.info-title {
  font-weight: 900;
  color: #121212;
}
.info-wrap {
  color: #767676;
  padding-bottom: 30px;
  p {
    padding: 8px 0;
  }
}

.card-section {
  // border: 1px solid;
  display: flex;
  cursor: pointer;
  // gap: 20px;
  .card-img-box {
    // border: 1px solid;
    padding: 30px;
  }
  .card-img-wrap {
    width: 110px;
    height: 110px;
    position: relative;
    img {
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
  .card-text {
    padding: 30px 0;
  }
}

.card-company-logo {
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}

.search-filter-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search-filter-item-wrap {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  // padding-top: 10px;
}
.search-filter-item {
  display: flex;
  gap: 8px;
  justify-content: space-between;
  color: #ffffff;
  background-color: var(--main-color);
  border-radius: 4px;
  padding: 4px 10px;
  text-align: center;
  cursor: pointer;
}
.search-filter-icon {
  border: 1px solid #e5e8ed;
  color: #767676;
  padding: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.card-name {
  font-weight: 900;
  font-size: 18px;
}
.card-fee-benefit {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.card-description {
  color: vaR(--main-color);
  font-weight: 900;
  font-size: 16px;
}
.card-annualfee {
  display: flex;
  gap: 4px;
  background-color: rgba(100, 109, 122, 0.1);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}
.card-benefits {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.benefits-item {
  font-size: 15px;
}
.benefits-item {
  padding: 0 4px;
}
.addData {
  background-color: #ffffff;
  padding: 24px;
  margin: 10px auto;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: none;
  display: block;
  width: 100%;
}

.sort-button {
  display: flex;
  justify-content: flex-end;
  .asc,
  .desc {
    background-color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 4px 10px;
    cursor: pointer;
  }
}

.sort-select {
  border: 1px solid;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #f6f8fa;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  margin: 8px;
}

.addData {
  cursor: pointer;
}

.filter_button {
  border: 1px solid;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #f6f8fa;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  margin: 8px;
  background-color: #ffffff;
}
.page-event {
  font-weight: 800;
  font-size: 19px;
  line-height: 32px;
}
.discount-amount {
  font-size: 18px;
  font-weight: 800;
  color: #efae1a;
}
</style>
