class Alert {
  constructor (color, content) {
    this.alertElm = $(`
      <div role="alert" class="alert alert-${color} alert-dismissible" id="wandboxAlert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        ${content}
      </div>
    `.trim())
  }

  show () {
    $('#wandboxAlert').remove()
    this.alertElm.insertAfter('.form-horizontal')
  }
}

class InfoAlert extends Alert {
  constructor (message) {
    super('info', message)
  }
}

class ErrorAlert extends Alert {
  constructor (err) {
    super('warning', `<strong>Error!</strong> ${err.message}`)
  }
}

export { InfoAlert, ErrorAlert }