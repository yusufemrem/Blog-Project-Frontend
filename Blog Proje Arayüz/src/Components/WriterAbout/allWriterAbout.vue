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
                  <a href="about.html" class="nav-item nav-link active"
                    >Yazar Hakkında</a
                  >
                </router-link>
                <router-link to="/src/Components/Contact/contactMail.vue">
                  <a href="service.html" class="nav-item nav-link ">İletişim</a>
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
      <div class="container-fluid py-3">
        <div class="container">
          <div class="row gx-5">
            <div v-for="getWriterr in allWriter" class="col-lg-7">
              <br />
              <div class="mb-3">
                <h5
                  class="d-inline-block text-success text-uppercase border-bottom border-5"
                >
                  Yazar Hakkında
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

      <!-- Search Start -->
      <div class="container-fluid bg-success my-5 py-5">
        <div class="container py-5">
          <div class="text-center mx-auto mb-5" style="max-width: 500px;">
            <h5
              class="d-inline-block text-white text-uppercase border-bottom border-5"
            >
              Find A Doctor
            </h5>
            <h1 class="display-4 mb-4">Find A Healthcare Professionals</h1>
            <h5 class="text-white fw-normal"></h5>
          </div>
          <div class="mx-auto" style="width: 100%; max-width: 600px;">
            <div class="input-group">
              <select
                class="form-select border-success w-25"
                style="height: 60px;"
              >
                <option selected>Department</option>
                <option value="1">Department 1</option>
                <option value="2">Department 2</option>
                <option value="3">Department 3</option>
              </select>
              <input
                type="text"
                class="form-control border-success w-50"
                placeholder="Keyword"
              />
              <button class="btn btn-dark border-0 w-25">Search</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Search End -->

      <!-- Team Start -->
      <div class="container-fluid py-5">
        <div class="container">
          <div class="text-center mx-auto mb-5" style="max-width: 500px;">
            <h5
              class="d-inline-block text-success text-uppercase border-bottom border-5"
            >
              Our Doctors
            </h5>
            <h1 class="display-4">Qualified Healthcare Professionals</h1>
          </div>
          <div class="owl-carousel team-carousel position-relative">
            <div class="team-item">
              <div class="row g-0 bg-light rounded overflow-hidden">
                <div class="col-12 col-sm-5 h-100">
                  <img
                    class="img-fluid h-100"
                    src="/html1/img/team-1.jpg"
                    style="object-fit: cover;"
                  />
                </div>
                <div class="col-12 col-sm-7 h-100 d-flex flex-column">
                  <div class="mt-auto p-4">
                    <h3>Doctor Name</h3>
                    <h6 class="fw-normal fst-italic text-success mb-4">
                      Cardiology Specialist
                    </h6>
                    <p class="m-0">
                      Dolor lorem eos dolor duo eirmod sea. Dolor sit magna
                      rebum clita rebum dolor
                    </p>
                  </div>
                  <div class="d-flex mt-auto border-top p-4">
                    <a
                      class="btn btn-lg btn-success btn-lg-square rounded-circle me-3"
                      href="#"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <a
                      class="btn btn-lg btn-success btn-lg-square rounded-circle me-3"
                      href="#"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a
                      class="btn btn-lg btn-success btn-lg-square rounded-circle"
                      href="#"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="team-item">
              <div class="row g-0 bg-light rounded overflow-hidden">
                <div class="col-12 col-sm-5 h-100">
                  <img
                    class="img-fluid h-100"
                    src="/html1/img/team-2.jpg"
                    style="object-fit: cover;"
                  />
                </div>
                <div class="col-12 col-sm-7 h-100 d-flex flex-column">
                  <div class="mt-auto p-4">
                    <h3>Doctor Name</h3>
                    <h6 class="fw-normal fst-italic text-success mb-4">
                      Cardiology Specialist
                    </h6>
                    <p class="m-0">
                      Dolor lorem eos dolor duo eirmod sea. Dolor sit magna
                      rebum clita rebum dolor
                    </p>
                  </div>
                  <div class="d-flex mt-auto border-top p-4">
                    <a
                      class="btn btn-lg btn-success btn-lg-square rounded-circle me-3"
                      href="#"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <a
                      class="btn btn-lg btn-success btn-lg-square rounded-circle me-3"
                      href="#"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a
                      class="btn btn-lg btn-success btn-lg-square rounded-circle"
                      href="#"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="team-item">
              <div class="row g-0 bg-light rounded overflow-hidden">
                <div class="col-12 col-sm-5 h-100">
                  <img
                    class="img-fluid h-100"
                    src="/html1/img/team-3.jpg"
                    style="object-fit: cover;"
                  />
                </div>
                <div class="col-12 col-sm-7 h-100 d-flex flex-column">
                  <div class="mt-auto p-4">
                    <h3>Doctor Name</h3>
                    <h6 class="fw-normal fst-italic text-success mb-4">
                      Cardiology Specialist
                    </h6>
                    <p class="m-0">
                      Dolor lorem eos dolor duo eirmod sea. Dolor sit magna
                      rebum clita rebum dolor
                    </p>
                  </div>
                  <div class="d-flex mt-auto border-top p-4">
                    <a
                      class="btn btn-lg btn-success btn-lg-square rounded-circle me-3"
                      href="#"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <a
                      class="btn btn-lg btn-success btn-lg-square rounded-circle me-3"
                      href="#"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a
                      class="btn btn-lg btn-success btn-lg-square rounded-circle"
                      href="#"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Team End -->

      <!-- Footer Start -->
      <div class="container-fluid bg-dark text-light mt-5 py-5">
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h4
                class="d-inline-block text-success text-uppercase border-bottom border-5 border-secondary mb-4"
              >
                Get In Touch
              </h4>
              <p class="mb-4">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor
              </p>
              <p class="mb-2">
                <i class="fa fa-map-marker-alt text-success me-3"></i>123
                Street, New York, USA
              </p>
              <p class="mb-2">
                <i class="fa fa-envelope text-success me-3"></i>info@example.com
              </p>
              <p class="mb-0">
                <i class="fa fa-phone-alt text-success me-3"></i>+012 345 67890
              </p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4
                class="d-inline-block text-success text-uppercase border-bottom border-5 border-secondary mb-4"
              >
                Quick Links
              </h4>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-light mb-2" href="#"
                  ><i class="fa fa-angle-right me-2"></i>Home</a
                >
                <a class="text-light mb-2" href="#"
                  ><i class="fa fa-angle-right me-2"></i>About Us</a
                >
                <a class="text-light mb-2" href="#"
                  ><i class="fa fa-angle-right me-2"></i>Our Services</a
                >
                <a class="text-light mb-2" href="#"
                  ><i class="fa fa-angle-right me-2"></i>Meet The Team</a
                >
                <a class="text-light mb-2" href="#"
                  ><i class="fa fa-angle-right me-2"></i>Latest Blog</a
                >
                <a class="text-light" href="#"
                  ><i class="fa fa-angle-right me-2"></i>Contact Us</a
                >
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4
                class="d-inline-block text-success text-uppercase border-bottom border-5 border-secondary mb-4"
              >
                Popular Links
              </h4>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-light mb-2" href="#"
                  ><i class="fa fa-angle-right me-2"></i>Home</a
                >
                <a class="text-light mb-2" href="#"
                  ><i class="fa fa-angle-right me-2"></i>About Us</a
                >
                <a class="text-light mb-2" href="#"
                  ><i class="fa fa-angle-right me-2"></i>Our Services</a
                >
                <a class="text-light mb-2" href="#"
                  ><i class="fa fa-angle-right me-2"></i>Meet The Team</a
                >
                <a class="text-light mb-2" href="#"
                  ><i class="fa fa-angle-right me-2"></i>Latest Blog</a
                >
                <a class="text-light" href="#"
                  ><i class="fa fa-angle-right me-2"></i>Contact Us</a
                >
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4
                class="d-inline-block text-success text-uppercase border-bottom border-5 border-secondary mb-4"
              >
                Newsletter
              </h4>
              <form action="">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control p-3 border-0"
                    placeholder="Your Email Address"
                  />
                  <button class="btn btn-success">Sign Up</button>
                </div>
              </form>
              <h6 class="text-success text-uppercase mt-4 mb-3">Follow Us</h6>
              <div class="d-flex">
                <a
                  class="btn btn-lg btn-success btn-lg-square rounded-circle me-2"
                  href="#"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a
                  class="btn btn-lg btn-success btn-lg-square rounded-circle me-2"
                  href="#"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a
                  class="btn btn-lg btn-success btn-lg-square rounded-circle me-2"
                  href="#"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
                <a
                  class="btn btn-lg btn-success btn-lg-square rounded-circle"
                  href="#"
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-fluid bg-dark text-light border-top border-secondary py-4"
      >
        <div class="container">
          <div class="row g-5">
            <div class="col-md-6 text-center text-md-start">
              <p class="mb-md-0">
                &copy; <a class="text-success" href="#">Your Site Name</a>. All
                Rights Reserved.
              </p>
            </div>
            <div class="col-md-6 text-center text-md-end">
              <p class="mb-0">
                Designed by
                <a class="text-success" href="https://htmlcodex.com"
                  >HTML Codex</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer End -->

      <!-- Back to Top -->
      <a href="#" class="btn btn-lg btn-success btn-lg-square back-to-top"
        ><i class="bi bi-arrow-up"></i
      ></a>
    </body>
  </html>
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
      allWriter: [],
      blog: [],
    };
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
<style>
#blogContentt {
  font-size: 25px; /* Yazı boyutunu istediğiniz piksel değeriyle değiştirin */
}
#contact {
  font-size: 10px;
}
</style>
