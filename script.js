var indexValue = 1;
      showImg(indexValue);
      function btm_slide(e){showImg(indexValue = e);}
      function side_slide(e){showImg(indexValue += e);}
      function showImg(e){
        var i;
        const img = document.querySelectorAll('span > img');
        const slider = document.querySelectorAll('.btm-slides span');
        if(e > img.length){indexValue = 1}
        if(e < 1){indexValue = img.length}
        for(i = 0; i < img.length; i++){
          img[i].style.display = "none";
        }
        for(i = 0; i < slider.length; i++){
          slider[i].style.background = "rgba(105,45,105,0.1)";
        }
        img[indexValue -1].style.display = "block";
        slider[indexValue-1].style.background = "black";

      }




      window.onscroll = function() {myFunction()};

      var navbar = document.getElementById("navbar");
      var sticky = navbar.offsetTop;
      
      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }



      function MoreLess(){
        var dots = document.getElementById("dots");
        var invisibleText = document.getElementById("invisibleText");
        var btnText=document.getElementById("btn");
        if (dots.style.display!="none"){
          dots.style.display="none";
          invisibleText.style.display="inline";
          btnText.innerHTML= "Read Less";
        }
        else{
          dots.style.display="inline";
          invisibleText.style.display = "none";
          btnText.innerHTML= "Read More";
        }
      }

      
      function SeeLess(){
        var dots2 = document.getElementById("dots2");
        var invisibleText2 = document.getElementById("invisibleText2");
        var btnText=document.getElementById("btns");
        if (dots2.style.display!="none"){
          dots2.style.display="none";
          invisibleText2.style.display="inline";
          btnText.innerHTML= "Read Less";
        }
        else{
          dots2.style.display="inline";
          invisibleText2.style.display = "none";
          btnText.innerHTML= "Read More";
        }
      }

      function Less(){
        var dots3 = document.getElementById("dots3");
        var invisibleText3 = document.getElementById("invisibleText3");
        var btnText=document.getElementById("btn3");
        if (dots3.style.display!="none"){
          dots3.style.display="none";
          invisibleText3.style.display="inline";
          btnText.innerHTML= "Read Less";
        }
        else{
          dots3.style.display="inline";
          invisibleText3.style.display = "none";
          btnText.innerHTML= "Read More";
        }
      }

      function More(){
        var dots4 = document.getElementById("dots4");
        var invisibleText4 =document.getElementById("invisibleText4");
        var btnText = document.getElementById("btn4");
        if(dots4.style.display!= "none"){
          dots4.style.display="none";
          invisibleText4.style.display="inline";
          btnText.innerHTML="Read Less";
        }
        else{
          dots4.style.display="inline";
          invisibleText4.style.display = "none";
          btnText.innerHTML= "Read More";
        }
      }


 