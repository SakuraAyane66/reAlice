import MsgCompont from '@/pages/common/message/msg.vue'

const Msg = {};

Msg.install = (Vue) =>{
    const vue = Vue;
    const MsgClass = vue.extend(MsgCompont);
    const instance = new MsgClass();
    instance.$mount(document.createElement('div'));
    document.body.appendChild(instance.$el);

    let timer;

    const MsgMain= {
        show_message(txt,type){
            clearTimeout(timer);
            timer = setTimeout(()=>{
                instance.visible = false;
            },2000);
            instance.txt = txt;
            instance.type = type;
            instance.visible = true;
        },
        success(txt,type = 'success'){
            this.show_message(txt,type);
        },
        fail(txt,type = 'fail'){
            this.show_message(txt,type);
        }
    };
    vue.prototype.$message = MsgMain; 
}

export default Msg;
