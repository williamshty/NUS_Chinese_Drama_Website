<template>
  <section class="section-about">
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    Exciting tours for adveuturous people
                </h2>
            </div>

            <div class="row">
                <div class="col-1-of-2">
                    <h3 class="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature
                    </h3>
                    <p class="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum deserunt ad tempore accusamus porro incidunt velit
                        quasi magnam minus illum commodi placeat nulla, expedita, eaque dolores, suscipit cumque eligendi?
                    </p>
                    <h3 class="heading-tertiary u-margin-bottom-small">Live adventures like you never had before
                    </h3>
                    <p class="paragraph">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita a numquam quam fuga, quis modi consequuntur eos neque
                    </p>

                    <a href="#" class="btn-text">Learn more &rarr;</a>
                </div>
                <div class="col-1-of-2">
                    <div class="composition">
                        <!-- <img src="img/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
                        <img src="img/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
                        <img src="img/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3"> -->
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
// import zhLang from '../assets/locales/zh/main.json'
// import enLang from '../assets/locales/en/main.json'
export default {
  name: 'Home',
  data () {
    return {
    }
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
