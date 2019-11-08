<template>
        <div class="playList pageContent" v-wechat-title="this.title">
            <div class="myOrder">
            <div class="list" v-for="(order , index) in orders" :key="index">
                <div v-if="order.state" @click-native="toOrderInfo(index)">
                    <div class="listItem" >
                        <p >六米科技【广东代理】</p>
                        <van-card
                            num="2"
                            title="英语听力理解模拟答题技巧"
                            price="199.00"
                            thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572611633398&di=c6334180a4a71eb62bfb74e2677ab33e&imgtype=0&src=http%3A%2F%2Fwww.szthks.com%2Flocalimg%2F687474703a2f2f6777312e616c6963646e2e636f6d2f62616f2f75706c6f616465642f69312f5431684647704666686458585858585858585f2121302d6974656d5f7069632e6a7067.jpg"

                        />
                        <div class="coverBottom">
                            <p>订单号：201910291156</p>
                            <button class="enterBtn" @click.native="deleteOrder(index)">删除订单</button>
                        </div>
                    </div>
                </div>
                <div v-else @click-native="toOrderPayment(index)">
                    <div class="listItem" >
                        <p>六米科技【广东代理】</p>
                        <van-card
                                num="3"
                                title="英语听力理解模拟答题技巧"
                                price="199.00"
                                thumb="http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/902397dda144ad343f52b102d4a20cf430ad8541.jpg"
                        />
                        <div class="coverBottom">
                            <p>订单号：201910291156</p>
                            <button class="enterBtn" @click.native="deleteOrder(index)">删除订单</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
</template>

<script>
    import {Row,Col,Card ,Image} from 'vant';
    export default {
        name: "orderList",
        data(){
            return{
                title:'我的订单',
                orders:[{state:true},{state:false}],//订单列表
            }
        },
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Card.name]:Card,
            [Image.name]:Image,
        },

        methods:{
            deleteOrder(index){
                //删除订单
                if(index != undefined && index != null){
                }
            },
            toOrderPayment(index){
                //订单支付
                if(index != undefined && index != null){
                }
            },
            toOrderInfo(index){
                //订单详情
                if(index != undefined && index != null){
                }
            },
        }
    }
</script>


<style lang="less" scoped>
    @import "../../../../assets/style/mixin";
    .myOrder{
        .list{
            background: @white;
            padding: 24px;
            .border-radius(15px);
            &:not(:first-child) {
                margin-top: 24px;
            }
        }
        .listItem {
            p {
                size: 12px;
                color: #333333;
                text-align: left;
            }

            .van-card{
                background: white;
                text-align: left;
                border-image-slice: fill;
                margin: unset;
                padding: unset;
                size: 24px;
                .van-icon__image{
                    border-radius: 4px;
                }

                .van-card__content {
                    .van-card__title {
                        padding: unset;
                        padding-left: 10px;
                        margin-top: 10px;
                        font-size: 16px;
                        height: 50px;
                        line-height: 40px;
                    }
                    .van-card__bottom{
                        padding-left: 10px;
                        font-size: 14px;
                        margin-top: 20px;
                    }
                }
            }

            .coverBottom {
                position: relative;

                p {
                    color: #999;
                    font-size: 26px;
                    text-align: left;
                    line-height: 52px;
                    margin-top: 20px;
                    height: 52px;
                }

                .enterBtn {
                    position: absolute;
                    right: 0;
                    top: 2px;
                    width: 160px;
                    height: 48px;
                    color: #999999;
                    font-size: 28px;
                    border-radius: 24px;
                    background: white;
                    border-color: #999999;
                    border-width: 1px;
                    border-style: solid;
                }
            }
        }
    }

</style>
