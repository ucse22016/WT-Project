function calculate()
{
    let result;
    let i;
    let growth;
    var principal_value= document.getElementById("principal").value;
    var rate_value= document.getElementById("rate").value;
    var time_value= document.getElementById("time").value;
    var compound_value= document.getElementById("compound").value;
    for(i=1; i<=time_value; i++)
    {
        result=  principal_value* Math.pow(1 + ((rate_value / 100) / compound_value), compound_value * i);
        result=result.toFixed(2);
        growth=result-principal_value;
    }
    document.getElementById("res").innerHTML="Amount : "+result+"</br>Growth : "+growth.toFixed(2);
}







