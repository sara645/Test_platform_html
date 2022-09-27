function func(){
    window.open("./Questions.html", "_blank");
}

function set_item(){
    var Stu_Name=document.getElementById("Student_FName").value + " "  + document.getElementById("Student_LName").value;
    var Parent_Name=document.getElementById("Parent_FName").value + " "  + document.getElementById("Parent_LName").value;
    var DOB=document.getElementById("DOB").value;
    var Gender=document.getElementById("Gender").value;
    var Course=document.getElementById("Course").value;
    var Email=document.getElementById("Email").value;
    var Phone=document.getElementById("Phone").value;


    localStorage.setItem("Student_Name",Stu_Name);
    localStorage.setItem("Parent_Name",Parent_Name);
    localStorage.setItem("DOB",DOB);
    localStorage.setItem("Gender",Gender);
    localStorage.setItem("Course",Course);
    localStorage.setItem("Email",Email);
    localStorage.setItem("Phone",Phone);

}