export const rules = {
  name: [
    {
      required: true,
      message: "请输入用户账号",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,10}/,
      message: "用户名必须是5-10个字母或者数字",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "请输入用户密码",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,10}/,
      message: "用户密码必须是5-10个字母或者数字",
      trigger: "blur"
    }
  ]
}
