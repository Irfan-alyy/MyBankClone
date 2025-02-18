function tocsv(){
    try{
    let data=[] 
        let headers=[];
        for (let th of document.querySelectorAll("th")){
            headers.push(th.innerText);
        }
        if(headers.length>0){
            data.push(headers)
        }
    

    for(let tr of document.querySelectorAll("#table tr")){
        let row=[];
        for(let td of tr.querySelectorAll("td") ){
            row.push(td.innerText)
        }

    data.push(row)
        

    }

    let blob= new Blob([CSV.serialize(data)],{type: "text/csv"});
    let url= window.URL.createObjectURL(blob);
    a=document.createElement("a");
    a.href=url;
    a.download="TransactionsHistory.csv";
    a.click()
   a.remove();
   window.URL.revokeObjectURL(url) 
}
catch(error){
    console.log("Error generating CSV file:", error)
}
}