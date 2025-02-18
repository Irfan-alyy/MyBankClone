import capturePhoto from "../utilities/camera.js"

document.querySelector("#form").addEventListener("submit", function(event){
    event.preventDefault();
});
document.getElementById("regBtn").addEventListener("click",()=>{
    window.location.href="register.html"
})
document.querySelector("#loginBtn").addEventListener("click",()=>{
   
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    
    let data=JSON.parse(localStorage.getItem("data"));
    const login={
                time: new Date().toLocaleString(),
                device: navigator.userAgent,
                
            }
    
    console.log("aboove loop")
            if(data===null){
                alert("No data found")
                return
            }
        
        for(let i=0;i<data.length;i++){

        console.log["local",data[i].email, data[i].password]
        for(let i=0;i<data.length;i++){
        if(data[i][0].email===email &&data[i][0].password===password){

            alert("sucecessfull");
            //window.location.href="home.html";
            let index=i;
            localStorage.setItem("index",index);
            
            data[i][0].session.logedIn=true;
            data[i][0].session.logedOut=false;

            console.log(data[i][0].session);
            
            login.status="success"
            login.id=data[i][0].email;
            

            data[i][0].logins.push(login)

            localStorage.setItem("data",JSON.stringify(data));
             
        
        
           // window.location.href="home.html"
           window.location.href="camera.html"
           
             
            return

        }}
        
            alert("invalid credentials");
            login.status="fail";
            login.id=data[i][0].email;
            data[i][0].logins.push(login);
            localStorage.setItem("data",JSON.stringify(data));
           return
        
    }
   

})

let data=JSON.parse(localStorage.getItem("data"));

document.getElementById("frgtBtn").addEventListener("click",()=>{
    window.location.href="forgot.html"
})

