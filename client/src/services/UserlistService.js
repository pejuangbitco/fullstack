import Api from '@/services/Api'

export default {
  save (credentials) {
    return Api().post('save', credentials)
  },
  update (credentials) {
    return Api().post('update', credentials)
  },
  getAll () {
    return Api().get('users')
  }
}
