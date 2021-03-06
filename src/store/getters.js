const getters = {
    sidebar: state => state.app.sidebar,
    language: state => state.app.language,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    token: state => state.user.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    introduction: state => state.user.introduction,
    status: state => state.user.status,
    setting: state => state.user.setting,
    errorLogs: state => state.errorLog.logs,
    // 获取config数据
    departments: state => state.config.departments,
    professionals: state => state.config.professionals,
    // user
    user: state => state.user.user
}
export default getters
