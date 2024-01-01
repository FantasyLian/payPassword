<template>
  <div class="common-pswd-pop" v-if="showPswdPop">
    <div class="common-pswd-cont animate__animated animate__zoomIn">
      <div class="common-pswd-title">
        <span>支付密码</span>
        <i class="icon iconfont icon-close" @click="handleClose"></i>
      </div>
      <div class="common-pswd-text">
        <div class="code-list">
          <input v-for="(item, index) in pswdNums" :key="index" :ref="`refold${index}`" class="code-item"
            v-model="item.value" type="password" oninput="value=value.replace(/[^\d]/g,'')" @input="pswdOnInput(index)"
            @keyup.delete="pswdOnDelete(index)" maxlength="1" />
        </div>
        <div class="forget-pswd">
          <a @click="handleForgetPswd()">忘记密码?</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue"
const pswdNums = reactive([
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" }
])
const payPassword = ref(0)
const pswdValid = ref(false)
const showPswdPop = ref(false)

const pswdOnInput = (index) => {
  // index < 5 ，如果是第6格，不触发光标移动至下一个输入框。
  if (pswdNums[index].value && index < 5) {
    ["refold" + (index + 1)][0].focus()
  }
  let nums = 0
  pswdNums.forEach(item => {
    if (item.value !== "") nums++
  })
  if (nums === 6) {
    payPassword.value = handleArray2Number(this.pswdNums).join("")
  } else {
    pswdValid.value = false
  }
}

const handleClose = () => {
  showPswdPop.value = false
}

// 处理数组，把对象的value拼成索引数组
const handleArray2Number = (arr) => {
  const newArr = []
  arr[0] &&
    arr.forEach(item => {
      newArr.push(item.value)
    })
  return newArr
}

defineExpose({
  showPswdPop
})
</script>
<style lang="less" scoped>
.common-pswd-pop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
  width: 100%;
  height: 100%;
  background: rgba(63, 64, 65, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .common-pswd-cont {
    position: absolute;
    width: 80%;
    background: #fff;
    border-radius: 8px;

    .common-pswd-title {
      margin: 15px 0;
      padding: 0 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;

      span {
        font-size: 15px;
        color: #333;
        font-weight: bold;
      }

      i {
        position: absolute;
        right: 12px;
        font-size: 22px;
        color: #666;
        top: 10px;
      }
    }

    .common-pswd-text {
      padding: 0 15px;
      font-size: 13px;
      color: #666;
      text-align: justify;

      .code-list {
        // height: 50px;
        display: flex;
        margin: 20px auto;

        .code-item {
          margin-right: 3%;
          width: 17%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 20px;
          color: #333;
          border-radius: 3px;
          border: 1px solid #979797;
          outline: none;

          &:last-child {
            margin-right: 0;
          }
        }
      }

      .forget-pswd {
        margin: 15px;
        text-align: center;
      }

      p {
        margin-bottom: 15px;
      }
    }
  }
}
</style>
