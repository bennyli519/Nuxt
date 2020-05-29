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
        console.log(app.$api.market);
        return $axios
            .post(app.$api.market + '/api/Shared/GetCarouselList', {
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
        console.log(this.$test);
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
