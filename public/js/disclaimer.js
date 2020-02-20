// Show demo disclaimer at launch

Swal.fire({
    title: '<strong>Disclaimer</strong>',
    icon: 'info',
    html:
      '<p>This is a demo version of Whitecoat and is not secured.</p>' +
      '<p>Please don\'t provide any personal information.</p>',
    showCloseButton: true
  })