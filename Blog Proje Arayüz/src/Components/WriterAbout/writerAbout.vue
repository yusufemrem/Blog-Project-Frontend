<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      head>
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

    <body>
      <!-- Topbar End -->

      <!-- Navbar Start -->
      <div class="container-fluid sticky-top bg-white shadow-sm mb-5">
        <div class="container">
          <nav
            class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0"
          >
            <a href="index.html" class="navbar-brand">
              <h1 class="m-0 text-uppercase text-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-check2-all"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"
                  />
                  <path
                    d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"
                  />
                </svg>
                Blog Project
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
                <router-link
                  to="/src/Components/WriterAbout/allWriterAbout.vue"
                >
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
      <!-- Navbar End -->

      <!-- About Start -->
      <div class="container-fluid py-5">
        <div class="container">
          <div class="row gx-5">
            <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px;">
              <div class="position-relative h-100">
                <img
                  class="position-absolute w-100 h-100 rounded"
                  src="/html1/img/manzara.jpg"
                  style="object-fit: cover;"
                />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="mb-6">
                <h5
                  class="d-inline-block text-success text-uppercase border-bottom border-5"
                >
                  Yazar Hakkında
                </h5>
                <br />
                <h1 v-for="getWriterr in filteredComments" class="display-4">
                  {{ getWriterr.writerName }}
                </h1>
                <!-- <h1 v-for="getWriter in filteredComments" class="display-4">
                  {{ getWriter[0].writerName }}
                </h1> -->
              </div>
              <p v-for="getWriterr in filteredComments" id="blogContentt">
                {{ getWriterr.writerAbout }}
              </p>
              <!-- <p v-else-if="blog.blogID === 4" id="blogContentt">
                {{ getWriter2[0].writerAbout }}
              </p> -->
              <div class="row g-3 pt-3">
                <div class="col-sm- col-6">
                  <div class="bg-light text-center rounded-circle py-4">
                    <i class="fa fa-3x fa-user-md text-success mb-3"></i>
                    <h6 class="mb-0">
                      Mail Adresi<small
                        class="d-block text-success"
                        id="contact"
                        v-for="getWriterr in filteredComments"
                      >
                        <br />{{ getWriterr.writerMail }}
                      </small>
                      <!-- <small
                        v-else-if="blog.blogID === 4"
                        class="d-block text-success"
                        id="contact"
                      >
                        <br />{{ getWriter2[0].writerMail }}
                      </small> -->
                    </h6>
                  </div>
                </div>
                <div class="col-sm-6 col-6">
                  <div class="bg-light text-center rounded-circle py-4">
                    <i class="fa fa-3x fa-procedures text-success mb-3"></i>
                    <h6 class="mb-0">
                      Telefon Numarası<small
                        class="d-block text-success"
                        id="contact"
                      >
                        <br />0535 555 55 55
                      </small>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About End -->
      <Comments />
      <!-- Search Start -->

      <!-- Footer End -->
    </body>
  </html>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";

import Comments from "./comments";

Vue.use(VueResource);

export default {
  components: {
    Comments,
  },
  data() {
    return {
      // getWriter: [],
      // getWriter2: [],
      allWriter: [],
      blog: [],
    };
  },
  computed: {
    filteredComments() {
      const blogID = this.$route.params.blogID; // Şu anki blogun blogID'si
      return this.allWriter.filter((writers) => writers.writerID === blogID);
    },
  },
  created() {
    // this.fetchWriters1();
    // this.fetchWriters2();
    this.fetchAllWriters();

    const blogID = this.$route.params.blogID;
    console.log(blogID);
    this.$http
      .get(`https://localhost:44392/api/Home/getByBlog/${blogID}`)
      .then((response) => {
        this.blog = response.body;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    // fetchWriters1() {
    //   const id = 1;
    //   this.$http
    //     .get(`https://localhost:44331/api/Writer/getByWriter/${id}`)
    //     .then((response) => {
    //       this.getWriter = response.data;
    //       console.log("girdi");
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //     });
    // },
    // fetchWriters2() {
    //   const id = 3;
    //   this.$http
    //     .get(`https://localhost:44331/api/Writer/getByWriter/${id}`)
    //     .then((response) => {
    //       this.getWriter2 = response.data;
    //       console.log("girdi");
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //     });
    // },
    fetchAllWriters() {
      this.$http
        .get(`https://localhost:44392/api/Writer/allWriter`)
        .then((response) => {
          this.allWriter = response.data;
          console.log("girdi");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>
<style>
#blogContentt {
  font-size: 25px; /* Yazı boyutunu istediğiniz piksel değeriyle değiştirin */
}
#contact {
  font-size: 10px;
}
</style>
