<template>
    <div class="login-container">
        <div class="login-content">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="user" prop="user">
                    <Input v-model="formValidate.user" placeholder="Enter your user"></Input>
                </FormItem>
                <FormItem label="password" prop="password">
                    <Input v-model="formValidate.password" placeholder="Enter your password"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')" style="margin-left:-80px;">Submit</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Login',
        data(){
            return {
               formValidate: {
                    user: '',
                    password: ''
                },
                ruleValidate: {
                    user: [
                        { required: true, message: 'The user cannot be empty', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'password cannot be empty', trigger: 'blur' },
                        { type: 'string', message: 'Incorrect password format', trigger: 'blur' }
                    ]
                }  
            }
        },
        methods:{
              handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                        this.$router.push('/home');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .login-container{
        width: 100%;
        height: 100%;
        background:url('../../assets/imgs/login/back-image.png');
        background-size:100% 100%;
        padding: 20px;
        .login-content{
            width: 300px;
            height: 200px;
            margin: 0 auto;
            background: white;
            margin-bottom: 30px;
            border-radius: 10px;
            padding: 20px;
            // 水平垂直居中
            position: absolute;
            left: 50%;
            margin-left: -150px;
            top: 50%;
            margin-top: -100px;
        
        }
    }
</style>


