<template>
  <div>
    <div>
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Xtra Blog</title>
          <link rel="stylesheet" href="/html3/fontawesome/css/all.min.css" />
          <!-- https://fontawesome.com/ -->
          <link
            href="/html3/https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
            rel="stylesheet"
          />
          <!-- https://fonts.google.com/ -->
          <link href="/html3/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/html3/css/templatemo-xtra-blog.css" rel="stylesheet" />
          <!--
  
  TemplateMo 553 Xtra Blog
  
  https://templatemo.com/tm-553-xtra-blog
  
  -->
        </head>
        <body>
          <header class="tm-header" id="tm-header">
            <div class="tm-header-wrapper">
              <button
                class="navbar-toggler"
                type="button"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>
              <div class="tm-site-header">
                <div class="mb-3 mx-auto tm-site-logo"></div>
                <h1 class="text-center">
                  Blog Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-currency-bitcoin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z"
                    />
                  </svg>
                </h1>
              </div>
              <nav class="tm-nav" id="tm-nav">
                <ul>
                  <router-link to="/src/Components/Admin/adminBlog.vue">
                    <li class="tm-nav-item ">
                      <a href="index.html" class="tm-nav-link">
                        <i class="fas fa-home"></i>
                        Yazarın Blogları
                      </a>
                    </li>
                  </router-link>

                  <router-link to="/src/Components/Admin/adminComment.vue">
                    <li class="tm-nav-item">
                      <a href="about.html" class="tm-nav-link">
                        <i class="fas fa-users"></i>
                        Yorumlar
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/src/Components/Admin/adminMessage.vue">
                    <li class="tm-nav-item">
                      <a href="contact.html" class="tm-nav-link">
                        <i class="far fa-comments"></i>
                        Mesaj Kutusu
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/src/Components/Admin/adminRole.vue">
                    <li class="tm-nav-item">
                      <a href="contact.html" class="tm-nav-link">
                        <i class="far fa-comments"></i>
                        Roller
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/src/Components/Admin/adminUsers.vue">
                    <li class="tm-nav-item">
                      <a href="contact.html" class="tm-nav-link">
                        <i class="far fa-comments"></i>
                        Kullanıcılar Ve Rol Atama
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/src/Components/Admin/adminChart.vue">
                    <li class="tm-nav-item">
                      <a href="contact.html" class="tm-nav-link">
                        <i class="far fa-comments"></i>
                        Google Chart
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/">
                    <li class="tm-nav-item">
                      <a href="contact.html" class="tm-nav-link">
                        <i class="far fa-comments"></i>
                        Çıkış Yap
                      </a>
                    </li>
                  </router-link>
                </ul>
              </nav>
              <div class="tm-mb-65">
                <a
                  rel="nofollow"
                  href="https://fb.com/templatemo"
                  class="tm-social-link"
                >
                  <i class="fab fa-facebook tm-social-icon"></i>
                </a>
                <a href="https://twitter.com" class="tm-social-link">
                  <i class="fab fa-twitter tm-social-icon"></i>
                </a>
                <a href="https://instagram.com" class="tm-social-link">
                  <i class="fab fa-instagram tm-social-icon"></i>
                </a>
                <a href="https://linkedin.com" class="tm-social-link">
                  <i class="fab fa-linkedin tm-social-icon"></i>
                </a>
              </div>
            </div>
          </header>
          <div class="container-fluid">
            <main class="tm-main">
              <!-- Search form -->

              <div>
                <form class="">
                  <h2 class="tm-color-primary tm-post-title mb-4">
                    Blog Ekleme Formu
                  </h2>
                  <div class="mb-4">
                    <h3>Blog Başlığı</h3>
                    <input
                      v-model="blog.blo1Title"
                      class="form-control"
                      name="İsminiz"
                      type="text"
                    />
                  </div>
                  <h3>Blog İçeriği</h3>
                  <div class="mb-4">
                    <input
                      v-model="blog.blogContent"
                      class="form-control"
                      name="içerik"
                      type="text"
                    />
                  </div>

                  <div class="text-right">
                    <button
                      onclick="alert('Kaydetme işlemi başarılı')"
                      @click="saveBlog"
                      class="tm-btn tm-btn-primary tm-btn-small "
                      type="button"
                    >
                      Kaydet
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </body>
      </html>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

export default {
  data() {
    return {
      blog: {
        blo1Title: null,
        blogContent: null,
      },
    };
  },

  created() {
    //  this.fetchAllWriters();
  },
  methods: {
    //   fetchAllWriters() {
    //     this.$http
    //       .get(`https://localhost:44392/api/Home/getBlog`)
    //       .then((response) => {
    //         this.allBlog = response.data;
    //         console.log("girdi");
    //       })
    //       .catch((error) => {
    //         console.log("error", error);
    //       });
    //   },

    saveBlog() {
      this.$store.dispatch("saveBlog", this.blog);
      console.log("kayıttt");
      //   this.bookings.name = null;
      //   this.bookings.ceckin = null;
      //   this.bookings.checkOut = null;
      //   this.bookings.city = null;
      console.log("kayıt işelemi");
    },
  },
  // filters: {
  //   formatCommentDate(value) {
  //     if (typeof value === "string") {
  //       // Önce "T" karakterini boşlukla değiştirin
  //       value = value.replace("T", " ");
  //       // Daha sonra tarihi uygun bir şekilde formatlayın
  //       return new Date(value).toLocaleDateString("tr-TR", {
  //         year: "numeric",
  //         month: "long",
  //         day: "numeric",
  //       });
  //     }
  //     return value;
  //   },
  // },
};
</script>
