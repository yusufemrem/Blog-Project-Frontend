<template>
  <div>
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                Blog Project {{ $route.query.username }} - -

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
                  <li class="tm-nav-item active">
                    <a href="index.html" class="tm-nav-link">
                      <i class="fas fa-home"></i>
                      Yazarın Blogları {{ username }}
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

            <div class="container-fluid py-3">
              <div class="container">
                <div class="row gx-5">
                  <div v-for="getWriterr in allWriter" class="col-lg-7">
                    <br />
                    <div class="mb-3">
                      <h5
                        class="d-inline-block text-success text-uppercase border-bottom border-5"
                      >
                        Yazar Hakkında a
                      </h5>
                      <br />
                      <h1 class="display-6">
                        {{ getWriterr.writerName }}
                      </h1>
                      <!-- <h1 v-for="getWriter in filteredComments" class="display-4">
                    {{ getWriter[0].writerName }}
                  </h1> -->
                    </div>
                    <p id="blogContentt">
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
                          <i
                            class="fa fa-3x fa-procedures text-success mb-3"
                          ></i>
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
          </main>
        </div>
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
      // getWriter: [],
      // getWriter2: [],
      username: null,
      allWriter: [],
      blog: [],
    };
  },
  mounted() {
    this.username = this.$route.query.username;
    const userId = this.$route.query.userId;
    // username ve userId değerlerini kullanabilirsiniz
  },
  created() {
    // this.fetchWriters1();
    // this.fetchWriters2();
    this.fetchAllWriters();

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
