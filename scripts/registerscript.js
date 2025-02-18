
document.querySelector("#form").addEventListener('submit', function (event) {
    event.preventDefault();
})

document.getElementById("alrdBtn").addEventListener("click",()=>{
    window.location.href="login.html";
})

const btn = document.querySelector("#registerBtn");

const user = [

    {
        //userid: 111,

        transactions: [

        ],
        logins: [
            
         ]

    }
];



btn.addEventListener("click", () => {
    console.log("clicked")

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const cpassword=document.querySelector("#cpassword").value;
    const pswrdCheck = document.querySelector("#pswrdCheck");

    console.log(name, email, password)
    let data = JSON.parse(localStorage.getItem("data")) || [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0].email === email) {
            alert("account already exist")
            return
        }
        if (data[i][0].username === name) {
            alert("account already exist");
            return
        }


    }
    if (email == "" || name == "" || password == ""|| cpassword=="") {
        alert("fill the required data");
        return;

    }
    const regex = /(?=.*[0-9])(?=.*[$&@])/;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        alert("Name must contain only letters and spaces");
        pswrdCheck.textContent = "Name must contain only letters and spaces";
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        pswrdCheck.textContent = "Please enter a valid email address";
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        pswrdCheck.textContent = "Password must be at least 8 characters";
        return;
    }

    if (password != cpassword) {
        alert("Your Password should be same!");
        pswrdCheck.textContent = "Your Password should be same!";
        return;

    }

    if (!regex.test(cpassword)) {
        alert("Paswword must contain $/&/@ and numbers");
        pswrdCheck.textContent = "Paswword must contain $/&/@ and numbers";
        return;
    }



    user[0].username = name;
    user[0].email = email;
    user[0].password = password;
    let balance=Math.floor(Math.random() * 10000);

    user[0].balance = balance;
    let accountNumber=Math.floor(Math.random() * 10000000000000000);
    console.log(accountNumber)
    user[0].accountNumber=accountNumber;
    console.log(data[data.length - 1]);
    if (data[data.length - 1]) {
        let id = data[data.length - 1][0].userid;
        id++
        user[0].userid = id;
    }
    else {
        user[0].userid = 111;
    }




    console.log(data.length)
    console.log(user[0].userid)
    let session = {
        logedIn: false,
        logedOut: true,
    }
    user[0].session = session;
    data.push(user)
    localStorage.setItem("data", JSON.stringify(data));
    alert("user account created successfully")
    window.location.href="login.html"



});

function makeTransaction(reciever, amount) {
    const id = 122;
    const time = new Date().toLocaleString();

    let trans = { id: id, amount: amount, reciever: reciever, time }
    user[0].transactions.push(trans);


}

//makeTransaction(54321, 1000);


function updateProfile(name) {
    user[0].name = name;


}

//updateProfile("furqan")

function log() {
    user[0].logins[0].time = new Date().toLocaleString();
    user[0].logins[0].status = "success";
    user[0].device = navigator.userAgent;
}
//log();


let data = JSON.parse(localStorage.getItem("data"))

