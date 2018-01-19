<template>
  <section class="section-about">
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary heading-secondary__no-clip">
                     {{homeTitle}}
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <h3 class="heading-tertiary u-margin-bottom-small">{{paragraphHeading1}}</h3>
                    <p class="paragraph">{{paragraphContent1}}</p>
                    <h3 class="heading-tertiary u-margin-bottom-small">{{paragraphHeading2}}</h3>
                    <p class="paragraph">{{paragraphContent1}}</p>

                    <a href="#" class="btn-text">{{learnMoreText}} &rarr;</a>
                </div>
                <div class="col-1-of-2">
                    <div class="composition">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/13920928_1615289712101873_6923089942376527612_n.jpg?oh=76d02a986d8e0fd1effe32982aea7c81&oe=5AF8C047" alt="Photo 1" class="composition__photo composition__photo--p1">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/12743494_1553318304965681_5307511584089130432_n.jpg?oh=2881b57a22aae7b338df8f3474970003&oe=5AEAB5DD" alt="Photo 2" class="composition__photo composition__photo--p2">
                        <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/11949450_1492975014333344_7005943100576150655_n.jpg?oh=38322ee983b978e86e7e7acf2244c9e2&oe=5AF1ABF9" alt="Photo 3" class="composition__photo composition__photo--p3">
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
import zhLang from '../assets/locales/zh/main.json'
import enLang from '../assets/locales/en/main.json'
export default {
  name: 'Home',
  data () {
    return {
      homeTitle: '',
      paragraphHeading1: '',
      paragraphContent1: '',
      paragraphHeading2: '',
      paragraphContent2: '',
      learnMoreText: '',
      locale: ''
    }
  },
  methods: {
    changeLocaleToZh () {
      this.locale = 'zh'
      this.UpdateLocaleTextHome('zh')
    },
    changeLocaleToEn () {
      this.locale = 'en'
      this.UpdateLocaleTextHome('en')
    },
    UpdateLocaleTextHome (currentLocale) {
      var vm = this
      if (currentLocale === 'en') {
        vm.homeTitle = enLang.home.homeTitle
        vm.paragraphHeading1 = enLang.home.paragraphHeading1
        vm.paragraphContent1 = enLang.home.paragraphContent1
        vm.paragraphHeading2 = enLang.home.paragraphHeading2
        vm.paragraphContent2 = enLang.home.paragraphContent2
        vm.learnMoreText = enLang.home.learnMoreText
      } else if (currentLocale === 'zh') {
        vm.homeTitle = zhLang.home.homeTitle
        vm.paragraphHeading1 = zhLang.home.paragraphHeading1
        vm.paragraphContent1 = zhLang.home.paragraphContent1
        vm.paragraphHeading2 = zhLang.home.paragraphHeading2
        vm.paragraphContent2 = zhLang.home.paragraphContent2
        vm.learnMoreText = zhLang.home.learnMoreText
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
