
/*document.getElementById("check").onclick=function()*/
var count=0;
var a=Math.floor((Math.random()*100)+1);
var g=0;
check=()=>{
   
    var s1="Congratulations!!! you have got the number in "
    var s2=" tries"
    var b1="Try with smaller number";
    var b2="Try with greater number";
    var x=parseInt(document.getElementById("n1").value);
    if(x==a)
    {
        if(g==0)
        {
            count++;
            g++;
        }
        var y=s1+count+s2;
    b=document.getElementById("result").textContent=(y);
    b=document.getElementById("tries").textContent=(count);
    }
    else {
        count++;
        if (a<x) 
        {
            var y=b1;
        b=document.getElementById("result").textContent=(y);
        b=document.getElementById("tries").textContent=(count);
        }
        else 
        {
            var y=b2;
        b=document.getElementById("result").textContent=(y);
        b=document.getElementById("tries").textContent=(count);
        }
}
}