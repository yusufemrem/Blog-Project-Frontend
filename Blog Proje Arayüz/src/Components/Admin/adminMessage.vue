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
          href="/html1/ib/owlcarousel/assets/owl.carousel.min.css"
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
                  <li class="tm-nav-item active">
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

            <div class="container-fluid pt-5">
              <div class="container">
                <div class="text-center mx-auto mb-5" style="max-width: 500px;">
                  <h5
                    class="d-inline-block text-success

 text-uppercase border-bottom border-5"
                  >
                    Blog Project
                  </h5>
                  <h1 class="display-4">Bildirim Kutusu</h1>
                </div>
                <div class="row g-5 mb-5">
                  <div v-for="notification in allNotification" class="col-lg-4">
                    <div
                      class="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                      style="height: 200px;"
                    >
                      <div
                        class="d-flex align-items-center justify-content-center text-success

 rounded-circle mb-4"
                        style="width: 100px; height: 70px; transform: rotate(-15deg);"
                      >
                        <i
                          class="fa fa-2x fa-location-arrow text-white"
                          style="transform: rotate(15deg);"
                        ></i>
                      </div>
                      <h4 class="mb-0">{{ notification.contactUserName }}</h4>
                      <br />
                      <h6 class="mb-0">{{ notification.contactSubject }}</h6>
                      <br />
                      <h6 class="mb-0 custom-h6">
                        {{ notification.contactMessage }}
                      </h6>
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
      allNotification: [],
    };
  },

  created() {
    this.fetchAllNotification();
  },
  methods: {
    fetchAllNotification() {
      this.$http
        .get(`https://localhost:44392/api/ContactMessage/NotificationBox`)
        .then((response) => {
          this.allNotification = response.data;
          console.log("girdi");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    // deleteBlog(id) {
    //   // Make a DELETE request to your API endpoint to delete the staff member with the given ID
    //   console.log("Deleting staff with ID:", id);
    //   this.$http
    //     .delete("https://localhost:44392/api/Home/deleteBlog/" + id)
    //     .then(() => {
    //       // Remove the deleted staff member from the staffList array
    //       this.allBlog = this.allBlog.filter((blog) => blog.blogID !== id);
    //     })
    //     .catch((error) => {
    //       console.error("Error deleting comment:", error);
    //     });
    // },
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
<style>
.custom-h6 {
  color: #008000; /* veya istediğiniz rengi belirtin */
  /* Diğer stil özelliklerini ekleyebilirsiniz */
}
</style>
