
//task1
//a:

function cfunction() {
    var name = document.getElementById("name").value;
    document.getElementById("hello").innerHTML = "Thank you, " + name + " for registering in our website";
    wind()
}

//   window.open("./result.html","","_blank")



//b:
function myfunction() {
    document.getElementById("name").style.border = "solid 3px blue";
}

function x() {
    document.getElementById("name").style.border = "solid 1px black";
}


//d:
function vliadtion() {
    var name = document.getElementById("name");
    if (name.value.length < 3) {
        name.style.border = "3px red solid";
        document.getElementById("err").style.display = "block";
    }
    else {
        name.style.border = "solid 1px blue";
        document.getElementById("err").style.display = "none";
    }
}

//e
// function passwordconfirmation()
//  {
//     var password = document.getElementById("pswd1");
//     var confirm = document.getElementById("pswd2");
//     if (password.value != confirm.value) {

//         confirm.style.border = "3px red solid";
//         document.getElementById("err").style.display = "inline-block";

//     }
//     else {
//         confirm.style.border = "solid 1px blue";
//         document.getElementById("err").style.display = "none";

//     }

// }
function validateForm() {
    //collect form data in JavaScript variables
    var pw1 = document.getElementById("pswd1").value;
    var pw2 = document.getElementById("pswd2").value;
if(pw1 == "") {
    document.getElementById("err").innerHTML = "**Fill the password please!";
    return false;
  }

  //check empty confirm password field
  if(pw2 == "") {
    document.getElementById("err").innerHTML = "**Enter the password please!";
    return false;
  } 

  if(pw1 != pw2) {
    document.getElementById("err").innerHTML = "**Passwords are not same";
    return false;
  } 
  }



  function imgs() {
    var img = document.createElement('img');
    img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxNhrWO7CN-21NZfNNomARGzYP4MWA0eEiw&usqp=CAU' )
    document.getElementById('myImg').appendChild(img);
    let numb = document.getElementById("myImg").children.length;
    document.getElementById("demo").innerHTML ="The number of child nodes to the div = " + numb;
    alert(numb);

}