<template>
    <div class="starRoom starPageContent">
        <section class="adContent">
            <van-swipe :autoplay="2000">
                <van-swipe-item>
                    <img  src="../../../../assets/images/guanggao.png" alt="" />
                </van-swipe-item>
                <van-swipe-item>
                    <img  @click="goToActiveCard" src="../../../../assets/images/agendaBg.png" alt="" />
                </van-swipe-item>
            </van-swipe>
        </section>
        <section class="playerInfo">
            <div class="playerInfoText">
                选手信息
            </div>
            <div class="changePlayer"  @click="showPickerFn">
                <span class="icon iconfont iconqiehuan"></span>
                <p class="changePlayerText">切换选手</p>
            </div>
        </section>
        <section class="playerCard">
            <div class="playerCardInfo">
                <div class="playerDes">
                    <p class="playerIntro playerSpace">
                        <span class="playerName">{{student.person&&student.person.name ? student.person.name : ''}}</span>
                        <span class="playerSex">{{student.person&&student.person.gender=='MALE'? '男' : '女'}}</span>
                    </p>
                    <p class="playerSchool playerSpace">{{student.school&&student.school.name ? student.school.name : ''}}</p>
                    <p class="playerGrade playerSpace">{{student.grade&&student.grade.name ? student.grade.name : ''}}</p>
                    <p class="playerClass">{{student.className}}</p>
                </div>
                <div class="playerHead">
                    <img v-if="student.person&&student.person.gender=='MALE'" src="../../../../assets/images/father.png" alt="">
                    <img v-else src="../../../../assets/images/headPortrait.png" alt="">
                </div>
            </div>
        </section>
        <section class="playerCheck">
            <div class="checkBtn" @click="start()">
                <span class="icon iconfont iconkaishiceping"></span>
                <div class="checkName">开始测评</div>
            </div>
        </section>
        <van-popup v-model="showPlayer" position="top">
            <van-picker
                    show-toolbar
                    :columns="studentList"
                    :default-index="student_index"
                    @cancel="showPlayer = false"
                    @confirm="playerConfirm"
            />
        </van-popup>
    </div>
</template>

<script>
    import { Picker,Popup,Dialog, Swipe, SwipeItem } from 'vant';
    import { getLoginInfo,getToken, getStoreStudent, setStoreStudent } from '../../../../js/user.js';
    import { getByUser, listByStudent, getMatch, getNum } from '../../../../service/api.js';
    export default {
        name: "index",
        data(){
            return{
                value: '',
                showPlayer: false,
                userInfo:{},
                students: [],
                studentList: [],
                student: {},
                student_index:0,
                gameSubject:[],

            }
        },
        created(){
            this.getUser()
        },
        components:{
            [Picker.name]:Picker,
            [Popup.name]:Popup,
            [Dialog.Component.name]: Dialog.Component,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
        },
        methods: {
            async getStudents(){
                let param={
                    user:this.userInfo.person
                };
                let students=await getByUser(param);
                this.students = students.data;
                for(let i=0;i<this.students.length;i++){
                    if(this.students[i]){
                        let str = this.students[i].person.name+'('+this.students[i].grade.name+')';
                        this.studentList.push(str);
                    }
                }
                let index = 0;
                if(localStorage.getItem("student_index")!=undefined){
                    index = parseInt(localStorage.getItem("student_index"));
                    this.student_index = index;
                }else{
                    localStorage.setItem("student_index",index);
                }
                this.student = getStoreStudent();
                this.getGame(this.student);
            },
            getUser(){
                let token = getToken();
                let user = getLoginInfo();
                if(token == undefined || token == null || user == undefined || user == null){
                    let corpId = '';
                    let route = this.$route;
                    if(route.query.corpId){
                        corpId=route.query.corpId
                    }
                    this.$router.push({
                        path:'/login',
                        query:{
                            corpId: corpId
                        }
                    })
                }else{
                    this.userInfo = user;
                    this.getStudents();
                }
            },
            playerConfirm(value,index) {
                this.student_index = index;
                this.student = this.students[index];
                localStorage.setItem("student_index",index);
                this.showPlayer = false;
                setStoreStudent(this.student);
                this.getGame(this.student);
            },
            async getGame(student){
                let data = {
                    student:student.person.identifier
                }
                localStorage.setItem("student", JSON.stringify(student));
                let subject = await listByStudent(data);
                let gameSubjectList = subject.data;
                for (let i = 0; i < subject.data.length; i++) {
                    let matchData = await getMatch({gameSubject: gameSubjectList[i].identifier});
                    this.$set(gameSubjectList[i], "matchs", matchData.data)
                    let applicantNum = await getNum({gameSubjectId: gameSubjectList[i].identifier});
                    this.$set(gameSubjectList[i], "applicantNum", applicantNum.data)
                }
                if(gameSubjectList.length>0){
                    this.gameSubject = gameSubjectList[0];
                }
            },
            showPickerFn(){
                this.showPlayer = true;
            },
            start(){
                if(this.gameSubject.identifier == undefined){
                    Dialog.alert({
                        message: '选手没有报名的赛事'
                    })
                }else{
                    let id = this.gameSubject.identifier;
                    this.$router.push({
                        path:'/gameInstroduce',
                        query:{
                            match: id,
                            type:'star'
                        }
                    })
                }
            },
            goToActiveCard(){
                    this.$router.push({path:'/activateCard'})
            },
        }
    }
</script>

<style scoped lang="less">
    @import "../../../../assets/style/mixin";
.starRoom{
    img{
        width: 100%;
        height: 100%;
    }
    .icon{
        font-size: 48px;
    }
    .adContent{
        height: 400px;
        img{
            height: 400px;
        }
    }
    .playerInfo{
        padding: 0 25px;
        .fj();
        height: 149px;
        align-items: center;
        .playerInfoText{
            font-size: 32px;
        }
        .changePlayer{
            color: @gray-light;
            .changePlayerText{
                font-size:20px;
            }
        }

    }
    .playerCard{
        padding: 0 24px;

        text-align: left;
        .playerCardInfo{
            padding: 40px;
            border:1px solid @white-dark;
            .box-shadow(2px,2px,2px,@white-dark);
            .fj();
            .playerDes{
                font-size:24px;
                font-weight:400;
                color:@gray-light;
                .playerIntro{
                    .playerName{
                        font-size:30px;
                        color: @gray;
                    }
                    .playerSex{
                        font-size:20px;
                        color:@defaultColor;
                        padding-left: 10px;
                    }
                }
                .playerSpace{
                    padding-bottom: 20px;
                }

            }
            .playerHead{
                .wh(100px,100px)
            }
        }
    }
    .playerCheck{
        padding-top: 82px;
        .checkBtn{
            .wh(120px,120px);
            border:2px solid #04AEF2;
            border-radius:50%;
            color: #04AEF2;
            margin: 0 auto;
            /*padding: 2px 2px 0;*/
            .checkName{
                font-size:20px;

            }
        }
    }

}
</style>
