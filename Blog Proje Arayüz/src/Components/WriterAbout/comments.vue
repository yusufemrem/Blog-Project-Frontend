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
    <div class="container py-5">
      <div class="row g-5">
        <div class="mb-5">
          <h4
            class="d-inline-block text-success text-uppercase border-bottom border-5 mb-4"
          >
            {{ filteredCommentsCount }} Yorum
          </h4>
          <div class="d-flex mb-4">
            <img
              src="/html1/img/user.jpg"
              class="img-fluid rounded-circle"
              style="width: 45px; height: 45px;"
            />
            <div
              v-for="(comment, index) in filteredComments"
              :key="comment.id"
              class="ps-3"
            >
              <h6 v-if="index === 0">
                <a href=""> {{ comment.commentUserName }} </a>

                <small
                  ><i v-if="index === 0">
                    {{ comment.commentDate | formatCommentDate }}
                  </i></small
                >
              </h6>
              <p v-if="index === 0">
                {{ comment.commentContent }}
              </p>
            </div>
          </div>
          <div>
            <br />
            <button
              class="btn btn-success w-100 py-3"
              type="submit"
              @click="showAllComments"
            >
              Tüm Yorumları Göster
            </button>
            <hr />
            <ul v-if="showComments">
              <li v-for="comment in filteredComments" :key="comment.id">
                <div class="d-flex mb-4">
                  <img
                    src="/html1/img/user.jpg"
                    class="img-fluid rounded-circle"
                    style="width: 45px; height: 45px;"
                  />
                  <div class="ps-3">
                    <h6>
                      <a>{{ comment.commentUserName }} a</a>
                      <small
                        ><i>{{
                          comment.commentDate | formatCommentDate
                        }}</i></small
                      >
                    </h6>
                    <p>{{ comment.commentContent }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-light rounded p-5">
          <h4
            class="d-inline-block text-success text-uppercase border-bottom border-5 border-white mb-4"
          >
            Yorum Yapın
          </h4>
          <form>
            <div class="row g-3">
              <div class="col-12 col-sm-6">
                <input
                  v-model="comment.commentUserName"
                  type="text"
                  class="form-control bg-white border-0"
                  placeholder="İsminiz"
                  style="height: 55px;"
                />
              </div>

              <div class="col-12">
                <input
                  v-model="comment.commentTitle"
                  type="text"
                  class="form-control bg-white border-0"
                  placeholder="Konu"
                  style="height: 55px;"
                />
              </div>
              <div class="col-12">
                <textarea
                  v-model="comment.commentContent"
                  class="form-control bg-white border-0"
                  rows="5"
                  placeholder="Yorum"
                ></textarea>
              </div>
              <div class="col-12">
                <button
                  @click="saveComment"
                  class="btn btn-success w-100 py-3"
                  type="submit"
                >
                  Yorum Yap
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";
import WriterAbout from "./writerAbout.vue";

Vue.use(VueResource);
console.log("aaaaa");
export default {
  data() {
    return {
      comment: {
        commentUserName: null,
        commentTitle: null,
        commentContent: null,
        blogID: this.$route.params.blogID,
      },
      getComments: [],
      getComments2: [],
      getComments3: [],
      getComments4: [],
      blog: [],
      byComments: [],
      comments: [],
      showComments: false,
    };
  },
  computed: {
    filteredComments() {
      const blogID = this.$route.params.blogID; // Şu anki blogun blogID'si
      return this.comments.filter((comment) => comment.blogID === blogID);
    },
    filteredCommentsCount() {
      return this.filteredComments.length;
    },
  },
  mounted() {
    this.fetchAllComments();
  },
  created() {
    this.fetchComments();
    // this.fetchComments2();
    // this.fetchComments3();
    // this.fetchComments4();
    this.fetchAllComments();

    console.log("sj");
    // const blogID = this.$route.params.blogID;
    // Vue Resource ile blogu almak
    const blogID = this.$route.params.blogID;
    console.log("blogID");
    this.$http
      .get(`https://localhost:44392/api/Home/getByBlog/${blogID}`)
      .then((response) => {
        this.blog = response.body;
      })
      .catch((error) => {
        console.error(error);
      });
    // this.$http

    //   .get(`https://localhost:44392/api/Comment/CommentListByBlog/${blogID}`)
    //   .then((response) => {
    //     this.comment = response.body;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // console.log("yusuf");
  },
  methods: {
    onSubmit() {
      let form = {
        commentUserName: this.comment.commentUserName,
        commentTitle: this.comment.commentTitle,
        commentContent: this.comment.commentContent,
      };
      console.log(form);
    },
    fetchComments() {
      const id = this.$route.params.blogID;
      this.$http
        .get(`https://localhost:44392/api/Comment/CommentListByBlog/${id}`)
        .then((response) => {
          this.getComments = response.data;
          console.log("girdis");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    // fetchComments2() {
    //   const id = 4;
    //   this.$http
    //     .get(`https://localhost:44392/api/Comment/CommentListByBlog/${id}`)
    //     .then((response) => {
    //       this.getComments2 = response.data;
    //       console.log("girdi");
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //     });
    // },
    // fetchComments3() {
    //   const id = 5;
    //   this.$http
    //     .get(`https://localhost:44392/api/Comment/CommentListByBlog/${id}`)
    //     .then((response) => {
    //       this.getComments3 = response.data;
    //       console.log("girdi");
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //     });
    // },
    // fetchComments4() {
    //   const id = 11;
    //   this.$http
    //     .get(`https://localhost:44392/api/Comment/CommentListByBlog/${id}`)
    //     .then((response) => {
    //       this.getComments4 = response.data;
    //       console.log("girdi");
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //     });
    // },
    fetchAllComments() {
      this.$http
        .get(`https://localhost:44392/api/Comment/CommentList/`)
        .then((response) => {
          this.comments = response.data;
          console.log("girdia");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    saveComment() {
      this.$store.dispatch("saveComment", this.comment);
      this.comment.commentUser = null;
      this.comment.commentContent = null;
    },
    showAllComments() {
      // "Tüm Yorumları Göster" düğmesine tıklanınca bu işlev çağrılır.
      // 'showComments' veri alanını tersine çevirerek yorumların görünüp görünmeyeceğini kontrol edin.
      this.showComments = !this.showComments;
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
  components: { WriterAbout },
};
</script>
