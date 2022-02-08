var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})

//alert function update
const btnFind = document.getElementById("btnFind")
btnFind.onclick = function(){
  alert("Tính năng đang được cập nhật");
};

const btnCart = document.getElementById("btnCart")
btnCart.onclick = function(){
  alert("Tính năng đang được cập nhật");
};

//get API googlemap
function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(10.770283,106.672169),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
  