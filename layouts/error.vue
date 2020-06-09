<template>
    <div class="container pan">
        <h1 v-if="error.statusCode === 404">
            <img
                class="img"
                src="https://attach.likeshuo.com/Content/Images/Marketing/Tiper/404.png"
                alt
            />
            <p>页面不存在</p>
        </h1>
        <h1 v-else>应用发生错误异常</h1>
        <nuxt-link to="/">回到首页</nuxt-link>
    </div>
</template>
<style lang="scss" scoped>
.pan {
    margin: 30px 0;
    width: 100%;
    text-align: center;
    p {
        font-size: 20px;
        color: #999;
    }
}
.img {
    height: 300px;
    width: 300px;
}
</style>
<script>
export default {
    props: ['error']
};
</script>