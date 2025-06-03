<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      nameError: '',
      emailError: '',
      passwordError: ''
    }
  },
  methods: {
    checkEmail() {
      if (this.email.includes('@','.')) {
        this.emailError = ''
        return true
      } else {
          this.emailError = 'Email должен содержать @ и .'
          return false
      }
    },
    checkPassword() {
      if (this.password.length >= 6) {
        this.passwordError = ''
        return true
      } else {
        this.passwordError = 'Пароль должен быть не меньше 6 символов'
        return false
      }
    },
    checkName() {
      if (this.name.length >= 3) {
        this.nameError = ''
        return true
      } else {
          this.nameError = 'Имя должно быть не меньше 3 символов'
          return false
      }
    }
  }
}
</script>

<template>
<div>
<input type="text" placeholder="Введите имя" v-model="name" @input="checkName">
<span v-if="nameError">{{ nameError }}</span>
</div>
<div>
<input type="email" placeholder="Введите email" v-model="email" @input="checkEmail">
<span v-if="emailError">{{ emailError }}</span>
</div>
<div>
<input type="password" placeholder="Введите пароль" v-model="password" @input="checkPassword">
<span v-if="passwordError">{{ passwordError }}</span>
</div>
</template>

<style scoped>

</style>