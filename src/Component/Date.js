import React from "react";
function Date1(){
let time1= new Date();
let day1=time1.getDay();
let month1=time1.getMonth();
let day="";
let month="";
//clock java script
switch(day1){
 case 0: 
 day="Sunday";
break;
 case 1: 
 day="Monday";
 break;   
 case 2: 
 day="Tuesday";
break;
 case 3:
   day= "Wednesday";
break;
 case 4: 
 day="Thursday";
break;
 case 5: 
 day="Friday"; 
break;
 case 6: 
 day="Saturday";
break;
 default: 
 day="Error";
 }
 switch(month1){
 case 0: 
 month="January";
break;
 case 1: 
 month="February";
 break;   
 case 2: 
 month="March";
break;
 case 3:
   month= "April";
break;
 case 4: 
 month="May";
break;
 case 5: 
 month="June"; 
break;
 case 6: 
 month="July";
 break;
 case 7: 
 month="August";
break;
 case 8: 
 month="September";
 break;   
 case 9: 
 month="October";
break;
 case 10:
   month= "November";
break;
 case 11: 
 month="December";
break;
 default: 
 month="Error";
 }
const ftime= time1.getDate()+" "+month+", "+day;

const st1={
color:"blue",
position:"absolute",
right:"2px"
}
return(
    <div style={{backgroundColor:"black"}}   >
    <p style={st1}>{ftime}</p>
    </div>
 )
}
export default Date1;