// 
const username =document.querySelector("#username");
const email =document.querySelector("#email");
const password =document.querySelector("#password");
const confirmPassword= document.querySelector("#confirm-password");
const form =document.querySelector("#form");

const showerror =(input , message)=>{
  let parentElement = input.parentElement ;
  parentElement.classList="form-control error"
  const small =parentElement.querySelector("small") 
  const errorIcon= parentElement.querySelectorAll("i")[1] ;
  const successIcon = parentElement.querySelectorAll("i")[0]
  errorIcon.style="visibility:visible";
  successIcon.style="visibility:hidden"
  small.innerText = message ;
  
  

}
const showSuccess =(input)=>{
  let parentElement = input.parentElement ;
  parentElement.classList="form-control success"
  const errorIcon= parentElement.querySelectorAll("i")[1] ;
  const successIcon = parentElement.querySelectorAll("i")[0]
  errorIcon.style="visibility:hidden";
  successIcon.style="visibility:visible"
  
  

}

// checking empty input

const checkEmpty = (elements)=>{
 elements.forEach((item)=>{
   if(item.value === ""){
    showerror(item,"input reqiured")
   }else{
    showSuccess(item);
   }
    
 })
}
// checking email

const checkEmail = (email)=>{
  const reg =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
  if (reg.test(email.value)){
   showSuccess(email)
  }else{
   showerror(email,"invalid email")
  }
 }

 // checking password :
const checkPassword = (input, maxi, mini)=>{
 if(input.value.length > maxi){
  showerror(password , "must be less than 10")
 }else if (input.value.length < mini){
 showerror(password,"must be greater than 6")
 }else{
  showSuccess(password)
 }
}

const checkConfirmPassword = (input, maxi, mini)=>{
  if(input.value.length > maxi){
   showerror(confirmPassword , "must be less than 10")
  }else if (input.value.length < mini){
  showerror(confirmPassword,"must be greater than 6")
  }else{
   showSuccess(confirmPassword)
  }
 }



form.addEventListener("submit",(event)=>{
   
event.preventDefault();

checkEmpty([username,email,password,confirmPassword]);
checkEmail(email);
checkPassword(password,10,6)
checkConfirmPassword(confirmPassword,10,6)

 
})
