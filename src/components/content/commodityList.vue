<template>
    <div class="commodityList">
        <van-row type="flex" justify="space-between" gutter="20">
            <van-col span="12" v-for="(list,index) in lists" :key="index">
                <div class="list">
                    <div class="imgBox">
                        <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
                    </div>
                    <p class="title">title</p>
                    <div class="price">
                        <span>￥</span>
                        <span>189</span>
                    </div>
                </div>
            </van-col>
        </van-row>
        <div>
            <no-More-Content noMoreContentShowText="没有更多内容了"></no-More-Content>
       </div>
    </div>
</template>

<script>
    import {Dialog,Tabs,Tab,Area,Row,Col,Icon,Image} from 'vant';
    import noMoreContent from '../../components/common/noMoreContent'
    export default {
        name: "commodityList",
        data(){
            return {
                lists:[
                    {
                        imgSrc:'',
                        title:'希语联名卡',
                        price:'189'
                    },
                    {
                        imgSrc:'',
                        title:'希语联名卡',
                        price:'189'
                    },
                    {
                        imgSrc:'',
                        title:'希语联名卡',
                        price:'189'
                    },
                    {
                        imgSrc:'',
                        title:'希语联名卡',
                        price:'189'
                    },
                    {
                        imgSrc:'',
                        title:'希语联名卡',
                        price:'189'
                    },
                ]
            }
        },
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Area.name]: Area,
            [Dialog.name]: Dialog,
            [Tabs.name]:Tabs,
            [Tab.name]:Tab,
            [Image.name]:Image,
            noMoreContent:noMoreContent
        },
    }
</script>

<style lang="less">
    @import "../../assets/style/mixin.less";
    html,body{
        height: 100%;
    }
    .commodityList{
        padding-top: 112px;
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 24px;

        font-size: 28px;
        color: @333;
        .van-row--flex{
            flex-wrap: wrap;
        }
        .van-col--12{
            margin-bottom: 20px;
        }
        .list{
            background-color:@white;
            border-radius:15px;
            box-shadow: 2px 2px 15px @ccc;
            .imgBox{
                width: 100%;
                height: 339px;
                border-radius:15px 15px 0px 0px;
                overflow: hidden;
            }
            .price,
            .title{
                text-align: left;
                padding-left: 20px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                line-height: 43px;
            }
            .price{
                color: @red;
                padding-bottom: 19px;
            }
            .title{
                margin-top: 20px;
            }
        }
    }
</style>
