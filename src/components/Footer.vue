<template>
    <footer>
        <div class="foot-col">
            <img src="../assets/Footer-img.png" alt="" />

            <div class="group-icon">
                <font-awesome-icon icon="fa-brands fa-youtube" />
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                <font-awesome-icon icon="fa-brands fa-instagram" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
            </div>
        </div>
        <div class="text">
            <div class="foot-col">
                <h3> من نحن </h3>
                <p>الرؤية و الرسالة و الاهداف</p>
                <p> اعضاء الادارة التنفيدية</p>
                <p>شكل المبادرة و ما تقدمه للمجتمع</p>

            </div>
            <div class="foot-col">
                <h3> الوائح والسياسات </h3>
                <p>اللائحة الاساسية </p>
                <p>اللائحة التنظيمية</p>
                <p>سياسة خصوصية البيانات</p>

            </div>
            <div class="foot-col">
                <h3>المركز الإعلامي</h3>
                <p>اللقات التليفزيونية</p>
                <p>الصور</p>
                <p>الاخبار</p>
            </div>
        </div>
    </footer>
</template>
<style scoped>
footer {
    padding: 50px 140px !important;
    margin-top: 100px;
    border-top: 1px solid #00000063;
    box-shadow: 0px 10px 40px #868181;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    bottom: 0;
}


footer div.foot-col img {
    width: 165px;
}

footer div.foot-col .group-icon {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: var(--main-color);
}

footer .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
}

footer .text div.foot-col {
    display: flex;
    flex-direction: column;
    align-items: start;
}

footer .text div.foot-col h3 {
    color: #170F49;
    font-size: 20px;
    margin: 0 0 20px 0;
}

footer .text div.foot-col p:nth-last-child(1) {
    margin: 0px !important;
}

footer .text div.foot-col p:hover {
    transform: translateX(-10px);
}

footer .text div.foot-col p {
    margin: 0 0 14px 0;
    font-size: 15px;
    transition: 0.5s;
}

@media (max-width:1000px) {
    footer {
        padding: 50px 120px;
    }

    footer div.foot-col img {
        width: 140px;
    }
}

@media (max-width:9200px) {
    footer {
        padding: 50px 30px;
    }
}

@media (max-width:770px) {
    footer {
        padding: 50px 30px;

    }

    footer .text div.foot-col h3 {
        font-size: 15px;
    }

    footer .text div.foot-col p {
        font-size: 10px;
    }

    footer div.foot-col img {
        width: 120px;
    }
}

@media (max-width:560px) {
    footer {
        flex-direction: column;
        align-items: start;
        padding: 50px 25px !important;
    }

    footer .text {
        display: flex;
        align-items: start;
        width: 70%;
        flex-direction: column;
        gap: 30px;
        padding-top: 20px;
    }

    footer>div.foot-col {
        margin: 0 auto !important;
    }


}
</style>
<script></script>
