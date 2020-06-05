<template>
    <div class="layout">
        <div class="toper">
            <div class="container flex toper-layout">
                <div class="toper-left">
                    <span class="text-666">Service LIne</span>
                    <span class="text-blue">400-777-8828</span>
                </div>

                <ul class="toper-right text-666">
                    <li class="text-blue">
                        <a role="button">中文</a>
                    </li>
                    <li>
                        <a role="button">EN</a>
                    </li>
                    <li>
                        <a role="button">Corporate</a>
                    </li>
                    <li>
                        <a role="button">CEPRAK</a>
                    </li>
                </ul>
            </div>
        </div>
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
    props: ['error'],
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
.layout {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .toper {
        display: flex;
        padding: 8px 0 6px 0;
        line-height: 22px;
        font-size: 12px;
        background-color: #eee;
        border-bottom: solid 1px #ddd;
        .toper-layout {
            justify-content: space-between;
        }
        .toper-left {
        }
        .toper-right {
            display: flex;
            & > li {
                position: relative;
            }
            & > li:not(:last-child)::before {
                content: '';
                position: absolute;
                right: -2px;
                top: 50%;
                transform: translateY(-50%);
                height: 50%;
                width: 1px;
                background-color: #ddd;
            }
            & > li a {
                padding: 0 10px;
                color: #666;
                &:hover {
                    color: #009887;
                }
            }

            // text-align: right;
        }
    }
    .body {
        flex: 1;
    }
}
</style>
