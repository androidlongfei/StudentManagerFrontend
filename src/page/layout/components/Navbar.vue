<template>
<el-menu class="navbar" mode="horizontal">
    <!-- 收起侧边栏组件 sidebar.opened=false 收起侧边栏-->
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <!-- 面包屑组件  首页/综合实例/表单-->
    <breadcrumb class="breadcrumb-container"></breadcrumb>

    <div class="right-menu">
        <!-- 显示错误log组件 -->
        <error-log class="errLog-container right-menu-item"></error-log>

        <!-- Tooltip 文字提示组件 -->
        <el-tooltip effect="dark" :content="$t('navbar.screenfull')" placement="bottom">
            <!-- 全屏组件 -->
            <screenfull class="screenfull right-menu-item"></screenfull>
        </el-tooltip>

        <!-- 语言选择组件 -->
        <lang-select class="international right-menu-item"></lang-select>

        <el-tooltip effect="dark" :content="$t('navbar.theme')" placement="bottom">
            <!-- 换肤组件 -->
            <theme-picker class="theme-switch right-menu-item"></theme-picker>
        </el-tooltip>

        <el-dropdown class="avatar-container right-menu-item" trigger="click">
            <div class="avatar-wrapper">
                <!-- 设置用户头像 -->
                <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
                <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
                <!-- 首页路由 -->
                <router-link to="/">
                    <el-dropdown-item>
                        {{$t('navbar.dashboard')}}
                    </el-dropdown-item>
                </router-link>
                <!-- 项目地址路由 -->
                <!-- <a target='_blank' href="https://github.com/androidlongfei/StudentManagerFrontend">
                    <el-dropdown-item>
                        {{$t('navbar.github')}}
                    </el-dropdown-item>
                </a> -->
                <!-- 退出 -->
                <el-dropdown-item divided>
                    <span @click="logout" style="display:block;">{{$t('navbar.logOut')}}</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from './Breadcrumb'
import Hamburger from './Hamburger'
import ErrorLog from './ErrorLog'
import Screenfull from './Screenfull'
import LangSelect from './LangSelect'
import ThemePicker from './ThemePicker'

export default {
    components: {
        Breadcrumb,
        Hamburger,
        ErrorLog,
        Screenfull,
        LangSelect,
        ThemePicker
    },
    computed: {
        ...mapGetters([
            'sidebar',
            'name',
            'avatar'
        ])
    },
    methods: {
        toggleSideBar() {
            console.log('Navbar component => toggleSideBar', this.$store.state.app.sidebar)
            this.$store.dispatch('toggleSideBar')
        },
        logout() {
            this.$store.dispatch('LogOut').then(() => {
                // location.reload() // In order to re-instantiate the vue-router object to avoid bugs
                this.$router.push({
                    name: 'login'
                })
            })
        }
    },

    mounted() {
        // console.log('Navbar component mounted =>', this.$store.state.app.sidebar);
        // this.initData()
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0 !important;
    .hamburger-container {
        line-height: 58px;
        height: 50px;
        float: left;
        padding: 0 10px;
    }
    .breadcrumb-container {
        float: left;
    }
    .errLog-container {
        display: inline-block;
        vertical-align: top;
    }
    .right-menu {
        float: right;
        height: 100%;
        &:focus {
            outline: none;
        }
        .right-menu-item {
            display: inline-block;
            margin: 0 8px;
        }
        .screenfull {
            height: 20px;
        }
        .international {
            vertical-align: top;
        }
        .theme-switch {
            vertical-align: 15px;
        }
        .avatar-container {
            height: 50px;
            margin-right: 30px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top: 5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
