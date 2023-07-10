<template>
  <div class="login-box">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <h2>后台管理系统</h2>
      <el-form-item label="username" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Submit</el-button
        >
        <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import { LoginData } from "../type/login";
import type { FormInstance } from "element-plus";
import { login } from "../request/api";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const data = reactive(new LoginData());
    const rules = {
      username: [
        {
          required: true,
          message: "Please input Activity username",
          trigger: "blur",
        },
        {
          min: 3,
          max: 5,
          message: "Length should be 3 to 5",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "Please input Activity password",
          trigger: "blur",
        },
        {
          min: 3,
          max: 10,
          message: "Length should be 3 to 10",
          trigger: "blur",
        },
      ],
    };
    //登录
    const ruleFormRef = ref<FormInstance>();
    const router = useRouter();
    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          login(data.ruleForm).then((res) => {
            //console.log(res);
            //保存token
            localStorage.setItem("token", res.data.token);
            //跳转页面 首页
            router.push("/");
          });
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };

    //重置
    const resetForm = () => {
      data.ruleForm.username = "";
      data.ruleForm.password = "";
    };

    return { ...toRefs(data), rules, resetForm, ruleFormRef, submitForm };
  },
});
</script>

<style lang='scss' scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: url("../assets/dj.jpg");
  padding: 1px;
  text-align: center;
}
.demo-ruleForm {
  width: 500px;
  margin: 200px auto;
}
h2 {
  margin-bottom: 10px;
}
</style>