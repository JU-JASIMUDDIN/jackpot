// =====================home part end =================
// =====================home part end =================
// dropdown part 
$(document).ready(function() {
  $(".question").on("click", function() {
    $(this).toggleClass("active");
    $(this).next().slideToggle(200);
  });
});
// dropdown part 
// countDown part 
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "dec 31, 2021 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
}());
// countDown part 

// mail part
var email = document.getElementById('email');
var eml_err = document.getElementById('eml_err');
var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function sub() {
     if (email.value == '') {
         eml_err.innerHTML = 'enter you correct e-mail';
        email.style.border = '1px solid red';
        email.focus();
        return false;  
    }
    else if (!regex.test(email.value)) {
         eml_err.innerHTML = 'enter you e-mail ';
        email.style.border = '1px solid red';
        email.focus();
        return false;  
    }
};
function errvalid() {
    if (email.value != '') {
        eml_err.innerHTML = '';
        email.style.border = '1px solid #3a0090';
    }
};
email.addEventListener('blur', errvalid);
// mail part
// =====================home part end =================
// =====================home part end =================

//======= about slick slider 
$('.about_filter').slick({
  dots:true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 'none',
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
});
//======== about slick slider

// =============signup part start ===============
// =============signup part ===============
var fname = document.getElementById('fname');
var fname_err = document.getElementById('fname_err');

var user_name = document.getElementById('user_name');
var use_err = document.getElementById('use_err');

var e_mail = document.getElementById('e_mail');
var e_err = document.getElementById('e_err');
var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var password = document.getElementById('password');
var pass_err = document.getElementById('pass_err');
var upper = /[A-Z]/;
var lower = /[a-z]/;
var number = /[0-9]/;
var spcl = /[0-9]/;


function sign() {
  if (fname.value == '') {
    fname_err.innerHTML = 'enter your Name';
    fname.style.border = '1px solid red';
    fname.focus();
    return false;
}
 else if (user_name.value == '') {
       use_err.innerHTML = 'enter you user name';
      user_name.style.border = '1px solid red';
      user_name.focus();
     return false;  
 }
 else if (e_mail.value == '') {
      e_err.innerHTML = 'enter you correct e-mail';
      e_mail.style.border = '1px solid red';
      e_mail.focus();
     return false;  
 }
 
 else if (!regex.test(e_mail.value)) {
      e_err.innerHTML = 'enter you correct e-mail';
     e_mail.style.border = '1px solid red';
     e_mail.focus();
     return false;  
 }
 else if (password.value == '') {
  pass_err.innerHTML = 'enter your password';
  password.style.border = '1px solid red';
  password.focus();
  return false;
}
else if (!upper.test(password.value) || !lower.test(password.value) || !number.test(password.value) || !spcl.test(password.value) ) {
  pass_err.innerHTML = 'Please enter your correct password';
  password.style.border = '1px solid red';
  password.focus();
  return false;
}
else if (password.value.length < 8) {
  pass_err.innerHTML = 'Please enter minimum 8 character';
  password.style.border = '1px solid red';
  password.focus();
  return false;
}  

}
function signvalid() {
  if (fname.value != '') {
      fname_err.innerHTML = '';
      fname.style.border= 'none';
      fname.style.borderBottom= '3px solid #fff';
      fname.style.borderRadius= '3px';
  }
  if (user_name.value != '') {
      use_err.innerHTML = '';
      // fname.style.border = '1px solid red';
  }
  
  if (e_mail.value != '') {
      e_err.innerHTML = '';
      // email.style.border = '2px solid rgb(198,255,0)';
  }
  if (password.value != '') {
      pass_err.innerHTML = '';
      // password.style.border = '2px solid rgb(198,255,0)';
  }
  
}

fname.addEventListener('blur', signvalid);
user_name.addEventListener('blur', signvalid);
e_mail.addEventListener('blur', signvalid);
password.addEventListener('blur', signvalid);
// =============signup part ===============
// =============signup part end ===============


//=========== login part =================
//=========== login part =================
var e_mail = document.getElementById('e_mail');
var e_err = document.getElementById('e_err');
var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var password = document.getElementById('password');
var pass_err = document.getElementById('pass_err');
var upper = /[A-Z]/;
var lower = /[a-z]/;
var number = /[0-9]/;
var spcl = /[0-9]/;

function log() {
 if (e_mail.value == '') {
      e_err.innerHTML = 'enter you correct e-mail';
      e_mail.style.border = '1px solid red';
      e_mail.focus();
     return false;  
 }
 
 else if (!regex.test(e_mail.value)) {
      e_err.innerHTML = 'enter you correct e-mail';
     e_mail.style.border = '1px solid red';
     e_mail.focus();
     return false;  
 }
 else if (password.value == '') {
  pass_err.innerHTML = 'enter your password';
  password.style.border = '1px solid red';
  password.focus();
  return false;
}
else if (!upper.test(password.value) || !lower.test(password.value) || !number.test(password.value) || !spcl.test(password.value) ) {
  pass_err.innerHTML = 'Please enter your correct password';
  password.style.border = '1px solid red';
  password.focus();
  return false;
}
else if (password.value.length < 8) {
  pass_err.innerHTML = 'Please enter minimum 8 character';
  password.style.border = '1px solid red';
  password.focus();
  return false;
}  

}
function logvalid() {
  if (e_mail.value != '') {
      e_err.innerHTML = '';
      // email.style.border = '2px solid rgb(198,255,0)';
  }
  if (password.value != '') {
      pass_err.innerHTML = '';
      // password.style.border = '2px solid rgb(198,255,0)';
  }
  
}
e_mail.addEventListener('blur', logvalid);
password.addEventListener('blur', logvalid);
//=========== login part =================
//=========== login part =================






