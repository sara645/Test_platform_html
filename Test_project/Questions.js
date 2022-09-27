
setInterval(Timer, 1000);
var time=10;
var min=0;
var sec=0;

const questions=["Which of the following keywords is used to define a variable in Javascript?",
                 "Which of the following methods is used to access HTML elements using Javascript?",
                 "Upon encountering empty statements, what does the Javascript Interpreter do?",
                 "Which of the following methods can be used to display data in some form using Javascript?",
                 "How can a datatype be declared to be a constant type?",
                 "What keyword is used to check whether a given property is valid or not?",
                 "What is the use of the &lt;noscript&gt; tag in Javascript?",
                 "When an operator’s value is NULL, the typeof returned by the unary operator is:",
                 "What does the Javascript “debugger” statement do?",
                 "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?"];

const options=["var","let","Both A and B","None of the Above.",
                "getElementById()","getElementByClassName()","Both A and B","None of the Above.",
                "Throws an error","Ignores the statements","Gives a warning","None of the Above.",
                "document.write()","console.log()","window.alert()","All of the above",
                "const","var","let","constant",
                "in","is in","exists","lies",
                "The contents are displayed by non-JS-based browsers","Clears all the cookies and cache","Both A and B","None of the Above.",
                "Boolean","Undefined","Object","Integer",
                "It will debug all the errors at runtime","It acts as a breakpoint in program","It will debug error in the current statement if any","All of the above",
                "Object Serialization","Object Encapsulation","Object Inheritance","None of the Above."];

const sol=[3,3,2,4,1,1,1,3,2,1];

var ques_num=0;
var option_num=0;
var sol_num=0;
var user_sol=0;
var correct_count=0;



function Timer() {
    min=parseInt(time/60);
    sec=time%60;

    if(min==0 && sec==0){
        
        if(ques_num!=1){
            user_sol=0;
            if (document.getElementById("option1").checked) {
                user_sol = 1;
            }
            else if (document.getElementById("option2").checked) {
                user_sol = 2;
            }
            else if (document.getElementById("option3").checked) {
                user_sol = 3;
            }
            else if (document.getElementById("option4").checked) {
                user_sol = 4;
            }
            
            //   document.getElementById("corr").innerHTML+="  " +user_sol+" "+sol[sol_num];
            if(user_sol==sol[sol_num++]){
                correct_count++;
            }
        }
        // document.getElementById("corr").innerHTML="corresct: "+correct_count;

        
        document.getElementById("option1").checked=false;
        document.getElementById("option2").checked=false;
        document.getElementById("option3").checked=false;
        document.getElementById("option4").checked=false;

        localStorage.setItem("Correct_Count",correct_count);
        localStorage.setItem("Total_count",10);
        window.open("./Last_page.html","_self");
    }

    if(min<=9){
        min="0"+min;
    }
    if(sec<=9){
        sec="0"+sec;
    }
    time=time-1;
    document.getElementById("Timer").innerHTML = "Time Left : "+min+":"+sec;


}



function next_ques(){

    if(ques_num!=10){
        document.getElementById("Q_no").innerHTML=ques_num+1;
        document.getElementById("Questions").innerHTML=questions[ques_num++];
        document.getElementById("label1").innerHTML=options[option_num++];
        document.getElementById("label2").innerHTML=options[option_num++];
        document.getElementById("label3").innerHTML=options[option_num++];
        document.getElementById("label4").innerHTML=options[option_num++];

        

        if(ques_num!=1){
            user_sol=0;
            if (document.getElementById("option1").checked) {
                user_sol = 1;
            }
            else if (document.getElementById("option2").checked) {
                user_sol = 2;
            }
            else if (document.getElementById("option3").checked) {
                user_sol = 3;
            }
            else if (document.getElementById("option4").checked) {
                user_sol = 4;
            }
            
            //   document.getElementById("corr").innerHTML+="  " +user_sol+" "+sol[sol_num];
            if(user_sol==sol[sol_num++]){
                correct_count++;
            }
        }
        // document.getElementById("corr").innerHTML="corresct: "+correct_count;

        
        document.getElementById("option1").checked=false;
        document.getElementById("option2").checked=false;
        document.getElementById("option3").checked=false;
        document.getElementById("option4").checked=false;
    }
    else{
        if(ques_num!=1){
            user_sol=0;
            if (document.getElementById("option1").checked) {
                user_sol = 1;
            }
            else if (document.getElementById("option2").checked) {
                user_sol = 2;
            }
            else if (document.getElementById("option3").checked) {
                user_sol = 3;
            }
            else if (document.getElementById("option4").checked) {
                user_sol = 4;
            }
            
            //   document.getElementById("corr").innerHTML+="  " +user_sol+" "+sol[sol_num];
            if(user_sol==sol[sol_num++]){
                correct_count++;
            }
        }
        // document.getElementById("corr").innerHTML="corresct: "+correct_count;

        
        document.getElementById("option1").checked=false;
        document.getElementById("option2").checked=false;
        document.getElementById("option3").checked=false;
        document.getElementById("option4").checked=false;

        localStorage.setItem("Correct_Count",correct_count);
        localStorage.setItem("Total_count",10);
        window.open("./Last_page.html","_self");
    }
    
}