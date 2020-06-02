<template>
    <div class="layout">
        <lks-header />
        <Banner />
        <nuxt class="body" />
        <lks-footer />
    </div>
</template>
<script>
import LksHeader from '~/components/Header.vue';
import Banner from '~/components/Banner.vue';
import LksFooter from '~/components/Footer.vue';
export default {
    components: {
        LksHeader,
        Banner,
        LksFooter
    }
    // mounted() {
    //     let key = this.$route.name;
    //     document.title = this.$t(`home.${key}`);
    // }
};
</script>
<style lang="scss">
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
.layout {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .body {
        flex: 1;
    }
}
</style>
