<!--
 * @Description: 
 * @Author: Benny
 * @Date: 2020-05-19 17:26:07
 * @LastEditTime: 2020-06-02 14:28:00
--> 
<template>
    <div class="banner">
        <el-carousel :height="carouselH">
            <el-carousel-item v-for="item in imgList" :key="item">
                <img class="img" :src="item" alt />
                adsfasdfsdafads
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgList: [
                'https://ossattachment.likeshuo.com/carousel/o_1e4sn4h3l1p1v14tpd2vgpm1nn4g.jpg?Expires=1621234226&OSSAccessKeyId=LTAIBZJCQccTiSLS&Signature=LbQEO5i99jFGSg87vPY365wLVnQ%3D',
                'https://ossattachment.likeshuo.com/carousel/o_1e7scg6gsg7h1i0rhm1176n1kmjb.jpg?Expires=1621232947&OSSAccessKeyId=LTAIBZJCQccTiSLS&Signature=0%2FUEl0uo9ZuPb2ebkstxIGkpkmc%3D'
            ],
            carouselH: ''
        };
    },
    created() {
        if (process.client) {
            this.cal();
        }
    },
    created() {},
    mounted() {
        // 如果要在mounted方法中启动它，请确保使用this.$nextTick来调用它，因为$loading可能无法立即使用。
        // this.$nextTick(() => {
        //     this.$nuxt.$loading.start();

        //     setTimeout(() => this.$nuxt.$loading.finish(), 500);
        // });
        console.log(this);
        // this.$http
        //     .post(
        //         '/api/Shared/GetCarouselList',
        //         {
        //             PlatformType: 16
        //         },
        //         { isNoSign: true }
        //     )
        //     .then((res) => {
        //         console.log(res);
        //         return {
        //             a: res.Rdata
        //         };
        //         console.log(res);
        //     });
        this.$axios
            .post(
                '/api/Shared/GetCarouselList',
                {
                    PlatformType: 16
                },
                { isNoSign: true }
            )
            .then((res) => {
                console.log(res);
                return {
                    a: res.Rdata
                };
                console.log(res);
            });
        window.onresize = () => {
            this.cal();
        };
    },
    methods: {
        cal() {
            let clientW = document.documentElement.clientWidth;
            let ratio = 3.8;
            this.carouselH = clientW / ratio + 'px';
            console.log(this.carouselH);
            console.log(document.documentElement.clientWidth);
        }
    }
};
</script>

<style lang="scss" scoped>
.banner {
    width: 100%;
    // cursor: url('https://ossattachment.likeshuo.com/user/c4e6360f-705d-478a-bf9a-ed5a8284bbe7.png?Expires=1621582843&OSSAccessKeyId=LTAI4G544FLXAcfF3TpYngdx&Signature=lyejc2rMbgrWWp4lmqsSIlF%2F3X0%3D&x-oss-process=style%2Fuser-small'),
    //     auto;
    .img {
        width: 100%;
        height: 100%;
    }
    // &:hover {
    //     cursor: auto;
    //     cursor: ur l('./test.png'), auto;
    //     // cursor: url('test.png'), auto;
    // }
}
</style>
