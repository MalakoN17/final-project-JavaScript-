// DOM //
let signIn = document.querySelector(".sign-in");
let closeContainer = document.querySelector(".x-img");
let poupContainer = document.querySelector("#popup-container");
let openHomeBtn = document.querySelector(".open-btn");
let homeContainer = document.querySelector(".close-container");
let propertySearch = document.querySelector(".home-search-input");
let sortPriceBtn = document.querySelector(".sort-by-price");
let searchBtn = document.querySelector(".search-btn");
// function that open the container with the data
function openHomeContainer() {
  homeContainer.classList.toggle("open-container");
}
// event on the btn that open the container
openHomeBtn.addEventListener("click", openHomeContainer)

// array of the contains the data
let dataArray = [];
// axios of the API that has data of real estate
const options = {
  method: 'GET',
  params: {
    state: 'CA',
    city: 'Los Angeles',
    page: '1',
    sort: 'relevant',
    type: 'single-family,multi-family'
  },
  headers: {
    'X-RapidAPI-Key': '094d143fe1msh82a8b910961974ap14d86fjsn7d7f23b8f895',
    'X-RapidAPI-Host': 'real-estate12.p.rapidapi.com'
  }
}
// function that show all the api data for the user
function showData(web){
  
  web.forEach(data => {
    homeContainer.innerHTML += ` <div class="Home-container bg-light col-md-3">
    <div class="col-10">
    <img class="img-fluid" src="${data.photos[0].href}" alt="" width: 100%;
    height: 100% />
    </div>
    <div class="col-10">
      <h3 class="fw-bold col-12">price: ${data.list_price} $</h3>
      <h3 class="">${data.location.address.city}</h3>
      <address>line: ${data.location.address.line}</address>
      <h3 class="">${data.location.address.state}</h3>
    </div>
  </div>`
    
  });  
}
// call to the axios
axios
.get('https://real-estate12.p.rapidapi.com/listings/sale',options).then( (response) =>{
  dataArray = response.data.properties;
  console.log(dataArray);
showData(dataArray)
})

// function that filter by adders
function searchFun(arr){
  homeContainer.innerHTML = ''
  let searchFilter = arr.filter(function(obj){
    return obj.location.address.line.toLowerCase().indexOf(propertySearch.value)>-1
  })
  showData(searchFilter);
return searchFilter;

}
// event on the search btn
searchBtn.addEventListener("click", function(){
  searchFun(dataArray)
  if(searchFun(dataArray).length == 0){
    alert("address not found")
    showData(dataArray)
  }
})
// function that sort by price
function sortByPrice(dataArray){
  homeContainer.innerHTML = ""
  dataArray.sort(function(a,b){
    if(a.list_price>b.list_price){
      return 1 
    }if(a.list_price<b.list_price){
      return -1
    }
  })
  showData(dataArray)
}
// event on the btn that sort by price
sortPriceBtn.addEventListener("click", function(){
  sortByPrice(dataArray)
})
// graph object //
let optionsGraph = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},
title: {
  text: 'The growth of the company value in the last year',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'],
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Des'],
}
};
// show on the graph obj
let chart = new ApexCharts(document.querySelector("#chart"), optionsGraph);
chart.render();

