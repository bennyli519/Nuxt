<!--
 * @Description: 商品
 * @Author: Benny
 * @Date: 2020-06-04 17:34:40
 * @LastEditTime: 2020-06-04 19:11:37
--> 
<template>
    <div>
        这是个商品
        <ul>
            <li v-for="item in list" :key="item.id">
                <div>{{item.name}}</div>
                <nuxt-link :to="'/product/detail/'+ item.id">商品详情</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    id: 1001,
                    name: '成人产品'
                },
                {
                    id: 1002,
                    name: '商务'
                }
            ]
        };
    },

    methods: {}
};
</script>

<style lang='less'>
</style>
