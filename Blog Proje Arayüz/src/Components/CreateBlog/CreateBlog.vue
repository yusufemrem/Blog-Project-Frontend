<template>
  <div>
    <head>
      <meta charset="utf-8" />
      <title>MEDINOVA - Hospital Website Template</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Free HTML Templates" name="keywords" />
      <meta content="Free HTML Templates" name="description" />

      <!-- Favicon -->
      <link href="/html1/img/favicon.ico" rel="icon" />

      <!-- Google Web Fonts -->
      <link rel="preconnect" href="/html1/https://fonts.gstatic.com" />
      <link
        href="/html1/https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <!-- Icon Font Stylesheet -->
      <link
        href="/html1/https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="/html1/https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />

      <!-- Libraries Stylesheet -->
      <link
        href="/html1/lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link
        href="/html1/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
        rel="stylesheet"
      />

      <!-- Customized Bootstrap Stylesheet -->
      <link href="/html1/css/bootstrap.min.css" rel="stylesheet" />

      <!-- Template Stylesheet -->
      <link href="/html1/css/style.css" rel="stylesheet" />

      <meta charset="utf-8" />
      <title>MEDINOVA - Hospital Website Template</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Free HTML Templates" name="keywords" />
      <meta content="Free HTML Templates" name="description" />
      <link rel="stylesheet" type="text/css" href="styles.css" />
      <!-- Favicon -->
      <link href="/html1/img/favicon.ico" rel="icon" />

      <!-- Google Web Fonts -->
      <link rel="preconnect" href="/html1/https://fonts.gstatic.com" />
      <link
        href="/html1/https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <!-- Icon Font Stylesheet -->
      <link
        href="/html1/https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="/html1/https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />

      <!-- Libraries Stylesheet -->
      <link
        href="/html1/lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link
        href="/html1/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
        rel="stylesheet"
      />

      <!-- Customized Bootstrap Stylesheet -->
      <link href="/html1/css/bootstrap.min.css" rel="stylesheet" />

      <!-- Template Stylesheet -->
      <link href="/html1/css/style.css" rel="stylesheet" />
    </head>
    <div class="container-fluid sticky-top bg-white shadow-sm">
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          <a href="index.html" class="navbar-brand">
            <h1 class="m-0 text-uppercase text-success">
              <i class="fa fa-clinic-medical me-2"></i>Blog Project
            </h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
              <router-link to="/">
                <a href="index.html" class="nav-item nav-link">Anasayfa</a>
              </router-link>
              <router-link to="/src/Components/WriterAbout/allWriterAbout.vue">
                <a href="about.html" class="nav-item nav-link"
                  >Yazar Hakkında</a
                >
              </router-link>
              <router-link to="/src/Components/Contact/contactMail.vue">
                <a href="service.html" class="nav-item nav-link active"
                  >İletişim</a
                >
              </router-link>
              <router-link to="/src/Components/Register/register.vue">
                <a href="price.html" class="nav-item nav-link">Kayıt Ol</a>
              </router-link>
              <router-link to="/src/Components/Login/login.vue">
                <a href="price.html" class="nav-item nav-link">Giriş Yap</a>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="container py-5">
      <div class="row g-5">
        <div class="bg-light rounded p-5">
          <form>
            <div class="row g-3">
              <div class="col-12 col-sm-6">
                <input
                  v-model="blog.blo1Title"
                  type="text"
                  class="form-control bg-white border-0"
                  placeholder="Blog Başlığı"
                  style="height: 55px;"
                />
              </div>

              <div class="col-12">
                <input
                  v-model="blog.blogContent"
                  type="text"
                  class="form-control bg-white border-0"
                  placeholder="Blog Yazınız"
                  style="height: 55px;"
                />
              </div>
              <div class="col-12">
                <textarea
                  v-model="blog.writerName"
                  class="form-control bg-white border-0"
                  rows="5"
                  placeholder="Yorum"
                ></textarea>
              </div>
              <div class="col-12">
                <button
                  @click="saveBlog"
                  class="btn btn-success w-100 py-3"
                  type="submit"
                >
                  Kaydet
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <router-link to="/">
      <div class="col-12">
        <button class="btn btn-success w-100 py-3" type="submit">
          Anasayfa
        </button>
      </div>
    </router-link>
  </div>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);
console.log("aaaaa");
export default {
  data() {
    return {
      blog: {
        blo1Title: null,
        blogContent: null,
        writerName: null,
      },
      // categoryName: null,
    };
  },
  created() {
    this.addWriter();
  },
  methods: {
    saveBlog() {
      this.$store.dispatch("saveBlog", this.blog);
      console.log("kayıttt");
      alert("Blog Başarılı Şekilde Eklendi.");

      //   this.bookings.name = null;
      //   this.bookings.ceckin = null;
      //   this.bookings.checkOut = null;
      //   this.bookings.city = null;
      console.log("kayıt işelemi");
    },
  },
};
</script>
