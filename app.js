const circle = document.querySelector('#circle');
const button = document.querySelector('#button');

circle.addEventListener('mouseenter', () => {
  if (!circle.classList.contains('hover')) {
    circle.classList.add('hover');
  }
});

circle.addEventListener('mouseleave', () => {
  if (circle.classList.contains('hover')) {
    circle.classList.remove('hover');
  }
});


button.addEventListener('mouseenter', () => {
    if (!button.classList.contains('hoverButton')) {
      button.classList.add('hoverButton');
    }
  });
  
  button.addEventListener('mouseleave', () => {
    if (button.classList.contains('hoverButton')) {
      button.classList.remove('hoverButton');
    }
  });

  function validateLogin(){
    var email = document.getElementById('email').value;
    var pswd = document.getElementById('pswd').value;
    const cb = document.querySelector('#check');
    
    let result = false;

    if(email != ""){
        if(pswd != ""){
            if(cb.checked){
                //alert('Are u sure want to Login?');
                alert("Login Successful");
                //window.location.assign("http://www.google.com/");
                result = true;
            }
            else{
                alert('Checkbox is not checked');
            }
        }
        else{
            alert('All fields are mandatory!');
        }
    }
    else{
        alert('All fields are mandatory!');
    }

    return result;
  }