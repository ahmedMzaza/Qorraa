<script>
// import Swiper core and required modules
import { Navigation, A11y } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  data() {
    return {
      cardsReading: [
        {
          img: require("../assets/Rectangle-2.png"),
          date: "5 دقائق قراءة2  فبراير",
          author: " أحمد السيد",
          titleCard: "فوائد القراءة اليومية",
          textTitleCard:
            "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.",
          textCard: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.",
        },
        {
          img: require("../assets/Rectangle-3.png"),
          date: "5 دقائق قراءة2  فبراير",
          author: " أحمد السيد",
          titleCard: "تعزيز التفكير النقدي من خلال القراءة",
          textTitleCard:
            "تبقى القراءة رحلة سحرية ومثيرة في اكتشاف العالم العربي والثقافات الأخرى. إنها أداة قوية لتوسيع آفاقنا",
          textCard:
            "تبقى القراءة رحلة سحرية ومثيرة في اكتشاف العالم العربي والثقافات الأخرى. إنها أداة قوية لتوسيع آفاقنا",
        },
        {
          img: require("../assets/Rectangle-4.png"),
          date: "5 دقائق قراءة2  فبراير",
          author: " أحمد السيد",
          titleCard: "رحلة ممتعة لاكتشاف التراث",
          textTitleCard:
            "تبقى القراءة رحلة سحرية ومثيرة في اكتشاف العالم العربي والثقافات الأخرى. إنها أداة قوية لتوسيع آفاقنا",
          textCard:
            "تبقى القراءة رحلة سحرية ومثيرة في اكتشاف العالم العربي والثقافات الأخرى. إنها أداة قوية لتوسيع آفاقنا",
        },
        {
          img: require("../assets/Rectangle-12.png"),
          date: "5 دقائق قراءة2  فبراير",
          author: " أحمد السيد",
          titleCard: "فوائد القراءة اليومية",
          textTitleCard:
            "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.",
          textCard: "القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية.",
        },
        {
          img: require("../assets/Rectangle-13.png"),
          date: "5 دقائق قراءة2  فبراير",
          author: " أحمد السيد",
          titleCard: "فوائد القراءة اليومية",
          textTitleCard:
            "تبقى القراءة رحلة سحرية ومثيرة في اكتشاف العالم العربي والثقافات الأخرى. إنها أداة قوية لتوسيع آفاقنا",
          textCard:
            "تبقى القراءة رحلة سحرية ومثيرة في اكتشاف العالم العربي والثقافات الأخرى. إنها أداة قوية لتوسيع آفاقنا",
        },
        {
          img: require("../assets/Rectangle-14.png"),
          date: "5 دقائق قراءة2  فبراير",
          author: " أحمد السيد",
          titleCard: "فوائد القراءة اليومية",
          textTitleCard:
            "تبقى القراءة رحلة سحرية ومثيرة في اكتشاف العالم العربي والثقافات الأخرى. إنها أداة قوية لتوسيع آفاقنا",
          textCard:
            "تبقى القراءة رحلة سحرية ومثيرة في اكتشاف العالم العربي والثقافات الأخرى. إنها أداة قوية لتوسيع آفاقنا",
        },
        {
          img: require("../assets/Rectangle-15.png"),
          date: "5 دقائق قراءة2  فبراير",
          author: " أحمد السيد",
          titleCard: "فوائد القراءة اليومية",
          textTitleCard:
            "تبقى القراءة رحلة سحرية ومثيرة في اكتشاف العالم العربي والثقافات الأخرى. إنها أداة قوية لتوسيع آفاقنا",
          textCard:
            "تبقى القراءة رحلة سحرية ومثيرة في اكتشاف العالم العربي والثقافات الأخرى. إنها أداة قوية لتوسيع آفاقنا",
        },
      ],
      sections: [
        {
          title: "شعر",
          img: require("../assets/Rectangle-8.png"),
        },
        {
          title: "أدب",
          img: require("../assets/Rectangle-9.png"),
        },
        {
          title: "تاريخ",
          img: require("../assets/Rectangle-10.png"),
        },
        {
          title: "فنون",
          img: require("../assets/Rectangle-7.png"),
        },
        {
          title: "فلسفة",
          img: require("../assets/Rectangle-6.png"),
        },
        {
          title: "النحو",
          img: require("../assets/Rectangle-14.png"),
        },
        {
          title: "فقه",
          img: require("../assets/Rectangle-13.png"),
        },
        {
          title: "العلوم",
          img: require("../assets/Rectangle-14.png"),
        },
        {
          title: "العدل",
          img: require("../assets/Rectangle-15.png"),
        },
        {
          title: "البيان",
          img: require("../assets/Rectangle-7.png"),
        },
        {
          title: "القوافي",
          img: require("../assets/Rectangle-6.png"),
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const onSwiper = swiper => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [A11y, Navigation],
      // Default parameters
      slidesPerView: 5,
      spaceBetween: 20,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        120: {
          slidesPerView: 3,
          spaceBetween: 10,
        },

        900: {
          slidesPerView: 4,
          spaceBetween: 20,
          speed: 400,
        },
      },
    };
  },
};
</script>
<template>
  <div class="home">
    <div class="container">
      <a href="" class="se">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <p>بحث</p>
      </a>
    </div>
    <div class="container">
      <div class="cards row">
        <div class="col-md-4 col-12 col4">
          <div class="card Arow" v-for="(card, index) in cardsReading.slice(1, 3)" :key="index">
            <img :src="card.img" class="row" :alt="'Image ' + (index + 1)" />
            <div class="text">
              <p>{{ card["date"] }}</p>
              <p>كتب بواسطة: {{ card["author"] }}</p>
            </div>
            <h4>{{ card["titleCard"] }}</h4>
          </div>
        </div>
        <div class="card col-md-8 col-12">
          <img :src="cardsReading[0].img" alt="" />
          <div class="text">
            <p>{{ cardsReading[0]["date"] }}</p>
            <p>كتب بواسطة: {{ cardsReading[0]["author"] }}</p>
          </div>

          <h4>{{ cardsReading[0]["titleCard"] }}</h4>
        </div>
      </div>
      <!---- Start First Swiper ---->
      <div class="title">الاقسام</div>
      <swiper class="FrSwiper" :slidesPerView="5" :spaceBetween="20" :slidesPerGroup="1" :loop="true"
        :loopFillGroupWithBlank="true" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange" :navigation="{
          nextEl: '.FrSwiperNext',
          prevEl: '.FrSwiperPrev',
        }">
        <SwiperSlide class="cardB" v-for="card in sections">
          <img :src="card['img']" />
          <p>{{ card["title"] }}</p>
        </SwiperSlide>
      </swiper>
      <div class="swiper-button-prev FrSwiperPrev">
        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
      </div>
      <div class="swiper-button-next FrSwiperNext">
        <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
      </div>
    </div>
    <!---- End First Swiper ---->

    <!---- Start Latest articles ---->
    <div class="container">
      <div class="textSe">
        <div class="title">أحدث المقالات</div>
        <p>عرض الجميع</p>
      </div>
      <div class="cardSe">
        <img :src="cardsReading[0].img" />
        <div class="textCardSe">
          <p>كتب بواسطة : {{ cardsReading[0]["author"] }}</p>
          <h4>{{ cardsReading[0]["titleCard"] }}</h4>
          <p class="p pe">{{ cardsReading[0]["textTitleCard"] }}</p>
          <p class="p Pe">{{ cardsReading[0]["textCard"] }}</p>
          <p class="more">أقرأ المزيد</p>
          <p>{{ cardsReading[0]["date"] }}</p>
        </div>
      </div>
      <div class="cardSe">
        <img :src="cardsReading[3].img" />
        <div class="textCardSe">
          <p>كتب بواسطة : {{ cardsReading[0]["author"] }}</p>
          <h4>{{ cardsReading[0]["titleCard"] }}</h4>
          <p class="p pe">{{ cardsReading[0]["textTitleCard"] }}</p>
          <p class="p Pe">{{ cardsReading[0]["textCard"] }}</p>
          <p class="more">أقرأ المزيد</p>
          <p>{{ cardsReading[0]["date"] }}</p>
        </div>
      </div>
    </div>
    <!---- End Latest articles ---->
    <!---- Start Second Swiper ---->

    <div class="container">
      <div class="textSe">
        <div class="title">الأكثر قراءة</div>

        <p>عرض الجميع</p>
      </div>
      <div class="Bswiper">
        <div class="swiper-button-prev SeSwiperPrev">
          <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
        </div>
        <div class="swiper-button-next SeSwiperNext">
          <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
        </div>
      </div>
      <swiper class="SeSwiper" :slidesPerView="3" :spaceBetween="20" :slidesPerGroup="1" :loop="true"
        :loopFillGroupWithBlank="true" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange" :navigation="{
          nextEl: '.SeSwiperNext',
          prevEl: '.SeSwiperPrev',
        }">
        <SwiperSlide v-for="card in cardsReading">
          <img :src="card['img']" />
          <div class="text">
            <p>{{ card["date"] }}</p>
            <p>كتب بواسطة: {{ card["author"] }}</p>
          </div>
          <h4>{{ card["titleCard"] }}</h4>
        </SwiperSlide>
      </swiper>
    </div>
    <!---- End Second Swiper ---->
    <!---- Start Email ---->
    <div class="container">
      <div class="line"></div>
      <div class="form">
        <h1>اشترك ليصلك جميع المقالات</h1>
        <h4>ابقي علي اطلاع مع مقالتنا فور نزولها مع خدمة الرسائل البريدية
          هذه الخدمة مجانية تماماً</h4>
        <div class="emailL">
          <span>أشترك</span>
          البريد الإلكتروني

        </div>
      </div>
      <div class="line"></div>
    </div>
    <!---- End Email ---->
  </div>
</template>

<style scoped>
/*************** Start Global ***************/

.container {
  padding: 0;
  margin: 0;
}

.home {
  padding: var(--padding);
  padding-top: 100px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.title {
  font-size: 45px;
  display: inline-block;
  background: var(--text-gradient);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding: 45px 0;
}

.title::before,
.title::after {
  content: " ";
  background-color: #fece2f;

  display: inline-block;
  width: 2px;
  transform: rotate(40deg);
  position: absolute;

  z-index: -1;
}

.title::before {
  height: 52px;
  left: 37%;
  bottom: 26px;
}

.title::after {
  height: 26px;
  left: 27%;
  bottom: 40px;
}

/*************** End Global ***************/
/*************** Start Cards ***************/

.home .cards {
  justify-content: space-between;
  padding: 50px 11px;
}

.home .cards .card {
  border: none;
  padding: 0;
}

.home .cards .col4 {
  padding: 0;
}

.home .cards .card.Arow {
  padding: 0;
}

.home .cards .Arow img {
  width: 90%;
}

.home .cards .card .text {
  display: flex;
  justify-content: space-between;
  color: #777;
  font-size: 14px;
  padding: 0;
  margin: 0;
}

.home .cards .card.Arow .text {
  font-size: 12px;
  width: 90%;
}

.home .cards .card .text p {
  padding: 10px 0 0 0;
  margin: 0;
}

.home .cards .card.Arow h4 {
  font-size: 16px;
}

.home .cards .card h4 {
  font-size: 36px;
  width: fit-content;
  margin: 5px 0 10px;
}

.home .cards img {
  padding: 0;
  margin: 0;
  box-shadow: 1px 2px 20px;
}

.home .se {
  display: none;
  width: 100%;
  border: 1px solid #b3b2b2;
  margin: 25px 0 0;
  justify-content: start;
  align-items: center;
  padding: 0 15px;
  background-color: #eee;
  color: #777 !important;
  height: 38px;
  gap: 10px;
}

.home .se p {
  margin: 0;
  padding: 0;
}

/*************** End Cards ***************/
/*************** Start First Swiper ***************/

.swiper.FrSwiper {
  width: 85%;
}

.swiper .swiper-wrapper .swiper-slide.cardB::before {
  content: " ";
  position: absolute;
  width: calc(100%);
  height: 100%;
  background-color: rgba(0, 0, 0, 50%);
  border-radius: 2px;
}

.swiper .swiper-wrapper .swiper-slide {
  position: relative;
}

.swiper.FrSwiper .swiper-wrapper .swiper-slide p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  color: white;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 600;
}

.swiper.FrSwiper .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 100px;
  border-radius: 2px;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: "" !important;
}

.swiper-button-next.FrSwiperNext,
.swiper-button-prev.FrSwiperPrev {
  position: relative !important;
  font-size: 45px;
  color: #00000080;
}

.swiper-button-prev.FrSwiperPrev {
  top: -50px;
  right: 10px;
}

.swiper-button-next.FrSwiperNext {
  top: -72px;
  right: 96.7%;
}

.swiper-wrapper {
  margin-right: -30px;
}

/*************** End First Swiper ***************/

/*************** Start Latest articles ***************/

.cardSe {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  position: relative;
}

.cardSe img {
  width: 50%;
}

.cardSe .textCardSe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 50px;
  align-items: start;
  width: 50%;
}

.cardSe .textCardSe p.more {
  padding: 18px 0;
  color: var(--main-color);
}

.cardSe .textCardSe p {
  color: #38383888;
  font-size: 16px;
  margin: 0;
  text-align: start;
}

.cardSe .textCardSe p.Pe {
  display: none;
}

.cardSe .textCardSe p.p {
  font-size: 20px;
}

.cardSe .textCardSe h4 {
  color: #383838;
  font-size: 36px;
  padding: 18px 0;
}

.textSe {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.textSe .title {
  display: inline !important;
  padding: 15px 0 !important;
}

.textSe p {
  margin: 0 !important;
  color: var(--main-color);
  font-weight: 600;
  font-size: 20px;
}

/*************** End Latest articles ***************/

/*************** Start Second Swiper ***************/
.swiper.SeSwiper {
  margin-bottom: 120px;

}

.Bswiper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 18px;
}

.swiper.SeSwiper .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 225px;
}

.swiper.SeSwiper .swiper-wrapper .swiper-slide .text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.swiper.SeSwiper .swiper-wrapper .swiper-slide .text p {
  font-size: 12px;
  color: #383838;
  padding: 10px 0;
  margin: 0;
}

.swiper.SeSwiper .swiper-wrapper .swiper-slide h4 {
  font-size: 20px;
  color: #383838;
  text-align: start;
}

.swiper-button-next.SeSwiperNext,
.swiper-button-prev.SeSwiperPrev {
  position: relative !important;
  font-size: 45px;
  color: #00000080;
}

/*************** End Second Swiper ***************/
/*************** Start Email ***************/

.line {
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
}

.form {
  margin: 0 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form h1 {
  font-size: 48px;
  color: #383838;
  padding: 75px 0 0;
}

.form h4 {
  font-size: 20px;
  color: rgba(56, 56, 56, 0.8);
  padding-top: 25px;
  width: 45%;
  line-height: 1.5;padding-bottom: 20px;
}

.form .emailL {
  width: 55%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 18px 0;
  font-size: 24px;
  color: rgba(56, 56, 56, 0.31);position: relative;
}

.form .emailL span {
 position: absolute;
 right: 0;
}

/*************** End Email ***************/

/*************** Start Media ***************/

@media (max-width: 800px) {
  .home .se {
    display: flex;
  }
}

@media (max-width: 768px) {
  .home {
    padding: 0px 25px;
  }

  .title {
    font-size: 24px;
  }

  .title+p {
    font-size: 12px;
  }

  .cardSe {
    margin-bottom: 10px;
  }

  .cardSe .textCardSe {
    padding-right: 10px !important;
  }

  .cardSe .textCardSe p.Pe,
  .cardSe .textCardSe p.more {
    font-size: 10px !important;
    padding: 0 !important;
  }

  .cardSe .textCardSe p {
    font-size: 6px !important;
    padding: 0 !important;
  }

  .cardSe .textCardSe h4 {
    font-size: 16px !important;
    padding: 0 !important;
  }

  .home .cards {
    flex-direction: column-reverse;
  }

  .home .cards .col4 {
    flex-direction: row;
    display: flex;
    gap: 30px;
  }

  .home .cards .Arow img[data-v-9ea40744] {
    width: 100% !important;
  }

  .home .cards .card.Arow .text {
    width: 100% !important;
  }

  .home .cards>.card {
    width: 100% !important;
  }
}

@media (max-width: 920px) {
  .home .cards .card .text {
    font-size: 12px !important;
  }

  .home .cards .card.Arow .text {
    font-size: 10px !important;
  }

  .home .cards .card .text p {
    padding: 3px 0 0 !important;
  }

  .home .cards .card.Arow h4 {
    font-size: 14px;
  }

  .home .cards .card h4 {
    font-size: 30px;
  }
}

@media (max-width: 1000px) {
  .cardSe .textCardSe p.p {
    display: none;
  }

  .cardSe .textCardSe p.Pe {
    display: inline !important;
    font-size: 18px;
  }

  .cardSe .textCardSe h4 {
    font-size: 25px;
  }
}

/*************** End Media ***************/</style>
