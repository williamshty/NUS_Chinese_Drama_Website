<template>
<div>
      <!-- <b-modal title="Ticket Info" size="lg" ref="ticketInfoModal">
      </b-modal> -->
    <h1>Ticketing App For Rhinoceros In Love</h1>
    <b-form-group>
      <b-form-input v-model="submissionID" type="number"></b-form-input>
    </b-form-group>
    <b-button size="lg" variant="warning" @click="getTicket(submissionID)">Find Ticket</b-button>
    <qrcode-reader @decode="onDecode" @locate="onLocate"></qrcode-reader>
    <h1>Your Submission ID is: {{submissionID}}</h1>
        <!-- <b-button @click="getTicket(123123)">test</b-button> -->
        <h1>Name: {{name}}</h1>
        <h1>Show Time: {{showTime}}</h1>
        <h1>Number of Tix: {{numberOfTix}}</h1>
        <h1>Redeemed Ticket: {{redeemedTix}}</h1>
        <b-button size="lg" variant="success" @click="updateTicket(submissionID, redeemedTix)">Redeem</b-button>
    <b-form-group style="margin-top:40px;">
      <b-form-input v-model="redeemedTix" type="number" placeholder="input -1 if wish to reset"></b-form-input>
    </b-form-group>
    <b-button size="lg" variant="warning" @click="updateTicket(submissionID,redeemedTix)">Reset</b-button>
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
      redeemedTix: '',
      submissionID_manual: ''
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
            alert('Cannot Find Ticket')
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
            alert('Redeemed Successfully')
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
