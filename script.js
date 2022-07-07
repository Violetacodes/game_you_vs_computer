const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
let fruits = ["banana", "strawberry", "cherry", "apple", "peach", "pear"];
const answer = fruits[Math.floor(Math.random() * fruits.length)];

input.addEventListener("keypress", function(e){
   if (e.keyCode === 13){
       play();
   }
})

button.addEventListener("click", play);
 
function play(){
   const userNumber = document.querySelector("#guess").value;
   if (userNumber === answer) {
    Swal.fire({
        title: 'SUCCESS! YOU WIN!',
        imageUrl: 'https://images.unsplash.com/photo-1543316198-79bb2e49507f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2235&q=80',
        imageWidth: 600,
        imageHeight: 400,
      
      })
   }
   else {
           Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'Try again and choose another fruit!',
             })
      
   }
   
}


