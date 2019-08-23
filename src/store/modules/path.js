const path = {
  state: {
    pwd: "",
    pwd_segments: [],
    custom_pwds: []
  },
  mutations: {
    SET_PWD(state, pwd) {
      state.pwd = pwd;
      state.pwd_segments = pwd.split("/").filter(i => i);
    },
    SET_PWD_SEGMENTS(state, pwd_segments) {
      state.pwd_segments = pwd_segments;
    },
    ADD_PWD_SEGMENT(state, pwd_segment) {
      state.pwd_segments.push(pwd_segment);
    },
    SET_CUSTOM_PWDS(state, custom_pwds) {
      state.custom_pwds = custom_pwds;
      localStorage.setItem("ele-cli-custom_pwd_list", JSON.stringify(custom_pwds));
    },
    ADD_CUSTOM_PWDS(state, custom_pwd) {
      state.custom_pwds.push(custom_pwd);
      localStorage.setItem("ele-cli-custom_pwd_list", JSON.stringify(state.custom_pwds));
    },
    DELETE_CUSTOM_PWDS(state, idx) {
      state.custom_pwds.splice(idx, 1);
      localStorage.setItem("ele-cli-custom_pwd_list", JSON.stringify(state.custom_pwds));
    }
  }
};
export default path;
