<template>
  <main class="w-100 bg-gray">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center carte-background mb-1">
          <section id="carte" class="mb-1">
            <img class="headshot" src="./assets/holoface.jpg" alt="">
            <h2 class="fw-bolder">{{ resumeChineseName }}</h2>
            <h3 class="fw-bolder text-color-main">{{ resumeEnglishName }}</h3>
          </section>
        </div>
        <div class="col-lg-8 col-md-7 col-12 bg-white">
          <sectionComponent id="personal-statement" :title="'個人介紹'">
            <template v-slot>
              <p class="mb-2" v-for="item in introduction" :key="item">
                {{ item }}
              </p>
            </template>
          </sectionComponent>
          <sectionComponent id="career-summary" :title="'經歷'">
            <template v-slot>
              <template v-for="carrer in careerSummary" :key="carrer.company">
                <h5 class="fst-italic mb-1">
                  {{ carrer.company }} - {{ carrer.jobTitle }}
                  <span class="fst-normal">{{ carrer.timeDuration.start }} ~ {{ carrer.timeDuration.end }}</span>
                </h5>
                <p class="mb-1">
                  {{ carrer.responsibility }}
                </p>
                <ul>
                  <li v-for="item in carrer.describtion" :key="item.content">
                    {{ item.content }}
                  </li>
                </ul>
              </template>
            </template>
          </sectionComponent>
        </div>
        <div class="col-lg-4 col-md-5 col-12 bg-white">
          <sectionComponent id="personal-information" :title="'個人資料'">
            <template v-slot>
                <p class="mb-1" v-for="item in personalInformation" :key="item.content">
                    <a href="tel:0931242176" v-if="item.url">
                        <span>
                            <FontAwesomeIcon :icon="item.icon" />
                        </span>
                        {{ item.content }}
                    </a>
                    <template v-else>
                        <span>
                            <FontAwesomeIcon :icon="item.icon" />
                        </span>
                        {{ item.content }}
                    </template>
                </p>
            </template>
          </sectionComponent>
          <sectionComponent id="core-skills" :title="'技術力'">
            <template v-slot>
              <template v-for="skill in skills" :key="skill.title">
                <h5 class="fst-italic">{{ skill.title }}</h5>
                <div class="row">
                  <div class="col-12">
                    <ul class="d-flex" style="flex-wrap: wrap;">
                      <li style="flex: 1 1 50%" v-for="item in skill.item" :key="item">{{ item }}</li>
                    </ul>
                  </div>
                </div>
              </template>
            </template>
          </sectionComponent>
          <sectionComponent id="education" :title="'學歷'">
            <template v-slot>
              <p class="mb-2" v-for="item in education" :key="item.class">
                {{ item.school }} {{ item.class }}
                <!-- <br class="d-none d-md-block d-lg-none"> -->
                <span>{{ item.timeDuration.start }} ~ {{ item.timeDuration.end }}</span>
              </p>
            </template>
          </sectionComponent>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types/index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPhone, faLocationDot, faEnvelope, faCakeCandles } from '@fortawesome/free-solid-svg-icons';

import sectionComponent from './components/SectionComponent.vue';

interface CareerSummary {
  company: string;
  jobTitle: string;
  responsibility: string;
  timeDuration: {
    start: string;
    end: string;
  },
  describtion: Describtion[]
}

interface Describtion {
  title?: string;
  content: string;
}

interface PersonalInformation {
    url: string;
    icon: IconDefinition;
    content: string;
}

interface Skill {
  title: string,
  item: string[],
}

interface Education {
  school: string,
  class: string,
  timeDuration: {
    start: string,
    end: string
  },
}

const resumeChineseName: Ref<string> = ref('蔡富鈞');
const resumeEnglishName: Ref<string> = ref('Nick Tsai');

const introduction: Ref<string[]> = ref([
  '在大四時因為專題而接觸程式，於是開始對程式開發產生興趣，畢業後選擇先至資策會的前端開發專班，學習相關的技能，之後也順利成為了一位前端開發工程師。',
  '我是一個有目標，也是會不斷精進能力、尋根究底的人，面對問題時，會先釐清後再劃分小任務，逐步解決，從這樣的過程中獲得的成就感，正是我努力不懈的動力來源。',
  '我有隨身攜帶紙筆的習慣，且會把任何前輩交辦的事項及未完成項目記錄下來，避免讓我因為遺漏一點小事情，而對團隊造成負擔或是無法挽回的後果。',
  '我目前雖然較擅長前端開發的相關技術，但是對於未來的目標，除了要累積更多的前端開發經驗，更是期盼自己能成為一個全端工程師，跨足後端以及資料庫等領域。雖然疫情嚴峻，這段期間也讓面試及應徵工作的時程延宕了很多時間，不過我能調適心情及讓自己保持在蓄勢待發的狀態，若順利任職，我相信自己能立即帶給公司互利多贏的效益。',
]);

const careerSummary: Ref<CareerSummary[]> = ref([
  {
    company: '英特內軟體股份有限公司',
    jobTitle: '前端工程師',
    responsibility: '負責公司舊案維護與新案研發，與UI/UX設計師、後端工程師、專案經理協力完成專案。',
    timeDuration: {
      start: '2022.6',
      end: '2024.7'
    },
    describtion: [
      {
        title: '客製化表單系統 - 前端',
        content: '使用Vue3完成欄位檢核的設定介面，提供不同的檢核選項，與後端工程師協作檢核功能，讓使用者在設計表單時，可以對填寫的欄位做限制，以提升表單回饋的資料品質。',
      },
      {
        title: '人力資源圖表系統 - 前端',
        content: '使用Vue3開發圖表顯示與篩選介面，解決客戶分析人力資源數據時的瓶頸，根據UI/UX設計師的規劃完成網站，與端工程師協作資料篩選功能，將數據透過圖表呈現，作為決策的參考依據。',
      }
    ],
  },
  {
    company: '赫姆斯策略行銷公司',
    jobTitle: '前端工程師',
    responsibility: '根據客戶所提供的資訊，將內容分成關於我們、服務項目、作品集、如何聯繫等數個不同的主題，經過排版與配色後，完成形象網頁，目的以建立客戶在網路上的品牌形象，並且持續與客戶聯繫，更新客戶的形象網頁。',
    timeDuration: {
      start: '2021.2',
      end: '2021.10'
    },
    describtion: [
      {
        title: '',
        content: '使用SCSS，目的是可以讓專案各頁功能所需要的樣式模組化，有效的管理CSS，可以減少後續維護時間，增加更彈性的撰寫空間。',
      },
      {
        title: '',
        content: '充分應用Bootstrap的網格系統，而為了確保開發的功能正常運作且版面如預期顯示，需要在不同的瀏覽器與版本之間進行實測，最後與使用者進行覆確過後，才交付程式碼。',
      }
    ],
  },
  {
    company: '資策會 前端工程師養成班',
    jobTitle: '學員',
    responsibility: '跟著課程進度學習網站開發，運用所學，獨立完成個人專題以及與成員協作團隊專題。',
    timeDuration: {
      start: '2020.6',
      end: '2020.11'
    },
    describtion: [
      {
        title: '',
        content: '個人專題：以一間主打表演的餐酒館為背景，需要一個與店家風格一致的形象網頁，使用基本前端開發技術，有首頁、餐點列表、表演行事曆以及關於我們等頁面，打造客戶在網路上的品牌形象，同時提升在網路上的曝光。',
      },
      {
        title: '',
        content: '團體專題（五人）：為不敢獨自上餐館享受美食的人為出發點，設計一個線上約飯局的平台，整合前端、後端與資料庫等相關技術，在平台中所提供的餐廳，媒合有興趣的用戶；餐廳業者也可以提供資訊於平台上，多一個曝光管道，目的不只是服務用戶，同時與餐廳業者合作，達成三贏的經營模式。',
      }
    ],
  },
]);

const personalInformation: Ref<PersonalInformation[]> = ref([
  {
    url: 'tel:0931242176',
    icon: faPhone,
    content: '0931242176'
  },
  {
    url: '',
    icon: faLocationDot,
    content: '桃園市桃園區成功路二段101號之一'
  },
  {
    url: 'mailto:gdfvsgfd8769@gmail.com',
    icon: faEnvelope,
    content: 'gdfvsgfd8769@gmail.com'
  },
  {
    url: '',
    icon: faCakeCandles,
    content: '1996/10/19'
  },
]);

const skills: Ref<Skill[]> = ref([
  {
    title: '前端',
    item: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Bootstrap'],
  },
  {
    title: '後端',
    item: ['ASP.NET Core 8'],
  },
  {
    title: '資料庫',
    item: ['MSSQL'],
  },
  {
    title: '其他',
    item: ['Git'],
  },
])

const education: Ref<Education[]> = ref([
  {
    school: '中壢資策會',
    class: '前端工程師養成班（第61期）',
    timeDuration: {
      start: '2020.6',
      end: '2020.11'
    },
  },
  {
    school: '虎尾科技大學',
    class: '財務金融系',
    timeDuration: {
      start: '2015.9',
      end: '2019.6'
    },
  }
]);

</script>

<style lang="scss">
#app{
  main{
    background: #eee;
  }
  *{
      box-sizing: border-box;
  }
  $color-back: #eee;
  $color-main: #218646;

  body{
      background: $color-back;
  }
  main{
    padding-top: 20px;
  }
  @for $i from 1 to 7 {
      h#{$i}{
          margin-bottom: 0;
      }
  }
  p, li{
      font-size: 14px;
      margin-bottom: 0;
  }
  @mixin readable{
      letter-spacing: 1px;
      text-align: justify;
  }
  hr{
      margin-top: 0;
      margin-bottom: 12px;
      height: 2px !important;
  }

  .text-color-main{
      color: $color-main;
  }
  .back-color-main{
      color: $color-main;
  }
  .carte-background{
      background: linear-gradient(0deg, #fff 70%, transparent 70%);
  }

  #carte{
      .headshot{
          $size: 120px;
          width: $size;
          height: $size;
          object-fit: cover;
          object-position: 50% 0%;
          border-radius: 50%;
          border: 3px solid $color-back;
      }
  }
  #personal-statement{
      p{
          @include readable();
      }
  }
  #career-summary{
      p,li{
          @include readable();
      }
      h5{
          position: relative;
          span{
              position: absolute;
              right: 0;
              bottom: 0;
              color: #333;
              font-size: 12px;
              letter-spacing: 0;
              @media screen and (max-width:350px) {
                  position: static;
                  display: block;
              }
          }
      }
  }
  #personal-information{
      p{
          a{
              color: #000;
              text-decoration: none;
          }
          span{
              display: inline-block;
              width: 20px;
              height: 20px;
              text-align: center;
          }
      }
  }
  #education{
      p{
          position: relative;
          line-height: 1;
          span{
              letter-spacing: 0;
              font-size: 12px;
              @mixin text-right{
                  position: absolute;
                  right: 0;
                  bottom: 0;
              }
              @mixin text-block{
                  position: static;
                  display: block;
              }
              @include text-block();
              @media screen and (min-width:400px) {
                  @include text-right();
              }
              @media screen and (min-width:768px) {
                  @include text-block();
              }
              @media screen and (min-width:1200px) {
                  @include text-right();
              }
          }
      }
  }
}
</style>
