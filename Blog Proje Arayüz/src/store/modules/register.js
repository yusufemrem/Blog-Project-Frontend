import Vue from "vue";
const state = {
  products: [],
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {},
};

const mutations = {
  // ürün güncelleme
  updateProductList(state, product) {
    state.products.push(product);
  },
};

const actions = {
  // actions lar asenkron mutations lar senkron çalışır. actions lar ile dış servislere (veri tabanına) bağlanabiliriz ve
  //   dış servislerden dönen cevaba göre mutationsları çalıştırırız sonrasında mutationslarda gidip state i güncelliyordu
  initApp({ commit }) {
    // güncelleme üstteki mutationsa bağlı olarak yapar
    //Vue Resource İşlemleri...
  },
  saveRegister({ commit }, payload) {
    // kaydeder
    //Vue Resource İşlemleri... altta httpdenn önce $ işaretinin olmamasının sebebi js olduğu için vue de yazmalıyız
    Vue.http
      .post("https://localhost:44392/api/Register/Index", payload)
      .then((response) => {
        // then veri tabanından gelecek cevap için yazılır
        // ****** ürün listesinin güncellenmesi
        // body deki name alanı (key i kendimiz yazdık id de yazabilirdik)
        console.log(response); // product list üsttekini kastediyor
        //***** Alış , Satış , Bakiye Bilgilerinin güncellenmesi ****/
      });
  },
  sellProduct({ commit }, payload) {
    //Vue Resource İşlemleri...
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
