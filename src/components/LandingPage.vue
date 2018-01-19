<template>
<div>
<chinese-drama-header></chinese-drama-header>
<chinese-drama-home></chinese-drama-home>
</div>
</template>
<script>
// import zhLang from '../assets/locales/zh/main.json'
// import enLang from '../assets/locales/en/main.json'
import chineseDramaHome from './Home'
import chineseDramaHeader from './Header'
export default {
  name: 'LandingPage',
  data () {
    return {
    }
  },
  components: {
    chineseDramaHome,
    chineseDramaHeader
  },
  methods: {
    changeLocaleToZh () {
      this.locale = 'zh'
      this.UpdateLocaleText()
    },
    changeLocaleToEn () {
      this.locale = 'en'
      this.UpdateLocaleText()
    },
    UpdateLocaleText () {
      var vm = this
      if (vm.locale === 'en') {
      } else if (vm.locale === 'zh') {
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
