<template>
    <div class="pager">     
        <a href="javascript:void(0);" v-show="showFirstPage" v-on:click="firstPage" >首页</a>
        <a href="javascript:void(0);" v-show="showPrevPage" v-on:click="prevPage" >上一页</a>
        <a href="javascript:void(0);" v-show="showNextPage" v-on:click="nextPage" >下一页</a>
        <a href="javascript:void(0);" v-show="showLastPage" v-on:click="lastPage" >尾页</a>
        
        <div>
            <select v-model="rowNum">
                <option selected="selected" value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
        </div>      
        <span>{{curPage}}/{{total}}</span>
        <div class="goto">
            <input type="text" v-model="gotoPage" />
            <a href="javascript:void(0);" v-on:click="gotoNextPage" >跳转</a>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$nextTick(() => { this.initPager() }) //需要延迟初始化
    },
    name: 'Pager',
    props:[
        "pageSize","curPage","total"
    ],
    data () {
        return {
            "gotoPage":"",
            showFirstPage:true,
            showLastPage:true,
            showPrevPage:true,
            showNextPage:true,
            rowNum:this.pageSize
        }
    },
    methods:{
        nextPage(){//下一页            
            this.$emit('setPage', this.curPage+ 1 ) //调用父组件方法
        },
        prevPage(){//上一页
            this.$emit('setPage', this.curPage- 1 ) //调用父组件方法
        },
        gotoNextPage(){//跳转页面
            if(this.gotoPage && /[1-9][0-9]*/.test(this.gotoPage)){             
                var pg = parseInt(this.gotoPage)
                //大于0 且小于等于总页数，
                if(pg > 0 && pg <= this.total){
                    this.$emit('setPage', pg ) //调用父组件方法
                }else{
                    this.gotoPage = ""
                    alert("请输入合理的页面")
                }
            }else{
                this.gotoPage = ""
                alert("请输入合理的页面")
            }
        },      
        firstPage(){
            this.$emit('setPage', 1 ) //调用父组件方法
        },
        lastPage(){
            this.$emit('setPage', this.total ) //调用父组件方法
        },
        rowNumChanged(){
            this.$emit('setRowNum', this.rowNum )
        },
        initPager(){
            this.showFirstPage = this.curPage> 1 
            this.showLastPage = this.curPage< this.total
            this.showPrevPage = this.curPage> 1
            this.showNextPage = this.curPage< this.total
            this.gotoPage = ""   
        }
    },
    watch:{
        'rowNum':'rowNumChanged', //监控rowNum
        'curPage': 'initPager',
        'pageSize' : "initPager"  
    }
}
</script>

<style scoped>
.pager>span,.pager>a,.pager>select,.pager>div{
    float: left;
    margin-left: 10px;
}

.pager{
    width: 600px;
    margin: 0 auto;
    margin-top: 10px;
    height: 48px;
    line-height: 48px;
    margin-bottom: 40px;
}

.pager input,.pager select{
    height:40px; 
    line-height:40px;
    outline:none; 
    border:1px solid #888; 
    padding:10px; 
    box-sizing:border-box;
}
.pager input{
    width: 50px;
}
.pager .goto{
    margin-left: 20px;
}
.pager a{
    color: black;
    font-weight: bold;
    text-decoration: none;
}
.pager a:hover{
    color: green;
}

</style>