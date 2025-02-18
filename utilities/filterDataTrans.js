export default function filterData(){
    const data=JSON.parse(localStorage.getItem("data"));
    const index=localStorage.getItem("index");
    const transactions=data[index][0].transactions;
    
    const tbody=document.getElementById("logsBody");
    const selectBtn=document.getElementById("filter");
    const sortSelect=document.getElementById("sortSelect");
    selectBtn.addEventListener("change",filter)
    sortSelect.addEventListener("change",filter)

    function filter(){
        
        let sortedData=[...transactions];
        
        if (sortSelect.value === "asc") {
            sortedData.sort((a, b) => new Date(a.transactionTime) - new Date(b.transactionTime));
        } else {
            sortedData.sort((a, b) => new Date(b.transactionTime) - new Date(a.transactionTime));
        }
        
        if(selectBtn.value!=="all"){

            sortedData=sortedData.filter(element=>element.status==selectBtn.value);            

        }
    
        tbody.innerHTML="";

        sortedData.forEach(element=>{

            tbody.innerHTML+=`
                <tr>
                <td class="c1">${element.transId}</td>
                <td class="c2">${element.amount}</td>
                <td class="c3">${element.transactionTime}</td>
                <td class="c4">${element.receiver}</td>
                <td class="c5"><span class="${element.status}">${element.status}</span></td>
            </tr>

            `
        })

                
    

        }

    }
       
    
        

        filterData();