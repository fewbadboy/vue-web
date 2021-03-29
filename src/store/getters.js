const getters = {
  language: state => state.app.language,
  size: state => state.app.size,
  token: state => state.user.token,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles
}

export default getters
