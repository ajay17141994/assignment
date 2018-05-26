//script for calculation no of days goes here..... 
function day(year,month,day){
    return --month>=0 && month<12 && day>0 && day<29+(  
                                        4*(year=year&3||!(year%25)&&year&15?0:1) +15662003>>month*2&3  
                                        ) && month*31-(month>1?(1054267675>>month*3-6&7)-year:0)+day;
}
// onblur function goes here
function chkday(clicked_id){

    // fetching input value in avariable named "inputValue"....
    var inputValue=document.getElementById(""+clicked_id+"").value;

    // matching for input value pattern 
    var inputdate=inputValue.match(/(-?\d+)[^\d]+(\d\d?)[^\d]+(\d\d?)/)||[];

    // printing the output in <h5> tag having class="output"....
    $(".output").text(day(+inputdate[1], +inputdate[2], +inputdate[3]));
    
}