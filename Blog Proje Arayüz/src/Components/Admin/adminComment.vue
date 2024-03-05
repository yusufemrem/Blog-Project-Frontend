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
                Blog Project a {{ username.email }}
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
                  <li class="tm-nav-item active">
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
              <table class="table table-bordered">
                <tr>
                  <th>#</th>
                  <th>Blog Başlığı</th>
                  <th>Oluşturma Tarihi</th>
                  <th>Kategori</th>
                  <th>Sil</th>
                  <th>Güncelle</th>
                </tr>
                <tr v-for="comment in allComment">
                  <td>{{ comment.commentID }}</td>
                  <td>{{ comment.commentUserName }}</td>
                  <td>{{ comment.commentContent }}</td>
                  <td>{{ comment.commentDate | formatCommentDate }}</td>
                  <td>
                    <button
                      @click="deleteComment(comment.commentID)"
                      class="btn mb-1 btn-rounded btn-outline-danger"
                    >
                      Sil
                    </button>
                  </td>
                  <td>
                    <router-link
                      :to="{
                        name: 'yorumguncelle',
                        params: {
                          commentID: comment.commentID,
                          commentBlogID: comment.blogID,
                        }, // burada kaldık tıklayınca yorumun ıd sini alıp güncelleme sayfasına yönlendirecek
                      }"
                    >
                      <button class="btn mb-1 btn-rounded btn-outline-success">
                        Güncelle
                      </button>
                    </router-link>
                  </td>
                </tr>
              </table>
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
import axios from "axios";
Vue.use(VueResource);

export default {
  data() {
    return {
      allComment: [],
      comment: [],
      username: null,
    };
  },

  created() {
    //  this.fetchAllComment();

    this.getComment();
    const token = localStorage.getItem("token");
    console.log("created çalıştı");
    if (token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      // Token varsa, axios ile bir kimlik doğrulama yapabiliriz
      axios
        .get("https://localhost:44392/api/Auth/ValidateToken", config)
        .then((response) => {
          // Token geçerliyse, kullanıcı oturumunu yeniden başlatabiliriz
          // Örneğin, kullanıcı bilgilerini alabilir veya router'ı güncelleyebiliriz
          // Örneğin, kullanıcı bilgilerini alabiliriz:
          // this.userInfo.username = response.data.username;
          // Örneğin, router'ı güncelleyebiliriz:
          this.username = response.data;

          // this.$router.push("/src/Components/Admin/adminBlog.vue");
        })
        .catch((error) => {
          // Token geçerli değilse, kullanıcıyı çıkış yapmaya yönlendirebiliriz
          console.error("Token doğrulama hatası:", error);
          // Örneğin, localStorage'daki token'i temizleyebilir ve giriş sayfasına yönlendirebiliriz
          localStorage.removeItem("token");
          this.$router.push({ name: "Login" });
        });
    }
  },
  methods: {
    async getComment() {
      try {
        // Vuex action'ını çağır ve sonucu bekleyerek al
        await this.$store.dispatch("getComment");

        // State'deki veriyi almak için doğrudan getters kullanabilirsiniz
        this.allComment = this.$store.getters.getComments;

        // Diğer kodları bu noktada devam ettirebilirsiniz

        // Other code to be executed after the getComment action completes
      } catch (error) {
        console.error(error);
      }
    },
    // fetchAllComment() {
    //   this.$http
    //     .get(`https://localhost:44392/api/Comment/CommentList`)
    //     .then((response) => {
    //       this.allComment = response.data;
    //       console.log("girdi");
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //     });
    // },
    deleteComment(id) {
      // Make a DELETE request to your API endpoint to delete the staff member with the given ID
      console.log("Deleting staff with ID:", id);
      this.$http
        .delete("https://localhost:44392/api/Comment/DeleteComment/" + id)
        .then(() => {
          // Remove the deleted staff member from the staffList array
          this.allComment = this.allComment.filter(
            (comment) => comment.commentID !== id
          );
        })
        .catch((error) => {
          console.error("Error deleting comment:", error);
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
