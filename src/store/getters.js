const getters = {
  language: state => state.app.language,
  size: state => state.app.size,
  token: state => state.user.token,
  name: state => state.user.name
}

export default getters
