//const url = "https://api.exchangerate.host/latest?base=USD"



//APİ KULLAN

const price = document.getElementById("price");

//normal elements

const button = document.getElementById("button-buy")

//box-value operation

const boxCounter = document.getElementById("counter")

let orderCount = localStorage.getItem("orderCount")



//box inside

const box = document.getElementById("box")

const box_value = document.getElementById("value-frap");

const box_increase = document.getElementById("incrase-frap");


const box_total = document.getElementById("total")










async function logMovies() {
    const response = await fetch("https://api.exchangerate.host/latest?base=USD");
    const currency = await response.json();
    let para = (Math.round(currency.rates.TRY)*2.5);
    
    price.innerHTML = para + " TL";

    box_total.innerHTML=para*orderCount+"TL";
    


    
  }


  logMovies();



  button.addEventListener('click', function() {
    
    orderCount++;
    boxCounter.innerHTML = orderCount;
    

    localStorage.setItem("orderCount",orderCount);


    box_value.innerHTML =orderCount;

    

    logMovies();


    


    
});

boxCounter.innerHTML = localStorage.getItem("orderCount")









function toggleDropdown() {

  

  const dropdownContent = document.getElementById('dropdown-content');

 


  if (!dropdownContent) {
      // Element bulunamadı, hata mesajı yazdır ve fonksiyonu sonlandır
      console.error('dropdownContent elementi bulunamadı.');
      return;
  }

  if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
      
  } else {
      dropdownContent.style.display = 'block';
      box_value.innerHTML =orderCount +"x";
      

  }}


box.addEventListener('click', toggleDropdown);



//local data problem again 

logMovies();

box_increase.addEventListener("click",function(){
  orderCount--;
  localStorage.setItem("orderCount",orderCount);
  
  
  box_value.innerHTML =orderCount +"x";
  boxCounter.innerHTML = orderCount;

  console.log("değer :"  +Number(boxCounter.innerHTML) )

  if(Number(boxCounter.innerHTML)===0){
    const dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.style.display = 'none';
    console.log("çalışıyor")
  }
 
 
  
logMovies();
 

})