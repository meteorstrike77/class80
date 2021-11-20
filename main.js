name_of_student_array = [];
function submit() {
    var display_student_array = [];
    for (var j = 1; j <= 4; j++) {
        var nameofstudentarray = document.getElementById("name_of_the_student_"+j).value;
        console.log(nameofstudentarray);
        name_of_student_array.push(nameofstudentarray);
    }
    console.log(name_of_student_array);

    var lengthofname_of_Student_array = name_of_student_array.length;
    console.log(lengthofname_of_Student_array);
    for (var n = 0; n < lengthofname_of_Student_array; n++) {
        display_student_array.push("<h4>NAME -"+name_of_student_array[n] + "</h4>");
        console.log(display_student_array);
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
    name_of_student_array.sort();
    console.log(name_of_student_array);

    var display_student_array_sorting = [];
    
    var length_of_array = name_of_student_array.length;
    console.log(length_of_array);

    for (var n = 0; n < length_of_array; n++) {
        display_student_array_sorting.push("<h4>NAME -"+name_of_student_array[n] + "</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}
function newupdate() {
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_student_array + "<h1>"
}