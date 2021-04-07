import api from '@/domain/services/api';

export default {
  async login(context, payload) {
    try {
      const resp = await api.login(payload.usuario, payload.login)

      if (resp.statusText === "OK" && payload.login) {
        localStorage.setItem("token", `Bearer ${resp.data.token}`)

        context.commit("UPDATE_LOGIN", true);
        context.commit("UPDATE_USUARIO", {
          username: resp.data.username,
          email: resp.data.email,
          password: resp.data.password,
          realm: resp.data.realm
        })

        payload.router.push({ name: "home" });
      } else {
        payload.router.push({ name: "login" });
      }
    } catch (err) {
      context.dispatch("setError", [err.response.data.error])
    }
  },
  logout(context, payload) {
    context.commit("UPDATE_LOGIN", false);
    context.commit("UPDATE_USUARIO", {
      username: "",
      email: "",
      password: undefined,
      realm: "",
    });

    window.localStorage.removeItem("token");
    payload.router.push({ name: "login" });
  },
};
