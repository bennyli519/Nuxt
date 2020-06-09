<!--
 * @Description: 
 * @Author: Benny
 * @Date: 2020-05-19 17:26:07
 * @LastEditTime: 2020-06-09 20:37:45
--> 
<template>
    <div class="banner">
        <el-carousel v-if="carouselH" :height="carouselH">
            <el-carousel-item v-for="(item,index) in imgList" :key="index">
                <img class="img" :src="item.Image" alt />
            </el-carousel-item>
        </el-carousel>
        <div v-else style="height:500px;background:#eee"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgList: [
                // 'https://ossattachment.likeshuo.com/carousel/o_1e4sn4h3l1p1v14tpd2vgpm1nn4g.jpg?Expires=1621234226&OSSAccessKeyId=LTAIBZJCQccTiSLS&Signature=LbQEO5i99jFGSg87vPY365wLVnQ%3D',
                // 'https://ossattachment.likeshuo.com/carousel/o_1e7scg6gsg7h1i0rhm1176n1kmjb.jpg?Expires=1621232947&OSSAccessKeyId=LTAIBZJCQccTiSLS&Signature=0%2FUEl0uo9ZuPb2ebkstxIGkpkmc%3D'
            ],
            carouselH: ''
        };
    },
    watch: {
        $route: {
            handler: function(val, oldVal) {
                this.currentPlineType(val.path);
            },
            // 深度观察监听
            deep: true
        }
    },
    created() {
        // console.log(process);
        // console.log('==============我是banner');
        // if (process.client) {
        //     console.log('===asdfkljashdfkl');
        //     this.cal();
        // }
    },
    mounted() {
        // 如果要在mounted方法中启动它，请确保使用this.$nextTick来调用它，因为$loading可能无法立即使用。
        // this.$nextTick(() => {
        //     this.$nuxt.$loading.start();

        //     setTimeout(() => this.$nuxt.$loading.finish(), 500);
        // });
        console.log(this);

        window.onresize = () => {
            this.cal();
        };
        this.currentPlineType($nuxt.$route.path);
    },
    methods: {
        /**
         * @desc:判断当前所在产线(需加缓存，请求太频繁)
         * @param:{url} 当前路径
         */
        currentPlineType(url) {
            var PlineType = name;
            PlineType =
                url.indexOf('general') != -1
                    ? 1
                    : url.indexOf('junior') != -1
                    ? 2
                    : url.indexOf('oversea') != -1
                    ? 4
                    : null;
            console.log(url);
            console.log(PlineType);

            this.$axios
                .post(
                    this.$api.marketApi.GetCarouselList,
                    {
                        PlineType: PlineType,
                        PlatformType: 16
                    },
                    { isNoSign: true }
                )
                .then((res) => {
                    this.cal();
                    this.imgList = res.Rdata;
                });
        },
        cal() {
            let clientW = document.documentElement.clientWidth;
            let ratio = 3.8;
            this.carouselH = clientW / ratio + 'px';
        }
    }
};
</script>

<style lang="scss" scoped>
.banner {
    margin-bottom: 50px;
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
