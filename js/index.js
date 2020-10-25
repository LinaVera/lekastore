function pro(){
var t="";
var i=document.getElementById('ma');
let re=0;
    
    for (let ind = 0; ind < 3; ind++) {
        t+="<div class='card-deck mb-2'>";
        
        for (let index = (re+1); index <=(re+4); index++) {
       
        t+=" <div class='card'> <img class='card-img mi-pro' src='../images/d2_files/acc/ma"+index+".jpg' alt='Card image cap'></div>";   
  
    }
    t+="</div>";
    
}
i.innerHTML=t;
}