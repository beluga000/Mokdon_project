<template>
  <q-layout class="container">
    <header class="web-header-container">
      <div class="web-header">
        <div class="logo_img" @click="goMain">
          <img src="~src/img/mokdon_sm_logo.png" alt="목돈로고" />
        </div>
        <ul class="toolbar-menu">
          <li class="menu-item deposit_title">
            <div class="menu-title">예/적금</div>
          </li>
          <li class="menu-item">
            <div class="menu-title">신용카드</div>
          </li>
          <li class="menu-item">
            <div class="menu-title">내게맞는카드추천</div>
          </li>
          <li class="menu-item">
            <div class="menu-title">목돈마련정보</div>
          </li>
        </ul>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="mobile-block"
        />

        <!-- 상단바 hover 시 상세 메뉴 -->
        <div class="menu-list-container">
          <!-- backgorund -->
          <!-- <div class="q-dialog__backdrop fixed-full header-menu-backdrop"></div> -->
          <!-- 예/적금 -->
          <div class="menu-list-box">
            <article class="menu-event">
              <p class="event-title">
                최고금리조회하고<br />
                목돈모으기 🤑
              </p>
              <div class="event-img">
                <img src="~src/img/vault.svg" alt="vault 이미지" />
              </div>
              <button class="btn event-btn" @click="goMenu('적금추천')">
                맞춤형 상품 추천
              </button>
            </article>
            <article class="menu-item-list">
              <section>
                <ul class="menu-list-wrap">
                  <div class="menu-list list-title">최고 금리 예금 찾기</div>
                  <li class="menu-list" @click="goMenu('예금')">
                    <p>✅ 예금 상품 추천</p>
                  </li>
                </ul>
                <ul class="menu-list-wrap">
                  <div class="menu-list list-title">최고 금리 적금 찾기</div>
                  <li class="menu-list" @click="goMenu('적금추천')">
                    <p>➕ 적금 상품 추천</p>
                  </li>
                  <li class="menu-list" @click="goMenu('적금')">
                    <p>➕ 적금 상품</p>
                  </li>
                </ul>
              </section>
              <section>
                <ul class="menu-list-wrap">
                  <div class="menu-list list-title">신용카드 추천</div>
                  <li class="menu-list" @click="goMenu('신용카드')">
                    <!-- <p>🥇 2024 신용카드 추천</p> -->
                    <p>전체보기</p>
                  </li>
                  <!-- <li class="menu-list">
                    <p>🥈 2023 신용카드 추천</p>
                  </li>
                  <li class="menu-list">
                    <p>🥉 2022 신용카드 추천</p>
                  </li> -->
                </ul>
                <ul class="menu-list-wrap">
                  <div class="menu-list list-title">혜택별 카드 추천</div>
                  <li class="menu-list" @click="goMenu('주유')">
                    <p>✅ 주유 최대 할인 카드</p>
                  </li>
                  <li class="menu-list" @click="goMenu('교통')">
                    <p>✅ 교통 최대 할인 카드</p>
                  </li>
                  <li class="menu-list" @click="goMenu('통신')">
                    <p>✅ 통신비 최대 할인 카드</p>
                  </li>
                </ul>
              </section>
              <section>
                <ul class="menu-list-wrap">
                  <div class="menu-list list-title">혜택별 카드 추천</div>
                  <li class="menu-list">
                    <p>✅ 주유 최대 할인 카드</p>
                  </li>
                  <li class="menu-list">
                    <p>✅ 교통 최대 할인 카드</p>
                  </li>
                  <li class="menu-list">
                    <p>✅ 통신비 최대 할인 카드</p>
                  </li>
                </ul>
                <ul class="menu-list-wrap">
                  <div class="menu-list list-title">인기 카드 추천</div>
                  <li class="menu-list">
                    <p>🥇 2024 신용카드 추천</p>
                  </li>
                  <li class="menu-list">
                    <p>🥈 2023 신용카드 추천</p>
                  </li>
                  <li class="menu-list">
                    <p>🥉 2022 신용카드 추천</p>
                  </li>
                </ul>
              </section>
              <section>
                <ul class="menu-list-wrap">
                  <div class="menu-list list-title">혜택별 카드 추천</div>
                  <li class="menu-list">
                    <p>✅ 주유 최대 할인 카드</p>
                  </li>
                  <li class="menu-list">
                    <p>✅ 교통 최대 할인 카드</p>
                  </li>
                  <li class="menu-list">
                    <p>✅ 통신비 최대 할인 카드</p>
                  </li>
                </ul>
                <ul class="menu-list-wrap">
                  <div class="menu-list list-title">인기 카드 추천</div>
                  <li class="menu-list">
                    <p>🥇 2024 신용카드 추천</p>
                  </li>
                  <li class="menu-list">
                    <p>🥈 2023 신용카드 추천</p>
                  </li>
                  <li class="menu-list">
                    <p>🥉 2022 신용카드 추천</p>
                  </li>
                </ul>
              </section>
            </article>
          </div>
        </div>
      </div>
    </header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="mobile-block"
    >
      <q-list>
        <q-item-label header> </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <footer>
      <div class="foot_title">Mokdon</div>
      <div class="foot_content">
        <div>고객센터</div>
        <div>문의사항</div>
        <div>사업문의</div>
        <div>자주 묻는 질문</div>
        <div>목돈에 대하여</div>
      </div>
      <div class="foot_info">
        <div>(주)목돈컴퍼니</div>
        <div>대표이사 : 김선우</div>
        <div>사업자 등록번호 : 800-80-08888</div>
        <div>서울특별시 강남구 자곡로 260 5층</div>
        <div>광고/제휴문의 : rlatjsdn@naver.com</div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useRouter, useRoute } from "vue-router";

defineOptions({
  name: "MainLayout",
});

const $router = useRouter();

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// ******* web toolbar menu ********** //

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
      path: `/savings/SavingsAccount_Menu/대중교통`,
    });
  } else if (menu == "통신") {
    $router.push({
      path: `/savings/SavingsAccount_Menu/통신`,
    });
  } else if (menu == "주유") {
    $router.push({
      path: `/savings/SavingsAccount_Menu/주유`,
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

const goMain = () => {
  $router.push({
    path: `/`,
  });
};
</script>
<style lang="scss" scoped>
footer {
  background-color: #343535;
  color: white;
  text-align: center;
  padding: 40px 0;
  margin-top: 20px;
}

.foot_title {
  font-size: 24px;
  font-weight: bolder;
  letter-spacing: 1px;
  font-family: "Noto Sans KR";
}

.foot_content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 55px;
  padding: 20px 0;
}

.foot_info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding: 35px 0 0 0;
}
</style>
