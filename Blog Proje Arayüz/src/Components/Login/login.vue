<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/html2-login/assets/img/apple-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/html2-login/assets/img/favicon.png"
      />
      <title>
        Soft UI Dashboard by Creative Tim
      </title>
      <!--     Fonts and icons     -->
      <link
        href="/html2-login/https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
        rel="stylesheet"
      />
      <!-- Nucleo Icons -->
      <link href="/html2-login//assets/css/nucleo-icons.css" rel="stylesheet" />
      <link href="/html2-login//assets/css/nucleo-svg.css" rel="stylesheet" />
      <!-- Font Awesome Icons -->

      <link href="/html2-login//assets/css/nucleo-svg.css" rel="stylesheet" />
      <!-- CSS Files -->
      <link
        id="pagestyle"
        href="/html2-login//assets/css/soft-ui-dashboard.css?v=1.0.3"
        rel="stylesheet"
      />
    </head>
    <router-link to="/src/Components/Register/register.vue">
      <button>kaydol</button>
    </router-link>
    <body class="">
      <main class="main-content  mt-0">
        <section>
          <div class="page-header min-vh-75">
            <div class="container">
              <div class="row">
                <div
                  class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto"
                >
                  <div class="card card-plain mt-8">
                    <div class="card-header pb-0 text-left bg-transparent">
                      <h3 class="font-weight-bolder text-info text-gradient">
                        Blog Project
                      </h3>
                      <p class="mb-0">
                        Giriş Yapın
                      </p>
                    </div>
                    <div class="card-body">
                      <form role="form" @submit.prevent="submitForm">
                        <label>Kullanıcı Adı</label>
                        <div class="mb-3">
                          <input
                            v-model="userInfo.username"
                            type="username"
                            class="form-control"
                            placeholder="Kullanıcı Adı"
                          />
                        </div>
                        <label>Şifre</label>
                        <div class="mb-3">
                          <input
                            v-model="userInfo.password"
                            type="password"
                            class="form-control"
                            placeholder="Password"
                          />
                        </div>
                        <!-- <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                          />
                          <label class="form-check-label" for="rememberMe"
                            >Remember me</label
                          >
                        </div> -->

                        <router-link
                          :to="{
                            query: { username: userInfo.username },
                          }"
                        >
                          <div class="text-center">
                            <button
                              @click="submitForm"
                              type="submit"
                              class="btn bg-gradient-info w-100 mt-4 mb-0"
                            >
                              Giriş Yap
                            </button>
                          </div>
                        </router-link>
                      </form>
                    </div>

                    <router-link to="/src/Components/Register/register.vue">
                      <div class="text-center">
                        <button
                          type="button"
                          class="btn bg-gradient-info w-100 mt-4 mb-0"
                        >
                          Kayıt Ol
                        </button>
                      </div>
                    </router-link>
                    <!-- <div class="card-footer text-center pt-0 px-lg-2 px-1">
                      <p class="mb-4 text-sm mx-auto">
                        Don't have an account?
                        <a
                          href="java:;"
                          class="text-info text-gradient font-weight-bold"
                          >Sign up</a
                        >
                      </p>
                    </div> -->
                  </div>
                  <router-link to="/">
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn bg-gradient-info w-100 mt-4 mb-8"
                      >
                        Anasayfa
                      </button>
                    </div>
                  </router-link>
                </div>

                <div class="col-md-6">
                  <div
                    class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8"
                  >
                    <div
                      class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                      style="background-image:url('/html2-login/assets/img/curved-images/curved6.jpg')"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <!-- -------- START FOOTER 3 w/ COMPANY DEION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->
    </body>
  </html>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import axios from "axios";
export default {
  data() {
    return {
      data: {
        username: "",
        password: "",
      },
      userInfo: {
        username: null,
        password: null,
      },
    };
  },

  methods: {
    submitForm() {
      axios
        .post("https://localhost:44392/api/Auth/Login", {
          username: this.userInfo.username,
          password: this.userInfo.password,
        })
        .then((response) => {
          this.userInfo = response.data;
          //   // Başarılı giriş durumunda yapılacak işlemler
          // Örneğin, yönlendirme yapabilirsiniz: this.$router.push("/home");

          //alert("Giriş İşlemi Başarılı Ana Sayfaya Yönlendiriliyorsunuz");
          localStorage.setItem("token", response.data.token);
          // this.$router.push({
          this.$router.push("/src/Components/Admin/adminBlog.vue");
          //   path: "/src/Components/Admin/adminBlog.vue",
          // });
        })
        .catch((error) => {
          console.error("Giriş hatası:", error);
          alert("kullanıcı adı veya şifre yanlış");
        });
    },
    // created() {
    //   const token = localStorage.getItem("token");
    //   console.log("created çalıştı");
    //   if (token) {
    //     const config = {
    //       headers: { Authorization: `Bearer ${token}` },
    //     };

    //     // Token varsa, axios ile bir kimlik doğrulama yapabiliriz
    //     axios
    //       .get("https://localhost:44392/api/Auth/ValidateToken", config)
    //       .then((response) => {
    //         // Token geçerliyse, kullanıcı oturumunu yeniden başlatabiliriz
    //         // Örneğin, kullanıcı bilgilerini alabilir veya router'ı güncelleyebiliriz
    //         // Örneğin, kullanıcı bilgilerini alabiliriz:
    //         this.userInfo.username = response.data.username;
    //         // Örneğin, router'ı güncelleyebiliriz:
    //         this.$router.push("/src/Components/Admin/adminBlog.vue");
    //       })
    //       .catch((error) => {
    //         // Token geçerli değilse, kullanıcıyı çıkış yapmaya yönlendirebiliriz
    //         console.error("Token doğrulama hatası:", error);
    //         // Örneğin, localStorage'daki token'i temizleyebilir ve giriş sayfasına yönlendirebiliriz
    //         localStorage.removeItem("token");
    //         this.$router.push({ name: "Login" });
    //       });
    //   }
    // },
    // submitForm() {
    //   this.$store.dispatch("login", { ...this.userInfo });
    //   this.$store.commit("setUsername", this.userInfo.username);
    //   // this.$router.push({
    //   //   path: "/src/Components/Admin/adminBlog.vue",
    //   // });

    //   console.log(response.data.token);
    //   console.log(this.userInfo.username);
    // },
  },
};
</script>
