<template>
    <div class="container">
        <section id="reason-wrapper">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">{{list}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">a{{orderNum}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">{{test}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">{{a}}</div>
                </el-col>
            </el-row>
        </section>
        <section>语言包：{{$t('home.home_title')}}</section>
    </div>
</template>

<script>
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

    async fetch() {},
    async asyncData({ app, $axios }) {
        console.log(app);
        console.log(app.$api);
        return $axios
            .post(app.$api.marketApi.GetCarouselList, {
                PlatformType: 16
            })
            .then((res) => {
                return {
                    a: res.Rdata
                };
                console.log(res);
            });
    },
    created() {},
    mounted() {
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
#reason-wrapper {
    color: $primary-color;
}
</style>
