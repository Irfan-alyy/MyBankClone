
let data=JSON.parse(localStorage.getItem("data"));
const index = localStorage.getItem("index");
window.addEventListener("load",()=>{
 if(data[index][0].session.logedIn){
    //alert("loggedIn");
   
 }
 else{
    console.log("no session");
    window.location.href="login.html";
 }
})



 if (index !== null || index !== undefined) {

 
    

    
    document.querySelector("#accountNo").textContent = data[index][0].accountNumber;
    
    document.querySelector("#profileName").textContent = data[index][0].username;
    document.querySelector("#profileEmail").textContent = data[index][0].email;
    document.querySelector("#balance").textContent = data[index][0].balance;
}

function makeTransaction(){
   window.location.href="transaction.html"
}


const profileImg=document.getElementById("profileImg");
profileImg.src=data[index][0].uploadedImage;

document.getElementById("logOut").addEventListener("click",()=>{
   data[index][0].session.logedIn=false;
   data[index][0].session.logedOut=true;

   localStorage.setItem("data",JSON.stringify(data));
   window.location.href="login.html"

});


const menuIcon=document.getElementById("menuIcon");
const closeIcon=document.getElementById("closeIcon")
closeIcon.style.display="none"
const aside= document.getElementById("sideBar");
aside.style.display="none";
//console.log(menuIcon)

menuIcon.addEventListener("click",()=>{
   aside.style.display="block";
   closeIcon.style.display="block";
   menuIcon.style.display="none";

});
closeIcon.addEventListener("click",()=>{
   aside.style.display="none";
   closeIcon.style.display="none";
   menuIcon.style.display="block";
});


function transactionHistory(){
   window.location.href="transLogs.html";
}

function loginHistory(){
   window.location.href="logs.html"
}

function changeImage(){
  window.location.href="utilities/changeImage.html"
}

function editProfile(){
   window.location.href="utilities/editProfile.html"
 }