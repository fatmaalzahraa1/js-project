
//task1


// function LocalStorage(){
//     var Email = document.getElementById("email").value
//     var Password = document.getElementById("pass").value

//     window.localStorage.setItem('Email', Email)
//     window.localStorage.setItem('Password', Password)

//     document.cookie = "Email=" + Email + ";Password=" + Password + ";expires=12/12/2022;";
// }
// function LocalStorage(){
//     var email = document.getElementById("email").value
//     var password = document.getElementById("pass").value

//     var email_localStorage = window.localStorage.getItem('Email')
//     console.log(email)
//     var password_localStorage = window.localStorage.getItem('Password')
//     document.cookie = "Email=" + email + ";Password=" + password + ";expires=12/9/2022;";


// }

//task2

// var todos=new XMLHttpRequest();
// todos.open('GET','https://dummyjson.com/todos');// estplish connection 0
// todos.send();
// todos.onreadystatechange=function() // calll over make change in state of request
// {
//     if(todos.readyState == 4 && todos.status == 200){
    
//         var  items = JSON.parse(todos.responseText).todos;
//         var request = document.getElementById("req")
//             for(var i=0; i< items.length ;i++){
//                 request.innerText = request.innerText + (items[i].id +""+ items[i].completed + "\n");
//         } 
//         }

//     }

