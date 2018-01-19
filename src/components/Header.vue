<template>
  <div class="header">
           <div class="header__logo-box">
                <img src="https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/11825090_1483963691901143_6315355764220622427_n.jpg?oh=a8e91f6e9ad11367a8c70c521875a95b&oe=5AE51AD3" alt="Logo" class="header__logo">
            </div>
            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">{{headerMain}}</span>
                    <span class="heading-primary--sub">{{headerSub}}</span>
                </h1>
              <a href="#" class="btn btn--white btn--animated">{{headerBtn}}</a>
            </div>
  </div>
</template>

<script>
import zhLang from '../assets/locales/zh/main.json'
import enLang from '../assets/locales/en/main.json'
export default {
  name: 'Header',
  data () {
    return {
      headerMain: '',
      headerSub: '',
      headerBtn: '',
      locale: ''
    }
  },
  methods: {
    changeLocaleToZh () {
      this.locale = 'zh'
      this.UpdateLocaleTextHeader('zh')
    },
    changeLocaleToEn () {
      this.locale = 'en'
      this.UpdateLocaleTextHeader('en')
    },
    UpdateLocaleTextHeader (currentLocale) {
      var vm = this
      if (currentLocale === 'en') {
        vm.headerMain = enLang.header.headingMain
        vm.headerSub = enLang.header.headingSub
        vm.headerBtn = enLang.header.headingBtn
      } else if (currentLocale === 'zh') {
        vm.headerMain = zhLang.header.headingMain
        vm.headerSub = zhLang.header.headingSub
        vm.headerBtn = zhLang.header.headingBtn
      }
    }
  },
  beforeMount () {
    this.changeLocaleToZh()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
