function submit(){
    var fname = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var fn = localStorage.setItem("fname",fname);
    var ln = localStorage.setItem('lname',lname);
    var em = localStorage.setItem('em', email);
    var pw = localStorage.setItem('password', password);
}

var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }


