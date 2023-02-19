 let searchBtn = document.getElementById("search-btn");                      
let countryInput = document.getElementById("country-inp");

searchBtn.addEventListener("click",()=>{
  let countryWeather = Input.value;                            //storing the  input value
  let countryName =    Input.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${countryWeather}&appid=7de53c6f56f52faa22d7fbe1351e958e`  //connected two url by the API id
  let res=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`


  fetch(url)
.then((data1)=> data1.json())
.then((result)=>{
console.log(result["main"])                                   
 
let division1 = document.getElementById('cardlist')
division1.innerHTML=`<div class="card" style="width: 18rem;">
<img src="https://media.istockphoto.com/id/1225639749/vector/weather-icons-set.jpg?s=612x612&w=0&k=20&c=7EbuC4dBLWOEWMBiJSSDZCyIfNAAnn3K0Gzm-n1AaXI=" id="card-img-top" alt="...">
<div id="card-body">
  <h5 id="temp">Temperature:${result["main"].temp_max}</h5>
  <h5 id="speed">Speed: ${result["main"].temo_min}</h5>
  <h5 id="speed">Wind-Deg: ${result["main"].pressure}</h5>
  <h5 id="humidity">Humidity:${result["main"].humidity}</h5>

</div>
</div>`
})


fetch(res)
.then((Response)=> Response.json())                     
.then((data)=>{
  
  let division2 = document.getElementById('cardlists')
 division2.innerHTML=`<div class="card" style="width: 18rem;">
 <img src="${data[0].flags.svg}" alt="...">
 <div id="card-body">
 <h5 id="speed">NAME: ${data[0].name.common}</h5>
   <h5 id="temp">CAPITAL:${data[0].capital[0]}</h5>
   <h5 id="speed">REGION: ${data[0].region[0]}</h5>
   <h5 id="humidity">POSTAL CODE:${data[0].postalCode}</h5>
   </div>
    </div>`

    
    
 
}).catch(()=>{                                                          //To handle the error
  if(countryName.length ==0){
    output.innerHTML=`<h3>The input field cannot be empty</h3>`
  }
  else{
    output.innerHTML=`<h3>please enter a valid country</h3>`;
  }
})
 });
