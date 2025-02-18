// import checkBoxFilter from "./checkBoxFilter.js"



//filterData();


export default function filterData() {
    const data = JSON.parse(localStorage.getItem("data"));
    const index = localStorage.getItem("index");
    const logins = data[index][0].logins;
    const image = localStorage.getItem("capturedImage");
    const tbody = document.getElementById("logsBody");
    const selectBtn = document.getElementById("filter");
    const sortSelect = document.getElementById("sortSelect");
  
    sortSelect.addEventListener("change", filter);
    selectBtn.addEventListener("change", filter);
    function filter() {
      let sortedData = [...logins];
  
      if (sortSelect.value === "asc") {
        sortedData.sort((a, b) => new Date(a.time) - new Date(b.time));
      } else {
        sortedData.sort((a, b) => new Date(b.time) - new Date(a.time));
      }
  
      if (selectBtn.value !== "all") {
        sortedData = sortedData.filter(
          (element) => element.status == selectBtn.value
        );
      }
      tbody.innerHTML = "";
      sortedData.forEach((element) => {
        tbody.innerHTML += `
        <tr>
              <td class="c1">${element.id}</td>
              <td class="c2">${element.time}</td>
              <td class="c3"><span class="${element.status}">${element.status}</span></td>
              <td class="c4" id="td">${element.device}</td>
              <td class="c5"><img src="${image}" id="image" loading="lazy"></td>
          </tr?>
              `;
      });
      // checkBoxFilter();
  
  
    }}