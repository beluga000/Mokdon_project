<template>
  <q-layout class="page-container">
    <section class="index_section">
      <div>
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          class="carousel_container"
        >
          <q-carousel-slide :name="1" class="carousel_section_1">
            <div class="carousel_box">
              <div class="carousel_text">
                <span class="carousel_strong">예/적금이자</span>를<br />미리
                확인할 수 있다면?
                <p class="carousel_sub_text">
                  목돈에서 예/적금 이자를 미리 확인해 보세요
                </p>
                <button class="carousel_btn" @click="goMenu('적금')">
                  <i class="fa-solid fa-money-bill-trend-up"></i>예/적금이자
                  확인
                </button>
              </div>
              <div class="carousel_img_box">
                <img src="~src/img/carousel_img_1.png" alt="카드일러스트1" />
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="carousel_section_2">
            <div class="carousel_box">
              <div class="carousel_text">
                <span class="carousel_strong"
                  >금융을 내 편으로<br />목돈 마련 완료
                </span>
                <p class="carousel_sub_text">
                  목돈에서 예/적금 이자를 미리 확인해 보세요
                </p>
                <button class="carousel_more_btn default-btn">
                  서비스 더 알아보기
                </button>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="carousel_section_3">
            <div class="carousel_box">
              <div class="carousel_text">
                슬기로운 소비 생활을 위한<br /><span class="carousel_strong"
                  >목돈 금융매칭</span
                >
                <p class="carousel_sub_text">
                  내게 딱! 맞는 카드를 찾아 보세요
                </p>
                <button class="carousel_btn_radius default-btn">
                  내게 맞는 카드 조회
                </button>
              </div>
              <div class="carousel_img_box">
                <img src="~src/img/carousel_img_2.png" alt="카드일러스트2" />
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="carousel_section_4">
            <div class="carousel_box">
              <div class="carousel_text">
                맞춤형 적금 추천!<br /><span class="carousel_strong"
                  >오직 목돈에서</span
                >
                <p class="carousel_sub_text">
                  1분만에, 은행 방문 없이, 신용점수 영향 없이
                </p>
                <button
                  class="carousel_check_btn default-btn"
                  @click="goMenu('적금추천')"
                >
                  내게 맞는 적금 조회하기
                </button>
              </div>
              <div class="carousel_img_box">
                <img
                  src="~src/img/carousel_img_3.svg"
                  alt="컴퓨터하고있는일러스트"
                />
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </section>
    <!-- <section class="index_section">
      <div class="index_text_box">
        <q-intersection
            v-for="index in 1"
            :key="index"
            transition="scale"
          >
          <p class="index-text">
            내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.<br>
            이제껏 경험 못 했던 쉽고 편리한 금융 서비스,<br>
            목돈과 함께라면 당신의 일상이 새로워질 거예요.
            </p>
          </q-intersection>
      </div>

    </section> -->
    <section class="index_section">
      <div class="index_content_box">
        <p class="content_sub">내게 맞는 금융상품, 비교하기 힘드시죠?</p>
        <p class="content_main">목돈은 쉽고 정확하게 비교합니다.</p>
      </div>
      <ul class="index_img_wrap">
        <li>
          <div class="index_img_box">
            <img src="~src/img/index_icon_1.svg" />
          </div>
          <p>
            국내 최대 금융상품 데이터<br />
            금융 상품 데이터뿐만 아니라, 전월 실적,<br />한도 조건 등 복잡하고
            어려운 금융상품의<br />각종 조건 데이터까지 모두 챙겼습니다.
          </p>
        </li>
        <li>
          <div class="index_img_box">
            <img src="~src/img/index_icon_2.svg" />
          </div>
          <p>
            나만을 위한 금융매칭<br />수백만가지 경우의 수를 계산하는 추천<br />알고리즘이
            나를 위한 맞춤 상품을<br />찾아드립니다.
          </p>
        </li>
        <li>
          <div class="index_img_box">
            <img src="~src/img/index_icon_3.svg" />
          </div>
          <p>
            광고나 홍보 없음 뱅크샐러드의 추천에는 광고도, 홍보도 없습니다. 오직
            객관적인 데이터만을 활용합니다.
          </p>
        </li>
      </ul>
    </section>
  </q-layout>
</template>

<script setup>
import { api } from "boot/axios";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
defineOptions({
  name: "IndexPage",
});

const $router = useRouter();

// onBeforeMount(() => {
//   getDetail();
// });

// const trans_vue = () => {
//   $router.push({
//     path: `/login`,
//   });
// }

// const getDetail = async () => {

//   const url = `${process.env.API}/v1/member/test`;
//   await api
//     .get(url)
//     .then((res) => {
//       console.log("res", res);

//     })
//     .catch((err) => {
//       console.log("err", err);
//     });
// };

/*********************************
            carousel
 ********************************/

const slide = ref(1);
const autoplay = ref(true);

const goMenu = (menu) => {
  if (menu == "신용카드") {
    $router.push({
      path: `/savings/SavingsAccount`,
    });
  } else if (menu == "적금") {
    $router.push({
      path: `/deposit/DepositList`,
    });
  } else if (menu == "교통") {
    $router.push({
      path: `/savings/SavingsAccount/대중교통`,
    });
  } else if (menu == "통신") {
    $router.push({
      path: `/savings/SavingsAccount/통신`,
    });
  } else if (menu == "주유") {
    $router.push({
      path: `/savings/SavingsAccount/주유`,
    });
  } else if (menu == "예금") {
    $router.push({
      path: `/instalment/InstalmentList`,
    });
  } else if (menu == "적금추천") {
    $router.push({
      path: `/deposit/DepositRecommand`,
    });
  }
};

/* *************************** */
</script>
