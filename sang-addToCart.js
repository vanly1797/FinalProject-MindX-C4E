const btnTtcGh1 = document.getElementById("btnTtcGh");
   btnTtcGh.addEventListener("click",function(){
       const inputTtcGh = document.getElementById("demoInput").value;
       
       if(inputTtcGh >= 1) {
           btnTtcGh1.innerHTML="Đã thêm vào giỏ hàng";
       btnTtcGh1.style.backgroundColor="white";
       btnTtcGh1.style.color="black";
       btnTtcGh1.style.borderColor="lightgrey";
       btnTtcGh1.style.borderStyle="10px";
       btnTtcGh1.style.fontWeight="bold";
       }else{alert("Vui lòng nhập số lượng");
       }
   })