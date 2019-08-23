const path = {
  state: {
    pwd: "",
    pwd_segments: []
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
    }
  }
};
export default path;
