<template>
    <div class="curriculumDetail">
        <div class="good">
            <div class="cover">
                <img :style="{opacity:start}" src="../../../../assets/images/curriculum2.png" alt="cover">
                <div v-if="showVideo" class="video">
                    <video controls autoplay="autoplay" controlslist="nodownload">
                        <source :src="resourceLocation" type='video/mpeg' />
                        <source :src="resourceLocation" type='video/webm' />
                        <source :src="resourceLocation" type='video/ogg' />
                    </video>
                </div>
            </div>

            <div v-if="!purchased" class="price">
                <span>¥</span>198.00
            </div>
            <div class="title">
                英语听力理解模拟答题技巧大全
            </div>
        </div>
        <div class="detail">
            <div class="detailTitle">
                <div class="detailTil">
                    <div class="divide"></div>
                    <span>目录</span>
                </div>
            </div>
            <van-cell-group>
                <template v-for="(item,index) in lessonName">
                    <van-cell :value="item" @click="playVideo(index)" :key="index"/>
                </template>
            </van-cell-group>
        </div>
        <div class="detail">
            <div class="detailTitle">
                <div class="detailTil">
                    <div class="divide"></div>
                    <span>课程详情</span>
                </div>
            </div>
            <div class="detailImage">
                <img src="../../../../assets/images/gameSub.png" alt="detailImage">
            </div>
            <div v-if="!purchased" class="detailText">
                课程是指学校学生所应学习的学科总和及其进程与安排。课程是对教育的目标、教学内容、教学活动方式的规划和设计，是教学计划、教学大纲等诸多方面实施过程的总和。广义的课程是指学校为实现培养目标而选择的教育内容及其进程的总和，它包括学校老师所教授的各门学科和有目的、有计划的教育活动。狭义的课程是指某一门学科。
            </div>
        </div>
        <div v-if="!purchased" class="buyBtn">
            <p>立即购买</p>
        </div>
    </div>
</template>

<script>
    import { Cell, CellGroup } from 'vant';
    export default {
        name: "curriculumDetail",
        data(){
            return{
                purchased:true,
                start:1,
                showVideo:false,
                resourceLocation:'',
                lessonName:[
                    '第一章：听力理解题型介绍',
                    '第二章：听力理解答题技巧',
                    '第三章：听力理解模拟练习',
                    '第四章：听力理解题型介绍',
                    '第五章：听力理解答题技巧'
                ],
                resources:[
                    'http://data.husky.etmcn.com/1/class/2019/11/07/0912560_8685.mp4',
                    'http://data.husky.etmcn.com/1/class/2019/11/06/1352460_4701.mp4',
                    'http://data.husky.etmcn.com/1/class/2019/11/06/1402560_3923.mp4',
                    'http://data.husky.etmcn.com/1/class/2019/11/05/1804200_1041.mp4',
                    'http://data.husky.etmcn.com/1/class/2019/11/05/1810480_2556.mp4'
                ]
          }
        },
        components:{
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup
        },
        created(){

        },
        methods:{
            playVideo(index){
                this.start = 0.5;
                if(this.showVideo == true){
                    this.showVideo = false;
                }
                let _this = this;
                setTimeout(function(){
                    _this.showVideo = true;
                    _this.resourceLocation = _this.resources[index];
                },50)
            }
        }
    }
</script>

<style lang="less">
    @import "../../../../assets/style/mixin";
    .curriculumDetail {
        padding-bottom: 98px;
        font-family:PingFang SC;
        .good {
            padding-bottom: 14px;
            .cover {
                width: 750px;
                height: 750px;
                .wh(750px,750px);
                position: relative;
                .video{
                    position: absolute;
                    top: 175px;
                    left: 0;
                    .wh(100%,400px);
                    background: #fff;
                    video{
                        .wh(100%,100%);
                    }
                }
            }
            .price {
                height: 56px;
                margin-top: 12px;
                line-height: 56px;
                color: @priceTextColor;
                font-size: 36px;
                padding-left: 25px;
                text-align: left;
                span {
                    font-size: 24px;
                }
            }
            .title {
                height: 56px;
                line-height: 56px;
                font-size: 34px;
                font-weight: bold;
                color: @defaultTitleTextColor;
                text-align: left;
                padding-left: 26px;
            }
        }
        .detail {
            margin-top: 21px;
            padding: 10px 25px;
            .van-cell{
                padding: 10px 0;
                text-align: left;
            }
            .detailTitle {
                padding: 13px 0;
                .detailTil {
                    display: flex;
                    height: 30px;
                    line-height: 30px;
                    font-size: 30px;
                    font-weight: 400;
                    color: @defaultTitleTextColor;
                    .divide {
                        width: 3px;
                        height: 30px;
                        margin-right: 9px;
                        background: @defaultColor;
                    }
                }
            }
            .detailImage {
                width: 703px;
                height: 416px;
                margin-top: 10px;
                padding-top: 16px;
                border-top: 1px solid @lightBorderColor;
            }
            .detailText {
                font-size:28px;
                color: @defaultTitleTextColor;
                text-indent: 2em;
                line-height: 42px;
                text-align: left;
                padding: 11px 0 12px;
            }
        }
        .buyBtn {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            width: 750px;
            height: 98px;
            bottom: 0;
            left: 0;
            border-top: 1px solid @lightBorderColor;
            background-color: @white;
            p {
                width:539px;
                height:72px;
                background-color: @defaultColor;
                color: @white;
                font-size:34px;
                font-weight: bold;
                line-height: 72px;
                border-radius:36px;
            }
        }
    }

</style>
