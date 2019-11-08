<template>
    <div class="submitPage" v-wechat-title="this.title">
        <div class="backImg">
            <img src="../../assets/images/submitTask.png"/>
        </div>
        <div>
            <control-btn :btnActive="true" btnText="继续考核" @click.native.prevent="continueTask()"></control-btn>
            <control-btn :btnActive="false" btnText="退出考核" class="quitBtn" @click.native.prevent="quit()"></control-btn>
            <div class="quitTxt">退出将会为你自动提交哦~</div>
        </div>
    </div>
</template>

<script>
    import ControlBtn from "../common/controlBtn";

    export default {
        data(){
            return {
                title: '提示'
            }
        },
        components :{
            [ControlBtn.name]:ControlBtn,
        },
        created(){

        },
        methods: {
            continueTask(){
                this.$emit("continueTask");
            },
            quit(){
                this.$emit("quit");
            }
        }
    }
</script>

<style lang="less">
    @import "../../assets/style/mixin";
    .submitPage{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: #fff;
        z-index: 1111;
        .backImg{
            margin: 110px auto;
            width: 591px;
        }
        .quitBtn{
            margin-top: 24px;
            .controlBtnInner{
                color: @defaultColor;
                background: @white;
                border: 2px solid @defaultColor;
            }
        }
        .quitTxt{
            margin-top: 16px;
            font-size: 24px;
            color: #04aef2;

        }
    }
</style>