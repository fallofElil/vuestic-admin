const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading
const users = state => state.users
const currentUser = state => state.currentUser
const categories = state => state.categories

export {
  config,
  palette,
  isLoading,
  users,
  currentUser,
  categories,
}
