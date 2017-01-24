/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var skill="";
function myskill(data)
{
    if(data==='android')
    {
        skill=data;
    }
    if(data==='ios')
    {
        skill=data;
    }
    return skill;
}
document.getElementById('dd').innerHTML="groshi";
function loadpage()
{
 document.getElementById("load").innerHTML='<object type="type/html" data="display.html" > </object>';
}
