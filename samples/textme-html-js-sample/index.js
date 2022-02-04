const sendsms = () => {
  let _phoneNumber = document.getElementById("send-sms-number").value;
  let _smsMessage = document.getElementById("send-sms-message").value;

  if (!_phoneNumber || !_smsMessage) {
    alert("Phone Number or Message is empty");
    return;
  }

  smsclient
    .sendSMS("94111111111", "Hello World")
    .then((response) => {
      console.log(response);
      Swal.fire("Success!", "Successfully Sent!", "success");
    })
    .catch((err) => {
      console.log(err);
      Swal.fire("Error!", "Sending Failed", "error");
    });
};
