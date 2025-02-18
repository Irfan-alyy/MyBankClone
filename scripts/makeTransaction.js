function transLogs(){
    window.location.href="translogs.html"
  }



  document
    .querySelector("#transfer")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });

  const card = {
    cv: 225,
    expiry: "10/2028",
    balance: 20000,

  };
  let index = localStorage.getItem("index");
  localStorage.removeItem("card");
  const myCard = JSON.parse(localStorage.getItem("card")) || card;
  let data = JSON.parse(localStorage.getItem("data"));
  window.addEventListener("load", () => {
    console.log(data[index][0].session);

    if (data[index][0].session.logedIn) {
    } else {
      window.location.href = "login.html";
    }
  });

  transferBtn.addEventListener("click", () => {
    const receiver = document.querySelector("#receiver").value;
    const amount = parseFloat(document.querySelector("#amount").value);
    const cvNumber = document.querySelector("#cvNumber").value;
    const expiryDate = 
      document.querySelector("#expiryDate").value
    ;
    if(receiver.includes("-")||receiver.includes("+")||receiver.includes(".")||receiver.includes("e")){
      alert("account number should be numbers only!!");
      return
    }

    

    let transId;
    let length = data[index][0].transactions.length;
    console.log(length)
    if (length > 0) {
      transId = data[index][0].transactions[length - 1].transId;
      transId++;
    } else {
      transId = 888;
    }

    console.log("transId:", transId);
    console.log(expiryDate,myCard.expiry);

    if (Number.isFinite(parseInt(receiver))&&
      receiver.length == 16 &&
      amount > 0       
    ) {
      if (amount > data[index][0].balance) {
        alert("Insufficient Balance in your account");
        let transaction = {
        transId: transId,
        transactionTime: new Date().toLocaleString(),
        receiver: receiver,
        amount: amount,
        status:"failed"

      };
      data[index][0].transactions.push(transaction)
      localStorage.setItem("data", JSON.stringify(data));
        return;
      }
      

      if(cvNumber != myCard.cv ||
      expiryDate != myCard.expiry){
        alert("CV number or Card Expiry date not correct");
        return
      }
      let time=new Date().toLocaleString()
      let transaction = {
        transId: transId,
        transactionTime: time,
        receiver: receiver,
        amount: amount,
        status:"success"

      };
      data[index][0].balance-=amount;

      console.log("transactions");
      data[index][0].transactions.push(transaction);
      //console.log(data[index][0].transactions);
      localStorage.setItem("data", JSON.stringify(data));

      alert(`Transaction Successful\n Amount: ${amount}\n Receiver: ${receiver}\n Time: ${time}`);
      
      return;
    } else {
      let transaction = {
        transId: transId,
        transactionTime: new Date().toLocaleString(),
        receiver: receiver,
        amount: amount,
        status:"failed"

      };
      data[index][0].transactions.push(transaction)
      localStorage.setItem("data", JSON.stringify(data));
      
      alert("Enter Valid Account Number or Amount");
      return;
    }
    console.log(listen);
  });

  function returnHome(){
    window.location.href="home.html"
  }