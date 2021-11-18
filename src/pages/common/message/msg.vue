<template>
    <div class="msg" v-show="visible">
        <div v-show="visible && type==='success'" class="success">{{txt}}</div>
        <div v-show="visible && type==='fail'" class="fail">{{txt}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            txt:'',
            type:'',
            visible: false,
        }
    }
}
</script>

<style scoped>
.msg{
    position: absolute;
    z-index: 10000;
    left: 50%;
    width: 300px;
    height: 100px;
    background: #00CCFF;
    font-size: 30px;
    animation: showMsg 2s linear;
}
.success{
    background: chartreuse;
}
.fail{
    background: crimson;
}
@keyframes showMsg
{
from {top:0px;}
to {top:200px;}
}

@-webkit-keyframes showMsg /*Safari and Chrome*/
{
from {top:0px;}
to {top:200px;}
}
</style>