<template>
    <div class="playList pageContent" v-wechat-title="this.title">
        <div class="list" v-for="(right , index) in rights" :key="index">
            <div class="listItem">
                <p>2019-11-04</p>
                <div class="coverBottom">
                    <p>
                        希语报名卷
                    </p>
                    <div class="useBtn" @click.native="useRight(index)">
                        立即使用
                    </div>
                </div>
                <p>本报名卷只能在希语盛典英语风采大会杭州赛事区报名时使用，线上专用</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {Row,Col}from 'vant';
    export default {
        name: "rightList",
        data(){
            return {
                title: "我的权益",
                rights: [{content:"1"}, {content:"2"}],//权益列表
            }
        },
        components:{
            [Row.name]:Row,
            [Col.name]:Col,
        },
        methods:{
            useRight(index){
                if(index!=undefined && index!=null){
                    this.dialogPrompt('玩命开发中~')
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../../../assets/style/mixin";
    .list{
        background: @white;
        padding: 24px;
        .border-radius(15px);
        &:not(:first-child) {
            margin-top: 24px;
        }
        .listItem{
            p {
                size: 8px;
                color: #333333;
                text-align: left;
            }
            .coverBottom {
                position: relative;
                border-bottom: 1px #333 dotted;
                margin-bottom: 10px;
                p {
                    color: @blue;
                    font-size: 30px;
                    text-align: left;
                    line-height: 60px;
                    margin-top: 20px;
                    margin-bottom: 20px;
                    height: 60px;
                }

                .useBtn {
                    position: absolute;
                    right: 0;
                    top: 2px;
                    width: 160px;
                    height: 60px;
                    color: @white;
                    font-size: 30px;
                    line-height: 60px;
                    border-radius: 5px;
                    background: @blue;
                }
            }
        }
    }

</style>
