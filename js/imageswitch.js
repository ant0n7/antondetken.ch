if(navigator.connection && navigator.connection.effectiveType){
  if(navigator.connection.effectiveType === '4g' || navigator.connection.effectiveType === '5g'){
    if(document.documentElement.clientWidth >= 600){
      var image = document.getElementById("img1");
      var downloadingImage = new Image();
      downloadingImage.onload = function(){
          image.src = this.src;   
      };
      downloadingImage.src = "./../img/blg/for-desktop/_DSC2000.jpg";
      
    }
    else{
      var image = document.getElementById("img1");
      var downloadingImage = new Image();
      downloadingImage.onload = function(){
          image.src = this.src;   
      };
      downloadingImage.src = "./../img/blg/for-mobile/_DSC2000.jpg";
    }
    }
    else{
      if(document.documentElement.clientWidth >= 600){
      var image = document.getElementById("img1");
      var downloadingImage = new Image();
      downloadingImage.onload = function(){
          image.src = this.src;   
      };
      downloadingImage.src = "./../img/blg/for-desktop/_DSC2000.jpg";
      
    }
    else{
      var image = document.getElementById("img1");
      var downloadingImage = new Image();
      downloadingImage.onload = function(){
          image.src = this.src;   
      };
      downloadingImage.src = "./../img/blg/for-mobile/_DSC2000.jpg";
    }
    }
}



