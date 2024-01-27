const body = document.querySelector("body");
const toogle = document.querySelector(".toogle");

toogle.addEventListener("click", () => {
  toogle.classList.toggle("active");
  check();
});
console.log(body, toogle);


let input = document.getElementById("inputRange");
let price = document.getElementById("DisplayRange");
let pageViews = document.getElementById("pageViews");
let monthly = document.getElementById("month");
let inputProgress = document.querySelector(".rangeProgress")
console.log(monthly.textContent);

console.log(pageViews);
console.log(inputProgress);

let check = input.oninput = function() {
  let currentValue = input.value;
  if (currentValue == 1 && toogle.className == "toogle active"){
    inputProgress.style.width = 0 + "%"
    price.textContent = "$" + (8 - (8 * 0.25)) * 12 + ".00";
    pageViews.textContent = 10 + "K PAGEVIEWS";
    monthly.textContent = "/year"

  } else if(currentValue == 1) {
     inputProgress.style.width = "0%"
     monthly.textContent = "/month"
     price.textContent = "$" + 8 + ".00"
     pageViews.textContent = 10 + "K PAGEVIEWS";
  }
  else if (currentValue === "2" && toogle.className == "toogle active") {
  
    pageViews.textContent = 50 + "K PAGEVIEWS";
    price.textContent = "$" +  (12 - (12 * 0.25)) * 12 + ".00";
    monthly.textContent = "/year"
    inputProgress.style.width = "25%"
  }



  else if(currentValue == 2) {
    inputProgress.style.width = "25%"
    pageViews.textContent = 50 + "K PAGEVIEWS";
    price.textContent = "$" + "12.00";
    monthly.textContent = "/month"
 }

 else if (currentValue === "3" && toogle.className == "toogle active") {
price.textContent = "$" + (16 - (16 * 0.25)) * 12 + ".00";
  pageViews.textContent = 100 + "K PAGEVIEWS";
  inputProgress.style.width = "50%"

  monthly.textContent = "/year"
}


 else if(currentValue ==="3") {
  inputProgress.style.width = "50%"
  pageViews.textContent = 100 + "K PAGEVIEWS";
  price.textContent = "$" + "16.00";
  monthly.textContent = "/month"
}

else if (currentValue === "4" && toogle.className == "toogle active") {
  price.textContent = "$" + (24 - (24 * 0.25)) * 12 + ".00"
  pageViews.textContent = 500 + "K PAGEVIEWS";
  inputProgress.style.width = "75%"
  monthly.textContent = "/year"
}


else if(currentValue === "4") {
  inputProgress.style.width = "75%"
  pageViews.textContent = 500 + "K PAGEVIEWS";
  price.textContent = "$" + " " + "24.00";
  monthly.textContent = "/month"

}

else if (currentValue === "5" && toogle.className == "toogle active") {
  inputProgress.style.width = "100%"
  price.textContent = "$" + (32 - (32 * 0.25)) * 12 + ".00"
  pageViews.textContent = 1 + "M PAGEVIEWS";
  monthly.textContent = "/year"
}


else if( currentValue === "5") {
  inputProgress.style.width = "100%"
  pageViews.textContent = 1 + "M PAGEVIEWS";
  price.textContent = "$" + " " + "32.00";
  monthly.textContent = "/month"
}


  
 
}
