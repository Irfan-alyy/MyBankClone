export default function checkData(){
 let c1;
let c2;
let c3;
let c4
let c5;

setTimeout(()=>{
    c1=document.querySelectorAll(".c1");
    c3=document.querySelectorAll(".c2");
    c3=document.querySelectorAll(".c3");
    c4=document.querySelectorAll(".c4");
    c5=document.querySelectorAll(".c5");


},2000)



// c1.forEach(elem,()=>{
//     elem.style.display="none"
// })

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
        console.log(isVisible)
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
//checkData();