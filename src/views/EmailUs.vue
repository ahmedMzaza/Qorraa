<template>
  <div class="Emailus " style="margin-top: 150px;">
    <div class="container">
      <div class="row flex-column flex-lg-row px-3 ">
        <div class="col">

          <h1 class="py-2 fw-bold">تواصل معنا</h1>
          <h6 class="py-3 w-75 mx-auto lh-base">نحن نتطلع لسماع اخباركم و الاستماع الي ما لديكم لتقولوه لا تترددوا في
            التواصل معنا
          </h6>

          <img class="py-5" src="../assets/Footer-img.png" alt="">
        </div>
        <div class="col">
          <div class="row justify-content-between gap-4 text-end">
            <div class="d-flex flex-column gap-2 p-0 m-0">
              <label for="name">الاسم</label>
              <input type="text" class="border-0 bg-body-tertiary py-2 ">
            </div>
            <div class="d-flex flex-column gap-2 p-0 m-0">
              <label for="name">البريد الالكتروني</label>
              <input type="text" class="border-0 bg-body-tertiary py-2 ">
            </div>
            <div class="d-flex flex-column gap-2 p-0 m-0">
              <label for="name">عنوان الرسالة</label>
              <input type="text" class="border-0 bg-body-tertiary py-2 ">
            </div>
            <div class="d-flex flex-column gap-2 p-0 m-0 ">
              <label for="name">الرسالة</label>
              <input type="text" class="border-0 bg-body-tertiary py-2 " style="height: 100px;">
            </div>
            <a class="button w-25 text-center border-0 rounded h6 text-white py-2 m-0 px-2"> ارسل</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.button {
  background-color: var(--main-color);
}
</style>
