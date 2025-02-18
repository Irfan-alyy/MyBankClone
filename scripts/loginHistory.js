//import checkBoxFilter from "../utilities/checkBoxFilter.js"
import filterData from "../utilities/filterData.js"

filterData();
//checkBoxFilter();



let data=JSON.parse(localStorage.getItem("data"));
const index = localStorage.getItem("index");
window.addEventListener("load",()=>{
if(data[index][0].session.logedIn){
    loginHistory();

}
else{
    console.log("no session");
    window.location.href="login.html";
}
});

function loginHistory(){


const table=document.getElementById("logsBody");
const logins=data[index][0].logins;
const image=localStorage.getItem("capturedImage")
//console.log(logins)
logins.forEach((element,index) => {
if(logins[index].time==undefined){
    
}else{
table.innerHTML+=`
<tr>
<td class="c1">${logins[index].id}</td>
<td class="c2">${logins[index].time}</td>
<td class="c3"><span class="${logins[index].status}">${logins[index].status}</span></td>
<td id="td" class="c4">${logins[index].device}</td>
<td class="c5"><img src="${image}" id="image" loading="lazy"></td>
</tr>
`;
    
}



})




}
document.getElementById("home").addEventListener("click" ,()=>{
window.location.href="home.html"
})

document.getElementById("transaction").addEventListener("click" ,()=>{
window.location.href="transaction.html"
})

document.getElementById("transLogs").addEventListener("click" ,()=>{
window.location.href="translogs.html"
})



let logins=data[index][0].logins;
let dat=[...logins]
const search=document.getElementById("searchId");
search.addEventListener("keyup",()=>{
let value=search.value;

let searchData=searchName(value,dat);


buildTable(searchData);

});

function searchName(value,data){
let filterData=[];
for(let i=0;i<data.length;i++){
value=value.toLowerCase();
let email=data[i].id.toLowerCase();
if(email.includes(value)){
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
<td class="c1"> ${array[i].id}</td>
<td class="c2" >${array[i].time}</td>
<td class="c3"><span class="${logins[index].status}">${logins[index].status}</span></td>

<td class="c4" id="td">${array[i].device}</td>
    </tr>`
}


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
let time=data[i].time.toLowerCase();
if(time.includes(value)){
    filterData.push(data[i]);
}

}
return filterData

}
// function buildTable(array){
//     let table=document.getElementById("logsBody");
//     table.innerHTML="";
//     for(let i=0;i<array.length;i++){
//         table.innerHTML+=`<td>${array[i].id}</td>
//         <td>${array[i].time}</td><td>${array[i].status}</td><td id="td">${array[i].device}</td>`
//     }

// }




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

const deviceBox=document.getElementById("deviceBox")
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

const pictureBox=document.getElementById("pictureBox")
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

const statusBox=document.getElementById("statusBox")
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

const timeBox=document.getElementById("timeBox")
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


//image click functionality
let images
setTimeout(()=>{
    images=document.querySelectorAll("#image");
    images.forEach(image=>{
    image.addEventListener("click",(event)=>{
        let imageData=event.target.src
        showImage(imageData);
    })
})
},2000)



function showImage(image){
    const imageBox=document.querySelector("#imageBox");
    imageBox.style.display="flex";
    const showImage=document.querySelector("#showImage")

    //const pictureData=localStorage.getItem("capturedImage")
    showImage.src=image;
    document.querySelector("#closeImageBox").addEventListener("click",()=>{
        console.log("clicked")
        imageBox.style.display="none"
    })
    const downloadBtn= document.querySelector("#imageDownload");
    downloadBtn.addEventListener("click",()=>{
        downloadImage(image);
    })


}


async function downloadImage(image){
    try{
        const response=await fetch(image);
        if(!response.ok){
            throw  new Error("Failed to fetched Image");
        }
        const blob = await response.blob();
        const url= window.URL.createObjectURL(blob);
        const a= document.createElement("a");
        a.href=url;
        a.download="image.jpg";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

    }
    catch(error){
        console.log("error downloading image:",error)
    }
}




