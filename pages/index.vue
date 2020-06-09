<template>
    <div class="container">
        <div class="title-wrapper">
            <h3 class="title">为什么选择立刻说</h3>
            <h5 class="subtitle">5大核心优势，10余年专业教育背景，为你的英语学习保驾护航</h5>
        </div>
        <section id="reason-wrapper">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <img
                            src="https://attach.likeshuo.com/Content/Images/Marketing/Home/why1.png"
                            alt
                        />
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">a{{orderNum}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">{{list}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">{{a}}</div>
                </el-col>
            </el-row>
        </section>
        <el-button type="primary">sadfdsa</el-button>
        <!-- <nuxt-link to="/general">to general</nuxt-link> -->
        <n-link to="/general" no-prefetch>成人页面不预渲染</n-link>
        <section>语言包：{{$t('home.home_title')}}</section>
    </div>
</template>

<script>
import { indexApi } from '@/api/shared';
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {
            a: []
        };
    },
    computed: {
        ...mapState({
            test: 'test',
            orderNum: ({ order }) => order.orderNum,
            list: ({ order }) => order.list
        })
    },

    async fetch({ store, params }) {
        store.commit('order/add', {
            text: '321123'
        });
        // console.log(store);
        // console.log('========');
    },
    async asyncData({ app, $axios, params, error }) {
        // console.log(app);
        // console.log(app.$api);
        console.log(app.$api.marketApi.GetCarouselList);
        // let { data } = await axios.get(`https://my-api/posts/${params.id}`)
        return $axios
            .post(app.$api.marketApi.GetCarouselList, {
                PlatformType: 16
            })
            .then((res) => {
                return {
                    a: res.Rdata
                };
                // console.log(res);
            })
            .catch((e) => {
                error({ statusCode: 404, message: 'Post not found' });
            });
    },
    created() {
        // console.log(window);
        // console.log(this);
        if (process.client) {
            console.log('===asdfkljashdfkl');
            // this.cal();
        }
    },
    mounted() {
        console.log($nuxt);
        console.log(this.$t('home.home_title'));
        // console.log(this.$test);
        console.log(this.$api);
    },
    methods: {
        ...mapMutations({
            change: 'change',
            add: 'order/add',
            toggle: 'order/toggle'
        })
    }
};
</script>
<style lang="scss" scoped>
.title-wrapper {
    margin: 100px 0 50px;
    .title {
        margin: 0 0 30px 0;
        text-align: center;
        line-height: 1.3;
        font-size: 36px;
        font-weight: 500;
        color: $primary-color;
    }
    .subtitle {
        margin: -15px 0 50px 0;
        text-align: center;
        line-height: 22px;
        font-size: 16px;
        color: #666;
    }
}
#reason-wrapper {
    margin-bottom: 100px;
    color: $primary-color;
}
</style>
