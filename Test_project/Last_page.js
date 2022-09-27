function MyFunction(){
    var Stu_Name=localStorage.getItem("Student_Name");
    var Parent_Name=localStorage.getItem("Parent_Name");
    var DOB=localStorage.getItem("DOB");
    var Gender=localStorage.getItem("Gender");
    var Course=localStorage.getItem("Course");
    var Email=localStorage.getItem("Email");
    var Phone=localStorage.getItem("Phone");
    var Total_ques=localStorage.getItem("Total_count");
    var Correct_ans=localStorage.getItem("Correct_Count");

    // document.getElementById("Info").innerHTML+="Student Name : "+Stu_Name+"<br>";
    // document.getElementById("Info").innerHTML+="Parent Name : "+Parent_Name+"<br>";
    // document.getElementById("Info").innerHTML+="Date of Birth : "+DOB+"<br>";
    // document.getElementById("Info").innerHTML+="Gender : "+Gender+"<br>";
    // document.getElementById("Info").innerHTML+="Course : "+Course+"<br>";
    // document.getElementById("Info").innerHTML+="Email : "+Email+"<br>";
    // document.getElementById("Info").innerHTML+="Phone number : "+Phone+"<br>";
    
    document.getElementById("Stu_name").innerHTML=Stu_Name;
    document.getElementById("Parent_name").innerHTML=Parent_Name;
    document.getElementById("DOB").innerHTML=DOB;
    document.getElementById("Gender").innerHTML=Gender;
    document.getElementById("Course").innerHTML=Course;
    document.getElementById("Email").innerHTML=Email;
    document.getElementById("Phone").innerHTML=Phone;
    
    document.getElementById("Total_Question").innerHTML=Total_ques;
    document.getElementById("Correct_Answer").innerHTML=Correct_ans;
    document.getElementById("Marks").innerHTML=Correct_ans*10;

}
