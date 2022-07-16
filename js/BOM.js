window.onload=function(){
    var odiv=document.getElementsByClassName("in-nav")
    console.log(odiv[0])
    window.onscroll=function(){
        console.log(window.pageYOffset>617)
        var S=document.body.scrollTop||document.documentElement.scrollTop
        if(window.pageYOffset>617){
            odiv[0].style="background:#003f87"
        }
        else{
            odiv[0].style=""
        }
    }
}