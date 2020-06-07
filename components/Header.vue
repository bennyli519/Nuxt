<template>
    <div>
        <div class="header">
            <div class="container header-pan">
                <div class="h-brand">
                    <img
                        class="logo"
                        src="https://attach.likeshuo.com/Content/Images/other/logo/logo_07.png"
                        alt="成人英语培训-英语口语培训-在线英语学习-成人英语口语-英语培训机构"
                    />
                    <div class="desc">
                        <p>美联教育成员/美股上市公司</p>
                        <p>纳斯达克：METX</p>
                    </div>
                </div>
                <div class="h-btn-group">
                    <el-button type="primary" size="small">注册</el-button>
                    <el-button size="small">登陆</el-button>
                </div>
            </div>
        </div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#333d47"
            text-color="#fff"
            active-text-color="#fff"
            @select="handleSelect"
        >
            <div class="container flex">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">成人英语</el-menu-item>
                <el-menu-item index="3">青少英语</el-menu-item>
                <el-menu-item index="4">海外英语</el-menu-item>
            </div>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style lang='scss' scoped>
.header {
    // width: 100%;
    height: 70px;
    background-color: #fff;
    .header-pan {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        .h-brand {
            display: flex;
            .logo {
                width: auto;
                margin-right: 20px;
            }
            .desc {
                font-size: 12px;
                color: #666;
            }
        }
        .h-btn-group .el-button {
            width: 80px;
        }
    }
}
.el-menu-item {
    // float: left;
    width: 165px;
    text-align: center;
    height: 44px;
    line-height: 44px;
}
</style>
