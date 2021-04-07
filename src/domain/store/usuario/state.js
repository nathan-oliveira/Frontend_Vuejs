export default {
  login: localStorage.getItem("token") ? true : false,
  usuario: {
    username: "",
    email: "",
    password: undefined,
    realm: "",
  },
};
