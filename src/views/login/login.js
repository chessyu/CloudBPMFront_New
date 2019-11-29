
import { Component, Vue } from "vue-property-decorator"
import * as login from "@/api/login" 
import '@/config/index'
import { Getter, Action } from "vuex-class"

@Component({})
export default class Login extends Vue {
  
  formInline = {
    user: '',
    password: ''
  }
  ruleInline = {
    user: [
        { required: true, message: '账号为必填项', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '密码为必填项', trigger: 'blur' },
        { type: 'string', min: 6, message: '密码过于敷衍', trigger: 'blur' }
    ]
  }
  remember = true

  created(){
    let _this = this;
    document.onkeydown = function(event:any){
      var e = event || window.event || arguments.callee.caller.arguments[0];
      if(e && e.keyCode == 13){
        _this.singIn();
      }
    }
  }

  singIn(){
    (this.$refs['formInline'] as any).validate(async (valid :boolean) => {
      if (valid) {
        try{
          let data : any = await login.SingIn(this.formInline);
          if(data.code == 200){
            if(this.remember){
              localStorage.setItem("userName",this.formInline.user);
              localStorage.setItem("passWord",this.formInline.password);
            }
            this.$router.push({name:'layout'})
            this.$Message.success(data.msg);
          }else{
            this.$Message.error('账号或密码不正确!');
          }
        }catch(e){
          new Error('登录请求报错:' + e.message)
        }
      }
    })
  }
    
}
