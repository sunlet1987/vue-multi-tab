import store from '@/Store/index'

const RouterMethods = Object.create(null)




RouterMethods.install = function (Vue, options) {
  Vue.prototype.$tab = {
    // 设置当前显示的 tab name
    setIndex(data) {
      store.commit('SetCurrentTabIndex', data)
    },
    // 打开新的 tab  项
    open (item) {
      store.commit('OpenedTabsPush', item)
    },
    // 删除 tab 项
    close (menuId) {
      store.commit('OpenedTabsRemove',menuId)
    },
    // 跳转
    push(item,payload) {
      let newItem = {}
      if(typeof item === 'string') {
        // 参数是字符串，并且带查询参数
        if(item.indexOf('?') > -1) {
          let qIndex = item.indexOf('?')
          let componentName = item.substr(0,qIndex)
          let querySring = item.substr(qIndex + 1)
          let queryArray = querySring.split('&')
          let query = Object.create(null)
          queryArray.map(i => {
            let eIndex = i.indexOf('=')
            let qKey = i.substr(0,eIndex)
            let qValue = i.substr(eIndex + 1)
            query[qKey] = qValue
          })
          newItem.path = componentName
          newItem.query = query
        }
        // 参数是字符串，不带查询参数
        else {
          newItem.path = item
        }
      }
      // 参数是 JSON 对象
      else {
        newItem = item
      }
      // 如果有第二个参数，则会覆盖原本的 query
      if(payload) newItem.query = Object.assign(newItem.query,payload)
      store.commit('OpenedSubTabsPush',newItem)
    },
    // 后退
    back(num) {
      store.commit('OpenedSubTabsBack',num)
    },
    // 替换
    replace(item) {
      store.commit('OpenedSubTabsReplace',item)
    },
    // 关闭所有 tab
    closeAll () {
      store.commit('CloseAllTabs')
    },
    // 关闭其他标签
    closeOthers () {
      store.commit('CloseOthersTabs')
    },
    // 根据浏览器的 url 回显 tab
    reShow() {
      store.commit('reShowHash')
    },
    // 获取当前组件的查询参数
    query () {
      // console.log('methods',store.getters.GetQuery)
      return store.getters.GetQuery
    }
  }
}

export default RouterMethods