import filterData from "../utilities/filterDataTrans.js"
        let data=JSON.parse(localStorage.getItem("data"));
        const index = localStorage.getItem("index");
        window.addEventListener("load",()=>{
        if(data[index][0].session.logedIn){
            transLogs();
        
        }
        else{
            console.log("no session");
            window.location.href="login.html";
        }
        });

        function transLogs(){
        const index=localStorage.getItem("index")

        const table=document.getElementById("logsBody");
        const transactions=data[index][0].transactions;
        if(transactions.length==0){
            table.innerHTML=`<h2>No transaction record yet</h2>`;
            console.log("empty transactions")
            return

        }
        console.log(transactions)
        transactions.forEach((element,index) => {
       
            
        
        table.innerHTML+=`
        <tr>
        <td class="c1">${transactions[index].transId}</td>
        <td class="c2">${transactions[index].amount}</td>
        <td class="c3">${transactions[index].transactionTime}</td>
        <td class="c4" >${transactions[index].receiver}</td>
        <td class="c5"> <span class="${transactions[index].status}">${transactions[index].status}</span></td>
        </tr>
        `;
    

        })

        filterData();

        // data[0][0].transactions.splice(0,15);

        // localStorage.setItem("data",JSON.stringify(data));
}



document.getElementById("home").addEventListener("click" ,()=>{
    window.location.href="home.html"
})

document.getElementById("transaction").addEventListener("click" ,()=>{
    window.location.href="transaction.html"
})

document.getElementById("loginHistory").addEventListener("click" ,()=>{
    window.location.href="logs.html"
})


let transactions=data[index][0].transactions;
let dat=[...transactions]
const search=document.getElementById("searchId");
search.addEventListener("keyup",()=>{
    let value=search.value;
   
    let searchData=searchId(value,dat);

   
    buildTable(searchData);

});


function searchId(value,data){
    let filterData=[];
    for(let i=0;i<data.length;i++){
        value=value.toLowerCase();
        let transId=data[i].transId;
        transId=transId.toString();
        if(transId.includes(value)){
            filterData.push(data[i]);
        }
        
    }
    return filterData

}



const searchAmt=document.getElementById("searchAmount");
searchAmt.addEventListener("keyup",()=>{
    let value=searchAmt.value;
    let searchData=searchAmtFunc(value,dat);

    console.log(searchData)
    buildTable(searchData);

});

function searchAmtFunc(value,data){
    let filterData=[];
    for(let i=0;i<data.length;i++){
        value=value.toLowerCase();
        let amount=data[i].amount;
        amount=amount.toString();
        if(amount.includes(value)){
            filterData.push(data[i]);
        }
        
    }
    return filterData

}

const searchTime=document.getElementById("searchTime");
searchTime.addEventListener("keyup",()=>{
    let value=searchTime.value;
    let searchData=searchTimeFunc(value,dat);

    console.log(searchData)
    buildTable(searchData);

});

function searchTimeFunc(value,data){
    let filterData=[];
    for(let i=0;i<data.length;i++){
        value=value.toLowerCase();
        let time=data[i].transactionTime.toLowerCase();
        if(time.includes(value)){
            filterData.push(data[i]);
        }
        
    }
    return filterData

}

const searchRec=document.getElementById("searchRec");
searchRec.addEventListener("keyup",()=>{
    let value=searchRec.value;
    let searchData=searchRecFunc(value,dat);

    console.log(searchData)
    buildTable(searchData);

});

function searchRecFunc(value,data){
    let filterData=[];
    for(let i=0;i<data.length;i++){
        value=value.toLowerCase();
        let receiver=data[i].receiver.toLowerCase();
        if(receiver.includes(value)){
            filterData.push(data[i]);
        }
        
    }
    return filterData

}


function buildTable(array){
    let table=document.getElementById("logsBody");
    table.innerHTML="";
    for(let i=0;i<array.length;i++){

        table.innerHTML+=`
        <tr>
        <td class="c1">${array[i].transId}</td>
        <td class="c2">${array[i].amount}</td>
        <td class="c3">${array[i].transactionTime}</td>
        <td class="c4">${array[i].receiver}</td>
        <td class="c5"> <span class="${array[i].status}">${array[i].status}</span></td>
            </tr>`
    }
    
}




let c1;
let c2;
let c3;
let c4
let c5;
document.addEventListener("change",(event)=>{
    if (event.target.matches('input[type="checkbox"]')){
 c1=document.querySelectorAll(".c1");
 c2=document.querySelectorAll(".c2");
 c3=document.querySelectorAll(".c3");
 c4=document.querySelectorAll(".c4");
 c5=document.querySelectorAll(".c5");
 checkBoxFilter();
}})

// c1.forEach(elem,()=>{
//     elem.style.display="none"
// })

function checkBoxFilter(){
    const loginCheckbox=document.getElementById("idBox")
loginCheckbox.addEventListener("change", () => {
    let isVisible = loginCheckbox.checked;
    if (!isVisible) {
        for (let i = 0; i < c1.length; i++) {

            c1[i].style.display = "none"
        }
    }
    else {
        for (let i = 0; i < c1.length; i++) {

            c1[i].style.display = "block"
        }
    }
})

const deviceBox=document.getElementById("receiverBox")
deviceBox.addEventListener("change",()=>{

    let isVisible = deviceBox.checked;
    if (!isVisible) {
        for (let i = 0; i < c4.length; i++) {

            c4[i].style.display = "none"
        }
    }
    else {
        for (let i = 0; i < c4.length; i++) {

            c4[i].style.display = ""
        }
    }
});

const pictureBox=document.getElementById("statusBox")
pictureBox.addEventListener("change",()=>{

    let isVisible = pictureBox.checked;
    if (!isVisible) {
        for (let i = 0; i < c5.length; i++) {

            c5[i].style.display = "none"
        }
    }
    else {
        for (let i = 0; i < c5.length; i++) {

            c5[i].style.display = ""
        }
    }
});

const statusBox=document.getElementById("timeBox")
statusBox.addEventListener("change",()=>{

    let isVisible = statusBox.checked;
   
    if (!isVisible) {
        for (let i = 0; i < c3.length; i++) {

            c3[i].style.display = "none"
        }
    }
    else {
        for (let i = 0; i < c3.length; i++) {

            c3[i].style.display = ""
        }
    }
});

const timeBox=document.getElementById("amtBox")
timeBox.addEventListener("change",()=>{

    let isVisible = timeBox.checked;
    
    if (!isVisible) {
        for (let i = 0; i < c2.length; i++) {

            c2[i].style.display = "none"
        }
    }
    else {
        for (let i = 0; i < c2.length; i++) {

            c2[i].style.display = ""
        }
    }
});
}




