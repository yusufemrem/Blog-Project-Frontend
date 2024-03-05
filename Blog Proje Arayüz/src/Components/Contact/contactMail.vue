<template>
  <div>
    <html lang="en">
      <head>
        <!-- Favicon -->
        <link href="img/favicon.ico" rel="icon" />

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
        <!-- Topbar Start -->

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
                  <router-link to="/src/Components/Home/homepage.vue">
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

        <!-- Contact Start -->
        <div class="container-fluid pt-5">
          <div class="container">
            <h1>
              İstek Şikayet Veya Önerileriniz İçin Bize Mail Veya Mesaj Gönderin
            </h1>
            <div class="row">
              <div class="col-12" style="height: 500px;">
                <div class="position-relative h-100">
                  <img src="/html1/img/images.jpg" width="100%" height="100%" />
                </div>
              </div>
            </div>
            <div
              class="row justify-content-center position-relative"
              style="margin-top: -200px; z-index: 1;"
            >
              <div class="col-lg-6">
                <div class="bg-white rounded p-5 m-5 mb-0">
                  <form>
                    <div class="row g-3">
                      <div class="col-12 col-sm-6">
                        <input
                          type="email"
                          class="form-control bg-light border-0"
                          v-model="receiverMail"
                          style="height: 55px;"
                        />
                      </div>

                      <div class="col-12">
                        <textarea
                          class="form-control bg-light border-0"
                          rows="5"
                          v-model="subject"
                          placeholder="Mesajınız"
                        ></textarea>
                      </div>
                      <div class="col-12">
                        <button
                          class="btn btn-success w-100 py-3"
                          type="submit"
                          @click="sendEmail"
                        >
                          Mail Gönder
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="bg-white rounded p-5 m-5 mb-0">
                  <form>
                    <div class="row g-3">
                      <div class="col-12 col-sm-6">
                        <input
                          class="form-control bg-light border-0"
                          placeholder="Adınız"
                          v-model="message.contactUserName"
                          style="height: 55px;"
                        />
                      </div>
                      <div class="col-12 col-sm-6">
                        <input
                          class="form-control bg-light border-0"
                          placeholder="Konu"
                          v-model="message.contactSubject"
                          style="height: 55px;"
                        />
                      </div>
                      <div class="col-12 col-sm-6">
                        <input
                          class="form-control bg-light border-0"
                          placeholder="Mesajınız"
                          v-model="message.contactMessage"
                          style="height: 55px;"
                        />
                      </div>

                      <div class="col-12">
                        <button
                          class="btn btn-success w-100 py-3"
                          type="submit"
                          @click="sendMessage"
                        >
                          Mesaj Gönder
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Contact End -->
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
      name: "",
      receiverMail: "emrem.yusuf1@gmail.com",
      subject: "",

      message: {
        contactUserName: null,
        contactSubject: null,
        contactMessage: null,
      },
    };
  },

  created() {
    this.fetchSingleComment();
  },
  methods: {
    onSubmit() {
      let form = {
        name: this.receiverMail,
        subject: this.subject,
      };
      console.log(form);
    },

    sendEmail() {
      const emailData = {
        name: this.name,
        receiverMail: this.receiverMail,
        subject: this.subject,
      };

      this.$http
        .post("https://localhost:44392/api/Contact/Index", emailData)
        .then((response) => {
          console.log("girdi");
          console.log("E-posta gönderildi:", response.body);
          // Burada gerekirse kullanıcıya bir bildirim gösterebilirsiniz.
        })
        .catch((error) => {
          console.error("E-posta gönderilemedi:", error);
          // Burada gerekirse kullanıcıya bir hata bildirimi gösterebilirsiniz.
        });
    },

    sendMessage() {
      const messageData = {
        contactUserName: this.message.contactUserName,
        contactSubject: this.message.contactSubject,
        contactMessage: this.message.contactMessage,
      };
      this.$http
        .post(
          "https://localhost:44392/api/ContactMessage/SendMessage",
          messageData
        )
        .then((response) => {
          console.log("girdi");
          console.log("E-posta gönderildi:", response.body);
          // Burada gerekirse kullanıcıya bir bildirim gösterebilirsiniz.
        })
        .catch((error) => {
          console.error("E-posta gönderilemedi:", error);
          // Burada gerekirse kullanıcıya bir hata bildirimi gösterebilirsiniz.
        });
    },
  },
};
</script>
