<template>
<div>
  <div class="title">
      <div class="title__locale-group">
             <a href="#" class="btn btn--white btn--animated btn--locale" @click="changeLocaleToZh()">中文</a>
             <a href="#" class="btn btn--white btn--animated btn--locale" @click="changeLocaleToEn()">En</a>
      </div>
    </div>
<chineseDramaHeader ref="pageHeader"></chineseDramaHeader>
<chineseDramaHome ref="pageHome"></chineseDramaHome>
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
      locale: ''
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
      this.$refs.pageHeader.UpdateLocaleTextHeader(this.locale)
      this.$refs.pageHome.UpdateLocaleTextHome(this.locale)
    }
  },
  beforeMount () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
