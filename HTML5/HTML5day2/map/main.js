var p = document.getElementsByTagName("p")[0] 



document.getElementById("mapButton").addEventListener('click',function(){
  if(navigator.geolocation){
    // p.style.display='none';
      navigator.geolocation.getCurrentPosition(sucess,error);
  }else{
      p.textContent= 'update your browser';
      p.style.display='block';
  }
})

document.getElementById("info").addEventListener('click', informationMap);

function informationMap(){
  
  navigator.geolocation.getCurrentPosition((position) => {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
  // console.log(lat,long);
  document.getElementsByTagName("td")[0].textContent= `${lat}`;
  document.getElementsByTagName("td")[1].textContent= `${long}`;
  document.getElementsByTagName("td")[2].textContent= `${new Date(8.64e15).toString()}`;
  document.getElementsByTagName("table")[0].style.display='block';  

  });
}

// arr = sucess(obj);
// console.log(arr);

function sucess(obj){
  var lat=obj.coords.latitude;
  var lon=obj.coords.longitude;
  console.log(lat,lon);
  initMap(lat , lon);
  // return [lat,lon];
}
function error(e){
    switch(e.code){
        case 1:
              p.textContent =`error not promotion location`
              p.style.display='block';
        break;
    }
}
//////////////// map
let map;

async function initMap(x,y) {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: x, lng: y },
    zoom: 8,
  });
}


