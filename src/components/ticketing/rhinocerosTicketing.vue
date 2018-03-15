<template>
<div>
      <!-- <b-modal title="Ticket Info" size="lg" ref="ticketInfoModal">
      </b-modal> -->
    <h1>Ticketing App For Rhinoceros In Love</h1>
    <qrcode-reader @decode="onDecode" @locate="onLocate"></qrcode-reader>
    <h1>Your Submission ID is: {{submissionID}}</h1>
        <!-- <b-button @click="getTicket(123123)">test</b-button> -->
        <h1>Name: {{name}}</h1>
        <h1>Show Time: {{showTime}}</h1>
        <h1>Number of Tix: {{numberOfTix}}</h1>
        <h1>Redeemed Ticket: {{redeemedTix}}</h1>
        <b-button @click="updateTicket(submissionID, redeemedTix)">Redeem</b-button>
</div>
</template>
<script>

export default {
  name: 'ticketing',
  data () {
    return {
      submissionID: '',
      name: '',
      showTime: '',
      numberOfTix: '',
      redeemedTix: ''
    }
  },
  components: {
  },
  methods: {
    onDecode (content) {
      this.submissionID = content
      this.getTicket(content)
    },
    onLocate () {},
    getTicket (submissionID) {
      var vm = this
      vm.$http.get('getTicket', {
        params: {
          submissionID: parseInt(submissionID)
        }
      })
        .then(function (response) {
          if (response) {
            console.log('success response')
            console.log(response.data[0])
            vm.name = response.data[0].name
            vm.showTime = response.data[0].showTime
            vm.numberOfTix = response.data[0].numberOfTix
            vm.redeemedTix = response.data[0].redeemedTix
            // vm.$refs.ticketInfoModal.show()
          }
        })
        .catch(function (error) {
          if (error.response) {
            console.log('error response')
            console.log(error.response)
          }
        })
    },
    updateTicket (submissionID, redeemedTix) {
      var vm = this
      console.log(vm.submissionID)
      console.log(redeemedTix)
      vm.$http.put('updateTicket', {
        submissionID: vm.submissionID,
        redeemedTix: parseInt(redeemedTix) + 1
      })
        .then(function (response) {
          if (response) {
            console.log('success response')
            console.log(response.data[0])
            vm.name = response.data[0].name
            vm.showTime = response.data[0].showTime
            vm.numberOfTix = response.data[0].numberOfTix
            vm.redeemedTix = response.data[0].redeemedTix
            // vm.$refs.ticketInfoModal.hide()
            // vm.$refs.ticketInfoModal.show()
          }
        })
        .catch(function (error) {
          if (error.response) {
            console.log('error response')
            console.log(error.response)
          }
        })
    }
  },
  beforeMount () {
  }
}
</script>

<style>
</style>
