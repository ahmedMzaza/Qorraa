<template>
  <div class="about">
    <!-- Start Row-1 -->
    <div class="container">
      <div class="row1">
        <div class="col-5">
          <h1>لمحة عن</h1>
          <h1 class="title">قُرَّاءْ</h1>

        </div>
        <div class="col-6" style="padding: 30px 0 0 0;">
          <img src="../assets/Footer-img.png" alt="">
          <p>تقدم قُرَّاءْ تدريبات أكاديمية وتخصصية ومهارية لكل لجنة خاصة بوظيفتها. مثال: لجنة الإعلام يأخذ الشخص المُنضم
            حديثاً للجنة تدريبات في المجال الإعلامي، ولجنة الإعلام لها أقسام وهى: - التصميم - التسويق - التصوير - فحسب
            اختياره للقسم الذي يريد التدريب فيه يأخذ تدريبات أكاديمية، وعملية داخله، ليكون قادراً على تأدية المهام الخاصة
            بهذا القسم، وهكذا في باقي اللجان.</p>
        </div>
      </div>
      <img src="../assets/Rectangle-647.png" style="width: 100%;padding: 90px 0px ;" alt="">
    </div>

    <!-- End Row-1 -->
    <!-- Start card -->
    <div class="container">
      <div class="cardo">
        <div class="cardO">
          <h4>اهدفنا</h4>
          <p>تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.
            ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.
            لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع.</p>
        </div>
        <div class="cardO">
          <h4>رؤيتنا</h4>
          <p>نطمح إلى تشجيع ثقافة القراءة وإثراء المعرفة في المجتمع العربي. نسعى لأن نصبح المصدر الرئيسي والموجه لكل محبي
            القراءة في العالم العربي، ونسهم في بناء جيل قارئ مثقف ومبدع.</p>
        </div>
      </div>
    </div>
    <!-- End card -->
    <!-- Start Company-->
    <div class="company">
      <div class="container">
        <h1 style="display: inline;">شركاء
          <h1 class="title">النجاح</h1>
        </h1>
        <div class="img ">
          <div class="imgs AL">
            <img class="D" src="../assets/alexuni1.png" alt="">
            <img class="L" src="../assets/alexuni2.png" alt="">
          </div>
          <div class="imgs">
            <img src="../assets/mdarj.png" alt="">
          </div>
          <div class="imgs">
            <img src="../assets/mezza.png" alt="">
          </div>
          <div class="imgs">
            <img src="../assets/arabisk.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- End Company -->
    <!-- Start Team -->
    <div class="team">
      <div class="container">
        <h1 style="display: inline;">فريق
          <h1 class="title">العمل</h1>
        </h1>
        <div class="Bswiper">
          <div class="swiper-button-prev SeSwiperPrev">
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
          </div>
          <div class="swiper-button-next SeSwiperNext">
            <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
          </div>
        </div>
        <swiper class="SeSwiper" :slidesPerView="4" :spaceBetween="20" :slidesPerGroup="1" :loop="true"
          :loopFillGroupWithBlank="true" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange" :navigation="{
            nextEl: '.SeSwiperNext',
            prevEl: '.SeSwiperPrev',
          }">
          <SwiperSlide v-for="Team in Teams">
            <img :src="Team['img']" />
            <h4>{{ Team["Name"] }}</h4>
            <h5>{{ Team["position"] }}</h5>
          </SwiperSlide>
        </swiper>
      </div>
    </div>
    <!-- End Team -->
  </div>
</template>
<style>
/*************** Start Global ***************/
.container {
  padding: 0 60px;
  margin: 0;
}

.about {
  padding: 150px 0;
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

/* 
.title::before,
.title::after {
  content: " ";
  background-color: #fece2f;
  display: inline-block;
  width: 5px;
  transform: rotate(41deg);
  position: absolute;
  z-index: -1;
}

.title::before {
  height: 80px;
  left: 42%;
  bottom: -34px;
}

.title::after {
  height: 48px;
  left: 31%;
  bottom: -7px;
} */

/*************** End Global ***************/
/*************** Start Row-1 ***************/
.about .row1 {
  display: flex;
  justify-content: space-between;
}

.about .row1 .col-5 {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  row-gap: 50px;
}

.about .row1 .col-5 .title {
  position: relative;
  right: 245px;
  padding: 0;
}

.about .row1 .col-6 p {
  font-size: 20px;
  line-height: 37px;
  color: rgba(56, 56, 56, 0.7);
  padding: 25px 0 0 0;
  width: 100%;
  text-align: start;
}

.about .row1 .col-6 img {
  width: 140px;
}

.about .row1 .col-5 h1 {
  font-size: 125px;
  color: #383838;
}

/*************** End Row-1 ***************/
/*************** Start card  ***************/
.container .cardo {
  display: flex;
  justify-content: space-between;
  text-align: start;
}

.container .cardO {
  width: 40%;
}

.container .cardO h4 {
  font-size: 32px;
  position: relative;
  width: fit-content;
}

.container .cardO h4::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -4px;
  background-color: rgba(254, 206, 47, 1);
}

.container .cardO p {
  font-size: 24px;
  color: rgba(56, 56, 56, 0.7);
}

/*************** End card  ***************/
/*************** Start Company ***************/
.company .container .title::before,
.company .container .title::after {
  width: 3px;
}

.company .container .title::before {
  height: 48px;
  left: 42%;
  bottom: 16px;
}

.company .container .title::after {
  height: 31px;
  left: 31%;
  bottom: 29px;
}

.company .container .img {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px 0px;
  border-radius: 5px;
  background-color: rgba(217, 217, 217, 0.12);
}

.company .container .img .imgs {
  position: relative;
  transition: 1s;
}


.company .container .img .imgs.AL img.L {
  display: none;
  width: 225px;
}

.company .container .img .imgs.AL:hover img.L {
  display: inline !important;

}

.company .container .img .imgs.AL:hover img.D {

  display: none;

}

/*************** End Company  ***************/
/*************** Start Team ***************/


.team .container .title::before,
.team .container .title::after {
  width: 3px;
}

.team .container .title::before {
  height: 48px;
  left: 42%;
  bottom: 16px;
}

.team .container .title::after {
  height: 31px;
  left: 31%;
  bottom: 29px;
}

.team .container .Bswiper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 18px;
}

.team .container .swiper.SeSwiper .swiper-wrapper .swiper-slide img {
  width: 100%;
}

.swiper.SeSwiper .swiper-wrapper .swiper-slide h5 {
  font-size: 16px;
  color: rgba(56, 56, 56, 0.7);
  text-align: start;
}

.swiper.SeSwiper .swiper-wrapper .swiper-slide h4 {
  font-size: 20px;
  color: #383838;
  text-align: start;
  padding-top: 15px;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: "" !important;
}

.swiper-button-next.SeSwiperNext,
.swiper-button-prev.SeSwiperPrev {
  position: relative !important;
  font-size: 45px;
  color: #00000080;
}

/*************** End Team  ***************/
/*************** Start Media ***************/

@media (max-width:570px) {
  .about .row1 .col-5 h1 {
    font-size: 48px !important;

  }

  .about .row1 .col-6 img {
    width: 88px !important;
  }

  .about .row1 .col-6 p {
    font-size: 14px !important;
  }
}

@media (max-width:990px) {
  .about .row1 .col-5 {
    flex-direction: column !important;
  }
}

@media (max-width:1250px) {
  .about .row1 {
    flex-direction: column;
  }

  .about .row1 .col-5 {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .about .row1 .col-5 .title {
    right: 0;
    left: 0;
  }

  .about .row1 .col-6 {
    width: 100%;
  }
}

/*************** End Media ***************/
</style>
<script>
import { Navigation, A11y } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
  data() {
    return {
      Teams: [
        {
          img: require("../assets/Rectangle649.png"),
          Name: "م. يوسف التركي",
          position: "رئيس التقييم بلجنة التقييم والتطوير لسنة 2023",
        },
        {
          img: require("../assets/Rectangle650.png"),
          Name: " أ. سيف الدين سامر",
          position: "مستشار لجنة الإعلام لسنة 2023",
        },
        {
          img: require("../assets/Rectangle651.png"),
          Name: "م. خالد حسن",
          position: "منسق بلجنة الإعلام لسنة 2023",
        },
        {
          img: require("../assets/Rectangle652.png"),
          Name: "م. محمد علاء  ",
          position: "رئيس المبادرة لسنة 2023",
        },
        {
          img: require("../assets/Rectangle649.png"),
          Name: "م. يوسف التركي",
          position: "رئيس التقييم بلجنة التقييم والتطوير لسنة 2023",
        },
        {
          img: require("../assets/Rectangle650.png"),
          Name: " أ. سيف الدين سامر",
          position: "مستشار لجنة الإعلام لسنة 2023",
        },
        {
          img: require("../assets/Rectangle651.png"),
          Name: "م. خالد حسن",
          position: "منسق بلجنة الإعلام لسنة 2023",
        },
        {
          img: require("../assets/Rectangle652.png"),
          Name: "م. محمد علاء  ",
          position: "رئيس المبادرة لسنة 2023",
        },

      ]
    }
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
}
</script>