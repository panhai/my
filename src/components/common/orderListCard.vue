<template>
    <div>
        <div class="cardInfo">
            <van-card
                    :desc="order.price"
                    :thumb="order.imgUrl"
                    class="van-ellipsis"
            >
                <template slot="title">
                    <div class="van-ellipsis">{{order.title}}</div>
                </template>
            </van-card>
            <div class="orderInfo">
                <span>订单号：</span>
                <span class="orderNum">{{order.number}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { Card } from 'vant';
    export default {
        name: "orderListCard",
        props: ['order'],
        components: {
            [Card.name]:Card
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/style/mixin";
    .cardInfo{
        .border-radius(15px);
        padding:30px 20px 0;
        background:@white;
        .van-card{
            background:@white;
            font-size:17px;
            padding: 0;
            .van-card__header{
                text-align: left;
                .van-card__thumb{
                    width: 80px;
                    height: 80px;
                }
                .van-card__title{
                    line-height: 20px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .van-card__desc{
                    margin-top: 28px;
                    color: @red;
                }
            }
        }
        .orderInfo{
            height: 83px;
            line-height: 83px;
            font-size:28px;
            font-weight:400;
            color:@gray;
            border-top:1px solid @gray-lighter;
        }
    }
</style>