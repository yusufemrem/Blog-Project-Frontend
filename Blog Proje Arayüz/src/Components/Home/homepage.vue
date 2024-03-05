<template>
  <div>
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <!-- Favicon -->
        <link href="/html1/img/favicon.ico" rel="icon" />

        <!-- Google Web Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com" />
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
        <div class="container-fluid sticky-top bg-white shadow-sm">
          <div class="container">
            <nav
              class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0"
            >
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
                  <a href="index.html" class="nav-item nav-link active"
                    >Anasayfa</a
                  >
                  <router-link
                    to="/src/Components/WriterAbout/allWriterAbout.vue"
                  >
                    <a href="contact.html" class="nav-item nav-link "
                      >Yazar Hakkında</a
                    >
                  </router-link>

                  <router-link to="/src/Components/Contact/contactMail.vue">
                    <a href="contact.html" class="nav-item nav-link "
                      >İletişim</a
                    >
                  </router-link>
                  <router-link to="/src/Components/Register/register.vue">
                    <a href="contact.html" class="nav-item nav-link "
                      >Kayıt Ol</a
                    >
                  </router-link>
                  <router-link to="/src/Components/Login/login.vue">
                    <a href="contact.html" class="nav-item nav-link "
                      >Giriş Yap</a
                    >
                  </router-link>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <!-- Navbar End -->

        <!-- Hero Start -->
        <div class="container-fluid bg-success py-5 mb-5 hero-header">
          <div class="container py-5">
            <div class="row justify-content-start">
              <div class="col-lg-8 text-center text-lg-start">
                <!-- <img src="/html1/img/blog.jpg" width="100%" height="100%" /> -->
                <h5
                  class="d-inline-block text-success text-uppercase border-bottom border-5"
                  style="border-color: rgba(256, 256, 256, .3) !important;"
                >
                  Hoş Geldiniz
                </h5>
                <h1 class="display-1 text-success mb-md-4">
                  Blog Yazma Zamanı!
                </h1>
                <router-link to="/src/Components/CreateBlog/CreateBlog.vue">
                  <div class="pt-2">
                    <a
                      href=""
                      class="btn btn-success rounded-pill py-md-3 px-md-5 mx-2"
                      >Blog Oluştur</a
                    >
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- Hero End -->

        <!-- About Start -->

        <!-- About End -->

        <!-- Services Start -->

        <!-- Services End -->

        <!-- Appointment Start -->

        <!-- Appointment End -->

        <!-- Pricing Plan Start -->

        <!-- Pricing Plan End -->

        <!-- Team Start -->

        <!-- Team End -->

        <!-- Search Start -->

        <!-- Search End -->

        <!-- Testimonial Start -->

        <!-- Testimonial End -->

        <!-- Blog Start -->
        <div class="container-fluid py-5">
          <div class="container">
            <div class="text-center mx-auto mb-5" style="max-width: 500px;">
              <h1
                class="d-inline-block text-success text-uppercase border-bottom border-5"
              >
                Blog Project
              </h1>
              <h1 class="display-4">
                Blog Yazılarımız
              </h1>
            </div>
            <div class="row g-5">
              <div class="col-xl-4 col-lg-6">
                <div class="bg-light rounded overflow-hidden">
                  <img class="img-fluid w-100" src="/html1/img/1.jpg" alt="" />
                  <div class="p-4">
                    <router-link
                      :to="{
                        name: 'yazarhakkinda',
                        params: { blogID: getBlog1.blogID },
                      }"
                    >
                      <a class="h3 d-block mb-3" href=""
                        >{{ getBlog1.blo1Title }}
                      </a>
                    </router-link>
                    <p class="m-6 " id="blogContent">
                      {{ getBlog1.blogContent }}
                    </p>
                  </div>
                  <div class="d-flex justify-content-between border-top p-4">
                    <div class="d-flex align-items-center">
                      <small class="ms-4"
                        ><br /><i class="far fa-eye text-success me-1">
                          <div v-if="getBlog1.categoryBy !== undefined">
                            {{ getCategoryName(getBlog1.categoryBy) }}
                          </div>
                        </i>
                      </small>
                    </div>
                    <div>
                      <small class="ms-4"
                        ><i class="far fa-comment text-success me-1"></i
                        >{{
                          getBlog1.blogCreateDate | formatCommentDate
                        }}</small
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6">
                <div class="bg-light rounded overflow-hidden">
                  <img class="img-fluid w-100" src="/html1/img/2.jpg" alt="" />
                  <div class="p-4">
                    <router-link
                      :to="{
                        name: 'yazarhakkinda',
                        params: { blogID: getBlog2.blogID },
                      }"
                    >
                      <a class="h3 d-block mb-3" href="">{{
                        getBlog2.blo1Title
                      }}</a>
                    </router-link>
                    <p class="m-6 " id="blogContent">
                      {{ getBlog2.blogContent }}
                    </p>
                  </div>
                  <div class="d-flex justify-content-between border-top p-4">
                    <div class="d-flex align-items-center">
                      <small class="ms-4"
                        ><i class="far fa-eye text-success me-1">
                          <div v-if="getBlog2.categoryBy !== undefined">
                            {{ getCategoryName(getBlog2.categoryBy) }}
                          </div></i
                        >
                      </small>
                    </div>
                    <br />

                    <small class="ms-4"
                      ><i class="far fa-comment text-success me-1"></i
                      >{{ getBlog2.blogCreateDate | formatCommentDate }}</small
                    >
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6">
                <div class="bg-light rounded overflow-hidden">
                  <img class="img-fluid w-100" src="/html1/img/3.jpg" alt="" />
                  <div class="p-4">
                    <a class="h3 d-block mb-3" href="">{{
                      getBlog3.blo1Title
                    }}</a>
                    <p class="m-6 " id="blogContent">
                      {{ getBlog3.blogContent }}
                    </p>
                  </div>
                  <div class="d-flex justify-content-between border-top p-4">
                    <div class="d-flex align-items-center">
                      <small class="ms-3"
                        ><i class="far fa-eye text-success me-1">
                          <i class="far fa-eye text-success me-1">
                            <div v-if="getBlog3.categoryBy !== undefined">
                              {{ getCategoryName(getBlog3.categoryBy) }}
                            </div></i
                          ></i
                        ></small
                      >
                    </div>
                    <br />

                    <small class="ms-4"
                      ><i class="far fa-comment text-success me-1"></i
                      >{{ getBlog3.blogCreateDate | formatCommentDate }}</small
                    >
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6">
                <div class="bg-light rounded overflow-hidden">
                  <img class="img-fluid w-100" src="/html1/img/4.jpg" alt="" />
                  <div class="p-4">
                    <a class="h3 d-block mb-3" href="">{{
                      getBlog4.blo1Title
                    }}</a>
                    <p class="m-6 " id="blogContent">
                      {{ getBlog4.blogContent }}
                    </p>
                  </div>
                  <div class="d-flex justify-content-between border-top p-4">
                    <div class="d-flex align-items-center">
                      <small class="ms-3"
                        ><i class="far fa-eye text-success me-1">
                          <div v-if="getBlog3.categoryBy !== undefined">
                            {{ getCategoryName(getBlog3.categoryBy) }}
                          </div></i
                        ></small
                      >
                    </div>
                    <br />

                    <small class="ms-4"
                      ><i class="far fa-comment text-success me-1"></i
                      >{{ getBlog4.blogCreateDate | formatCommentDate }}</small
                    >
                  </div>
                </div>
              </div>
              <div v-for="blog in getBlogList" class="col-xl-4 col-lg-6">
                <div class="bg-light rounded overflow-hidden">
                  <img class="img-fluid w-100" src="/html1/img/3.jpg" alt="" />
                  <div class="p-4">
                    <a class="h3 d-block mb-3" href="">{{ blog.blo1Title }}</a>
                    <p class="m-6 " id="blogContent">
                      {{ blog.blogContent }}
                    </p>
                  </div>
                  <div class="d-flex justify-content-between border-top p-4">
                    <div class="d-flex align-items-center">
                      <small class="ms-3"
                        ><i class="far fa-eye text-success me-1">
                          <i class="far fa-eye text-success me-1">
                            <div v-if="blog.categoryBy !== undefined">
                              {{ getCategoryName(blog.categoryBy) }}
                            </div></i
                          ></i
                        ></small
                      >
                    </div>
                    <br />

                    <small class="ms-4"
                      ><i class="far fa-comment text-success me-1"></i
                      >{{ blog.blogCreateDate | formatCommentDate }}</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Blog End -->

        <!-- Footer Start -->
      </body>
    </html>
  </div>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);
export default {
  data() {
    return {
      //getWriter: [],
      getBlog1: {},
      getBlog2: {},
      getBlog3: {},
      getBlog4: {},
      getBlogList: {},
      category: {},
      allWriter: {},
    };
  },
  created() {
    this.fetchSingleBlog();
    this.fetchSingleBlog2();
    this.fetchSingleBlog3();
    this.fetchSingleBlog4();
    this.listBlog();
    this.fetchCategories();
    //  this.fetchWriters1();
    //this.$store.dispatch("setUserName", this.userInfo.username);
  },
  methods: {
    getCategoryName(categoryBy) {
      const categories = {
        2: "Yazılım Kategorisi",
        3: "Teknoloji Kategorisi",
        4: "Tiyatro Kategorisi",
        5: "Film & Dizi Kategorisi",
        6: "Oyun Kategorisi",
        7: "Spor Kategorisi",
        8: "Seyahat Kategorisi",
        9: "Donanım Kategorisi",
      };

      return categories[categoryBy] || "Bilinmeyen Kategori";
    },
    fetchSingleBlog() {
      const id = 21;
      this.$http
        .get(`https://localhost:44392/api/Home/getByBlog/${id}`)
        .then((response) => {
          this.getBlog1 = response.data;
          console.log("girdi");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    fetchSingleBlog2() {
      const id = 22;
      this.$http
        .get(`https://localhost:44392/api/Home/getByBlog/${id}`)
        .then((response) => {
          this.getBlog2 = response.data;
          console.log("girdi");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    fetchSingleBlog3() {
      const id = 23;
      this.$http
        .get(`https://localhost:44392/api/Home/getByBlog/${id}`)
        .then((response) => {
          this.getBlog3 = response.data;
          console.log("girdi");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    fetchSingleBlog4() {
      const id = 24;
      this.$http
        .get(`https://localhost:44392/api/Home/getByBlog/${id}`)
        .then((response) => {
          this.getBlog4 = response.data;
          console.log("girdi");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },

    listBlog() {
      this.$http
        .get(`https://localhost:44392/api/Home/getBlog`)
        .then((response) => {
          this.getBlogList = response.data;
          console.log("girdi");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },

    fetchCategories() {
      this.$http
        .get(`https://localhost:44392/api/Writer/allWriter`)
        .then((response) => {
          this.category = response.data;
          console.log("asdasd");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },

    AllWriters() {
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
  filters: {
    formatCommentDate(value) {
      if (typeof value === "string") {
        // Önce "T" karakterini boşlukla değiştirin
        value = value.replace("T", " ");
        // Daha sonra tarihi uygun bir şekilde formatlayın
        return new Date(value).toLocaleDateString("tr-TR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
      return value;
    },
  },
};
</script>
