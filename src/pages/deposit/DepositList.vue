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
        <div class="page-event">
          적금 상품
        </div>
      </section>
      <section class="page-section">
        <article class="card-article">
    <div class="article-title">은행</div>
    <q-tabs v-model="cardCompanyCode" inline-label class="bg-white tab-list">
      <q-tab class="tab-item" @click='selectBank("KB국민은행")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_KB_Profile.png" alt="국민은행">
        </div>
        <div class="card-company-name">
      <span>KB국민</span>
    </div>
  </label>
      </q-tab>
      <q-tab class="tab-item" @click='selectBank("신한은행")' >
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_SHINHAN_Profile.png" alt="신한은행">
        </div>
        <div class="card-company-name">
      <span>신한</span>
    </div>
  </label>
      </q-tab>
      <q-tab class="tab-item" @click='selectBank("하나은행")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_SHINHAN_Profile.png" alt="하나은행">
        </div>
        <div class="card-company-name">
      <span>하나</span>
    </div>
  </label>
      </q-tab>
      <q-tab class="tab-item" @click='selectBank("우리은행")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_WOORI_Profile.png" alt="우리은행">
        </div>
        <div class="card-company-name">
      <span>우리</span>
    </div>
  </label>
      </q-tab>
      <q-tab class="tab-item" @click='selectBank("IBK기업은행")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_IBK_Profile.png" alt="기업은행">
        </div>
        <div class="card-company-name">
      <span>IBK기업</span>
    </div>
  </label>
      </q-tab>
      <q-tab class="tab-item" @click='selectBank("KDB산업은행")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_KDB_Profile.png" alt="산업은행">
        </div>
        <div class="card-company-name">
      <span>KDB산업</span>
    </div>
  </label>
      </q-tab>
      <!-- <q-tab class="tab-item" @click='selectBank("신협")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_CU_Profile.png" alt="신협">
        </div>
        <div class="card-company-name">
      <span>신협</span>
    </div>
  </label>
      </q-tab> -->
      <q-tab class="tab-item"  @click='selectBank("SC제일은행")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_SC_Profile.png" alt="제일은행">
        </div>
        <div class="card-company-name">
      <span>SC제일</span>
    </div>
  </label>
      </q-tab>
      <!-- <q-tab class="tab-item"  @click='selectBank("신협")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_EPOST_Profile.png" alt="우체국은행">
        </div>
        <div class="card-company-name">
      <span>우정사업본부</span>
    </div>
  </label>
      </q-tab> -->
      <q-tab class="tab-item"  @click='selectBank("부산은행")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_BUSAN_Profile.png" alt="부산은행">
        </div>
        <div class="card-company-name">
      <span>부산</span>
    </div>
  </label>
      </q-tab>
      <q-tab class="tab-item"  @click='selectBank("SH수협은행")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_SH_Profile.png" alt="수협은행">
        </div>
        <div class="card-company-name">
      <span>SH수협</span>
    </div>
  </label>
      </q-tab>
      <q-tab class="tab-item"  @click='selectBank("경남은행")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_KYOUNGNAM_Profile.png" alt="경남은행">
        </div>
        <div class="card-company-name">
      <span>경남</span>
    </div>
  </label>
      </q-tab>
      <q-tab class="tab-item"  @click='selectBank("카카오뱅크")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_KAKAO_Profile.png" alt="카카오뱅크">
        </div>
        <div class="card-company-name">
      <span>카카오뱅크</span>
    </div>
  </label>
      </q-tab>
      <q-tab class="tab-item"  @click='selectBank("광주은행")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_KWANGJU_Profile.png" alt="광주은행">
        </div>
        <div class="card-company-name">
      <span>광주</span>
    </div>
  </label>
      </q-tab>
      <q-tab class="tab-item"  @click='selectBank("토스뱅크")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_TOSS_Profile.png" alt="토스뱅크">
        </div>
        <div class="card-company-name">
      <span>토스뱅크</span>
    </div>
  </label>
      </q-tab>
      <q-tab class="tab-item"  @click='selectBank("전북은행")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_JEONBUK_Profile.png" alt="전북은행">
        </div>
        <div class="card-company-name">
      <span>전북</span>
    </div>
  </label>
      </q-tab>
      <q-tab class="tab-item"  @click='selectBank("케이뱅크")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_K_Profile.png" alt="케이뱅크">
        </div>
        <div class="card-company-name">
      <span>케이뱅크</span>
    </div>
  </label>
      </q-tab>
      <q-tab class="tab-item"  @click='selectBank("제주은행")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/BK_JEJU_Profile.png" alt="제주은행">
        </div>
        <div class="card-company-name">
      <span>제주</span>
    </div>
  </label>
      </q-tab>
      <!-- <q-tab class="tab-item"  @click='selectBank("신협")'>
        <label>
        <div class="card-company-logo">
          <img src="https://financial.pstatic.net/pie/common-bi/1.4.0/images/SB_WOORIFIN_Profile.png" alt="우리종합금융">
        </div>
        <div class="card-company-name">
      <span>우리종합금융</span>
    </div>
  </label>
      </q-tab> -->
    </q-tabs>
  </article>
          <article class="card-article">
            <div class="article-title">기간</div>
            <div class="bar_wrapper">
        <div class="bar_itself">
            <div class="bar_cir">
            </div>
            <div class="bar_1" @click="select_period('6개월')">
            </div>
            <div class="bar_2" @click="select_period('12개월')">
            </div>
            <div class="bar_3" @click="select_period('24개월 이상')">
            </div>
        </div>
        <div class="txt_area">
            <div id="whole" @click="select_period('전체')">전체</div>
            <div id="month_6" @click="select_period('6개월')">6개월</div>
            <div id="month_12" @click="select_period('12개월')">12개월</div>
            <div id="month_24" @click="select_period('24개월 이상')">24개월 이상</div>
        </div>
    </div>
          </article>
          <article class="card-article">
            <div class="article-title">상품유형</div>
            <q-tabs
      inline-label
      class="bg-white tab-list"
    >
      <q-tab name="특판" label="특판" @click="handleBenefitClick('specialOffer')" />
      <q-tab name="방문없이가입" label="방문없이가입" @click="handleBenefitClick('online')" />
      <q-tab name="청년적금" label="청년적금" @click="handleBenefitClick('savingForYouth')" />
      <q-tab name="군인적금" label="군인적금" @click="handleBenefitClick('savingForSoldier')" />
      <q-tab name="주택청약" label="주택청약" @click="handleBenefitClick('housingSubscription')" />
      <q-tab name="자유적금" label="자유적금" @click="handleBenefitClick('savingFree')"/>
      <q-tab name="정기적금" label="정기적금" @click="handleBenefitClick('savingFixed')" />
      <q-tab name="청년도약계좌" label="청년도약계좌" @click="handleBenefitClick('savingForJumpingYouth')" />


    </q-tabs>
          </article>
      </section>
          <section class="page-section">
      <div class="search-filter-wrap">
        <!-- <p>선택 검색 조건</p> -->
        <ul class="search-filter-item-wrap">
          <li class="search-filter-item" v-if="bankCompanyName">
            <p>{{ bankCompanyName }}</p>
            <span @click="removeFilter('bankCompanyName')">
              <i class="fa-solid fa-xmark"></i>
            </span>
          </li>
          <li class="search-filter-item" v-for="(benefit, index) in deposit_options" :key="index">
            <p>{{ benefit }}</p>
            <span @click="removeFilter('deposit_options', index)">
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
        <div class="filter_button">
          {{ totalData }}개
        </div>

        <select class="sort-select" @change="changeSortOrder">
          <option value="max">최고금리순</option>
          <option value="basic">기본금리순</option>
        </select>
      </section>

      <section class="page-section" v-for="(li, idx) in product.Deposits" :key="idx" @click="goDepositDetail(li.code)">
        <div >
          <div class="card-section">
            <div class="card-img-box">
              <div class="card-img-wrap">
                <img :src="li.companylogourl" class="card-img" alt="카드 이미지">
              </div>
            </div>
            <div class="card-text">
              <ul class="card-list">
                <li class="card-name">{{ li.name}}</li>
                <li>
                  <div class="card-description">{{ li.titleDescription }}</div>
                </li>
                <li class="card-fee-benefit">
                  <div>
                    {{ li.companyName }}
                  </div>

                  <!-- <div class="card-description">{{ li.titleDescription }}</div> -->
                </li>
                <li>
                  <div class="card-annualfee">
                    <div class="bank-options" v-for="(item, idx) in li.productCategories" :key="idx" >
                <span class="category-item">{{ item }}</span>
              </div>
                  </div>
                </li>
                <li class="card-benefits">
                  <div v-for="(benefit, idx) in li.benefits" :key="idx">
                    <span class="benefits-item" v-if="idx < 2">
                      <span>💎</span>
                      {{ benefit.rootBenefitCategoryIdName  }}
                      </span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="card-percent">
              <div>
                <span>최대</span><p>{{ li.primeInterestRate }} %</p>
              </div>
              <div>
                <span>기본</span><p>{{ li.interestRate }} %</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <article>
        <button class="addData" @click="loadMoreCards">
      <span>더보기 {{ product.Deposits.length }} / {{ totalData }}</span>
    </button>
      </article>
    </q-page>
    <div class="common-container info-wrap">
      <p class="info-title"><i class="fa-solid fa-circle-info"></i> 안내 사항</p>
      <p>해당 사이트는 포트폴리오용 사이트로 실제 서비스가 되지 않으며, 제공되는 정보는 올바르지 않을 수 있음을 알립니다.</p>
    </div>
  </q-layout>
</template>

<script setup>
import { defineComponent, onBeforeMount, onMounted, ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from 'quasar'
import { api } from "boot/axios";
import axios from "axios";



defineOptions({
  name: 'DepositList'
});

// 기본 세팅
const $router = useRouter();
const $q = useQuasar();


const bankCompanyName = ref("");
const productCategories = reactive([]);
const selectAmount = ref("");


// 초기 설정
onMounted(() => {
  DepositList();
});

// 검색 조건
const searchForm = ref({
  limit : "10",
  page : "1",
  bank_name: "",
  period: "",
  categories: "",
  basic_rate_sort: "",
  max_rate_sort: "desc",
});



const totalData = ref(0);
const product = ref({ Deposits: [] });

const DepositList = async () => {
  const url = `${process.env.API}/v1/bank/deposit/list?limit=${encodeURIComponent(searchForm.value.limit)}&page=${encodeURIComponent(searchForm.value.page)}&bank_name=${encodeURIComponent(searchForm.value.bank_name)}&period=${encodeURIComponent(searchForm.value.period)}&categories=${encodeURIComponent(searchForm.value.categories)}&basic_rate_sort=${encodeURIComponent(searchForm.value.basic_rate_sort)}&max_rate_sort=${encodeURIComponent(searchForm.value.max_rate_sort)}`;
  await api
    .get(url)
    .then((res) => {

      const transformCategory = (category) => {
        const categoryMap = {
          specialOffer : "특판",
          online: "방문없이가입",
          savingFixed : "정기적금",
          savingFree: "자유적금",
          savingForYouth: "청년적금",
          savingForJumpingYouth:"청년도약계좌",
          savingForSoldier:"군인적금",
          housingSubscription:"주택청약"
        };
        return categoryMap[category] || category;
      }

      const formatInterestRate = (rate) => {
        return parseFloat(rate).toFixed(2);
      }




      const deposits = res.data.Deposits.map((deposit) => {
        return {
          ...deposit,
          primeInterestRate: formatInterestRate(deposit.primeInterestRate),
          interestRate: formatInterestRate(deposit.interestRate),
          productCategories: deposit.productCategories.map(transformCategory),
        };
      });



      if (searchForm.value.page === "1") {
      product.value.Deposits = deposits;
    } else {
      product.value.Deposits = product.value.Deposits.concat(deposits);
    }
    totalData.value = res.data.total;
    })
    .catch((err) => {
      console.log(err);
    });
}
const loadMoreCards = () => {
  searchForm.value.page = (parseInt(searchForm.value.page) + 1).toString();
  DepositList();
};



const select_period = (month) => {
  if (month === "6개월") {
    console.log("6개월");
    document.querySelector('.bar_cir').style.transform = 'translate(185px, 0)';
  } else if (month === "12개월") {
    console.log("12개월");
    document.querySelector('.bar_cir').style.transform = 'translate(360px, 0)';
  } else if (month === "24개월 이상") {
    console.log("24개월 이상");
    document.querySelector('.bar_cir').style.transform = 'translate(537px, 0)';
  } else {
    console.log("전체");
    document.querySelector('.bar_cir').style.transform = 'translate(0, 0)';
  }

  // 모든 막대 색상을 초기화합니다.
  document.querySelector('.bar_1').style.backgroundColor = '#e8ebef';
  document.querySelector('.bar_2').style.backgroundColor = '#e8ebef';
  document.querySelector('.bar_3').style.backgroundColor = '#e8ebef';

  // 클릭된 막대의 색상을 변경합니다.
  if (month === "6개월") {
    document.querySelector('.bar_1').style.backgroundColor = '#054cc9';
    changeSearchForm('period', '6');
  } else if (month === "12개월") {
    document.querySelector('.bar_1').style.backgroundColor = '#054cc9';
    document.querySelector('.bar_2').style.backgroundColor = '#054cc9';
    changeSearchForm('period', '12');
  } else if (month === "24개월 이상") {
    document.querySelector('.bar_1').style.backgroundColor = '#054cc9';
    document.querySelector('.bar_2').style.backgroundColor = '#054cc9';
    document.querySelector('.bar_3').style.backgroundColor = '#054cc9';
    changeSearchForm('period', '전체');
  } else {
    document.querySelector('.bar_1').style.backgroundColor = '#e8ebef';
    changeSearchForm('period', '전체');
  }
};

const sortOrder = ref('asc');


const changeSortOrder = (event) => {
  sortOrder.value = event.target.value;
  updateSortParams();
  DepositList();
};


const updateSortParams = () => {
  if (sortOrder.value === "basic") {
    searchForm.value.basic_rate_sort = "desc";
    searchForm.value.max_rate_sort = "";
  } else if (sortOrder.value === "max") {
    searchForm.value.basic_rate_sort = "";
    searchForm.value.max_rate_sort = "desc";
  }
};

const selectBank = (name) => {
  product.value.Deposits = [];
  bankCompanyName.value = name;
  changeSearchForm('bank_name', name);
};


const deposit_options = reactive([]);

const handleBenefitClick = (categories) => {
  product.value.Deposits = [];
  if (categories === "online") {
    categories = "방문없이가입";
  } else if (categories === "specialOffer") {
    categories = "특판";
  } else if (categories === "savingFixed") {
    categories = "정기적금";
  } else if (categories === "savingFree") {
    categories = "자유적금";
  } else if (categories === "savingForYouth") {
    categories = "청년적금";
  } else if (categories === "savingForJumpingYouth") {
    categories = "청년도약계좌";
  } else if (categories === "savingForSoldier") {
    categories = "군인적금";
  } else if (categories === "housingSubscription") {
    categories = "주택청약";
  }
  toggleBenefit(categories);
  changeSearchForm("categories", deposit_options.join(","));
};


const toggleBenefit = (category) => {
  const index = deposit_options.indexOf(category);
  if (index === -1) {
    deposit_options.push(category);
  } else {
    deposit_options.splice(index, 1);
  }
};

const changeSearchForm = (key, value) => {
  searchForm.value[key] = value;
  DepositList();
}



const goDepositDetail = (detailId) => {
  console.log('detailId', detailId)
  $router.push({
    path: `/deposit/DepositDetail/${detailId}`,
  });
}

const resetFilters = () => {

  product.value.Deposits = [];
  bankCompanyName.value = "";
  deposit_options.splice(0, deposit_options.length);
  searchForm.value.bank_name = "";
  searchForm.value.categories = "";
  searchForm.value.period = "";
  searchForm.value.basic_rate_sort = "";
  searchForm.value.max_rate_sort = "desc";
  DepositList();
};




</script>

<style lang="scss" scoped>

.card-article {
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 6px;
}
.card-article::after {
  content: '';
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
  align-items: flex-start;
  padding: 30px;

  gap: 20px;
  cursor: pointer;
  // gap: 20px;
  .card-img-box {
    // border: 1px solid;
    padding: 30px;
  }
  .card-img-wrap {
    width: 70%;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      z-index: 1;
    }
  }
  .card-text {
    padding: 30px 0;
  }
}

// .card-company-logo {
//     width: 30px;
//     height: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     img {
//       width: 100%;
//     }
//   }


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
  border-radius:4px;
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
  // background-color: rgba(100,109,122,0.1);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}
.category-item{
  display : flex;
  gap: 4px;
  background-color: rgba(100,109,122,0.1);
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
.addData{
  background-color: #ffffff;
  padding: 24px;
  margin: 10px auto;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: none;
  display: block;
  width: 100%;
}

.card-percent {
  width: 25%;
}

.card-percent div {
    display: flex;
    gap: 3px;
    color: #afafaf;
    font-weight: bold;

}

.card-percent div:nth-child(1) {
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    color: #054cc9;
}

.card-percent div:nth-child(1) p {
    font-size: 25px;
    font-weight: bold;
}

.sort-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.card-company-name {
  margin-top: 5px;
  text-align: center;
}
.card-company-logo {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}

.tab-item {
  border: 1px solid #dcdee0;
  border-radius: 8px;
  margin-left: 10px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-percent {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.bar_1 {
    background-color: #e8ebef;
    width: 200px;
    height: 15px;
    border-radius: 20px 0px 0px 20px;
}

.bar_2 {
    background-color: #e8ebef;
    width: 200px;
    height: 15px;
}

.bar_3 {
    background-color: #e8ebef;
    width: 200px;
    height: 15px;
    border-radius: 0px 20px 20px 0px;
}

.bar_itself {
    display: flex;
    gap: 1.7px;
    align-items: center;
    position: relative;
    width: 100%
}

.txt_area {
    display: flex;
    margin-top: 15px;
    font-size: 15px;
    color: gray;
}

.bar_cir {
    width: 24px;
    height: 22px;
    background-color: white;
    border: 5px solid #054cc9;
    border-radius: 50px;
}

#whole {
    color: #054cc9;
    font-weight: bold;
    position: absolute;
    transform: translate(109px, 44px);
    top: 0;
    left: 0;
    cursor: pointer;

}

.card-percent div p:nth-child(1) {
    font-size: 18px;
    color: #3fae06;
}

div#month_6 {
    position: absolute;
    transform: translate(263px, 44px);
    top: 0;
    left: 0;
    cursor: pointer;
}
div#month_12 {
    position: absolute;
    transform: translate(436px, 44px);
    top: 0;
    left: 0;
    cursor: pointer;
}

div#month_24 {
    position: absolute;
    transform: translate(558px, 44px);
    top: 0;
    left: 0;
    cursor: pointer;
}

.bar_wrapper{
  width: 87%;
  height: 62px;
  margin-top: 16px;
}

.bar_1, .bar_2, .bar_3 {
  transition: background-color 0.3s ease;
  cursor: pointer;
}
.bank-options{
  widows: 100%;
}

</style>
