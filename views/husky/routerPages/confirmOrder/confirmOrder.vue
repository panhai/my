<template>
    <div class="confirmOrder pageContent">
        <section>
            <order-list-card
                    v-for="(item, index) in orderList"
                    :key="index"
                    :order="item"
            ></order-list-card>
        </section>
        <section class="orderWay">
            <van-cell title="支付方式" is-link :value="payType" @click="orderWay"/>
        </section>
        <section class="orderTip">
            <span>请确认订单，并在24小时内完成支付！</span>
        </section>
        <section class="btnContent">
            <control-btn :btnActive="true" btnText="立即购买" @click.native="buyNow"></control-btn>
        </section>
        <van-popup
                v-model="showOrderWay"
                round
                position="bottom"
                :style="{ height: '50%' }"
        >
            <div class="popTitle">
                支付方式
                <i class="icon iconfont iconguanbi" @click="closePop"></i>
            </div>
            <div class="popContent">
                <div :class="{active: payType === '在线支付'}" @click="switchPayType('在线支付')">在线支付</div>
                <div :class="{active: payType === '权益抵扣'}" @click="switchPayType('权益抵扣')">权益抵扣</div>
            </div>
            <div class="popConfirm">
                <div class="confirmBtn">
                    确定
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import { Cell, Popup } from 'vant';
    import ControlBtn from "../../../../components/common/controlBtn";
    import OrderListCard from "../../../../components/common/orderListCard";

    export default {
        name: "confirmOrder",
        data() {
            return {
                showOrderWay: false,
                payType: "在线支付",
                orderList: [
                    {
                        price: "￥198.00",
                        number: 201910291156,
                        title: "英语听力理解模拟房间爱打定金罚",
                        imgUrl: "https://img.yzcdn.cn/vant/t-thirt.jpg"
                    }
                ],
            }
        },
        components:{
            [Cell.name]:Cell,
            [ControlBtn.name]:ControlBtn,
            [OrderListCard.name]:OrderListCard,
            [Popup.name]:Popup,
        },
        methods:{
            orderWay(){
                this.showOrderWay=true
            },
            buyNow(){


            },
            closePop() {
                this.showOrderWay = false;
            },
            switchPayType(state) {
                if (state === this.payType) return;
                this.payType = this.payType === "在线支付" ? "权益抵扣" : "在线支付";
            }
        }
    }
</script>

<style lang="less">
    @import "../../../../assets/style/mixin";
    .confirmOrder{
        font-size:34px;
        text-align: left;
        font-family:PingFang SC;

        .orderWay{
            margin: 20px 0;
            .border-radius(15px);
            .van-cell{
                padding: 10px 10px;
            }
        }
        .orderTip{
            color:@gray-light;
            font-size:24px;
            padding:0 20px;
        }
        .btnContent{
            width: 100%;
            padding:13px 0;
            position: fixed;
            left: 0;
            bottom: 0;
        }
        .van-popup {
            padding: 0 24px;
            .popTitle {
                height: 2.67em;
                font-size:0.88em;
                font-weight:400;
                line-height: 2.67em;
                color: @defaultTitleTextColor;
                border-bottom: 1px solid @lightBorderColor;
                i {
                    float: right;
                    font-size: 24px;
                    color: @gray-light;
                }
            }
            .popContent {
                display: flex;
                flex-wrap: wrap;
                padding-top: 1em;
                div {
                    font-size: 0.7em;
                    width: 6.4em;
                    height: 2.08em;
                    margin: 0 0.8em 0.8em 0;
                    line-height: 2.08em;
                    text-align: center;
                    border-radius: 1em;
                    background: @lightBorderColor;
                    border: 1px solid @lightBorderColor;
                    color: @defaultTitleTextColor;
                }
                .active {
                    color: @defaultColor;
                    border-color: @defaultColor;
                    background: @defaultColor-light;
                }
            }
            .popConfirm {
                display: flex;
                justify-content: center;
                align-items: center;
                position: fixed;
                bottom: 0;
                left: 0;
                height: 2.9em;
                width: 100%;
                border-top: 1px solid @lightBorderColor;
                .confirmBtn {
                    width: 72%;
                    height: 2.13em;
                    line-height: 2.13em;
                    background: @defaultColor;
                    border-radius:36px;
                    text-align: center;
                    color: @white;
                }
            }
        }
    }

</style>
