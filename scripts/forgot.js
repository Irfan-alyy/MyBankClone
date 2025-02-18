
document.getElementById("btlogin").addEventListener("click",()=>{
    window.location.href="login.html"
});
document.getElementById("form").addEventListener("submit",(event)=>{
    event.preventDefault();
})

let data=JSON.parse(localStorage.getItem("data"));


document.getElementById("resetBtn").addEventListener("click",()=>{
   const name=document.getElementById("name").value;
   const email=document.getElementById("email").value;
   const password=document.getElementById("password").value;
   const cpassword=document.getElementById("cpassword").value;

   if(name==""||email==""||password==""|| cpassword==""){
    alert("fill the required fields")
    return
   }


   let result = null;
   let index=null;

    for (let i = 0; i < data.length; i++) {
        if (data[i][0].username === name && data[i][0].email === email) {
            result=true;
            index=i;
        }
    }
    if(index==null){
        alert("user Not found");
        return;
    }
    const regex = /(?=.*[0-9])(?=.*[$&@])/;    


    if (password.length < 8) {
    alert("Password must be at least 8 characters");
    //pswrdCheck.textContent = "Password must be at least 8 characters";
    return;
    }

    if (password != cpassword) {
    alert("Both Password should be same!");
    //pswrdCheck.textContent = "Your Password should be same!";
    return;

    }

    if (!regex.test(cpassword)) {
    alert("Paswword must contain $/&/@ and numbers");
    //pswrdCheck.textContent = "Paswword must contain $/&/@ and numbers";
    return;
    }

    
   
    data[index][0].password=cpassword;

    
    localStorage.setItem("data",JSON.stringify(data));
    alert("password reset successfully")

    

});