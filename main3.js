const rows = [];

function Add_major() {
    const select = document.getElementById("box_2");
    const row = {
        major : document.getElementById("box_1").value,
        subject : document.all.a2.value,
        number : document.all.a3.value,
        score : select.options[select.selectedIndex].text,
        grade : document.getElementById("box_3").value,
        semester : document.getElementById("box_4").value
    }

    let table1 = document.getElementById("major_table");

    // tr 개체를 얻어와 속성값을 조절한다.
    let tr = document.createElement("tr");
    tr.setAttribute("bgColor", "white"); // 배경색
    tr.setAttribute("height", "30"); // 높이 
    
    let td1 = document.createElement("td");
    td1.setAttribute("width", "80"); // 넓이
    td1.innerText = row.major;

    let td2 = document.createElement("td");
    td2.setAttribute("width", "300"); // 넓이
    td2.innerText = row.subject;

    let td3 = document.createElement("td");
    td3.setAttribute("width", "100"); // 넓이
    td3.innerText = row.number;

    let td4 = document.createElement("td");
    td4.setAttribute("width", "100"); // 넓이
    
    td4.innerText = row.score;

    let td5 = document.createElement("td");
    td5.setAttribute("width", "50"); // 넓이
    td5.innerText = row.grade;

    let td6 = document.createElement("td");
    td6.setAttribute("width", "50"); // 넓이
    td6.innerText = row.semester;

    const btns = document.createElement('button'); // the delete buttons
    btns.innerText = "Delete"

    table1.appendChild(tr);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(btns);

    
    btns.addEventListener('click', function() {
        this.parentElement.remove()

      
    });

    rows.push(row);
}

function Add_notmajor() {
    const select = document.getElementById("box_2");
    const row = {
        major : document.getElementById("box_1").value,
        subject : document.all.a2.value,
        number : document.all.a3.value,
        score : select.options[select.selectedIndex].text,
        grade : document.getElementById("box_3").value,
        semester : document.getElementById("box_4").value
    }

    let table2 = document.getElementById("notmajor_table");

    // tr 개체를 얻어와 속성값을 조절한다.
    let tr = document.createElement("tr");
    tr.setAttribute("bgColor", "white"); // 배경색
    tr.setAttribute("height", "30"); // 높이 
    
    let td1 = document.createElement("td");
    td1.setAttribute("width", "80"); // 넓이
    td1.innerText = row.major;

    let td2 = document.createElement("td");
    td2.setAttribute("width", "300"); // 넓이
    td2.innerText = row.subject;

    let td3 = document.createElement("td");
    td3.setAttribute("width", "100"); // 넓이
    td3.innerText = row.number;

    let td4 = document.createElement("td");
    td4.setAttribute("width", "100"); // 넓이
    
    td4.innerText = row.score;

    let td5 = document.createElement("td");
    td5.setAttribute("width", "50"); // 넓이
    td5.innerText = row.grade;

    let td6 = document.createElement("td");
    td6.setAttribute("width", "50"); // 넓이
    td6.innerText = row.semester;

    const btns = document.createElement('button'); // the delete buttons
    btns.innerText = "Delete"


    table2.appendChild(tr);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(btns);


    btns.addEventListener('click', function() {
        this.parentElement.remove()

      
    });

    rows.push(row);

   
}

function Add_general() {

    const select = document.getElementById("box_2");
    const row = {
        major : document.getElementById("box_1").value,
        subject : document.all.a2.value,
        number : document.all.a3.value,
        score : select.options[select.selectedIndex].text,
        grade : document.getElementById("box_3").value,
        semester : document.getElementById("box_4").value
    }
    
    let table3 = document.getElementById("general_table");

    // tr 개체를 얻어와 속성값을 조절한다.
    let tr = document.createElement("tr");
    tr.setAttribute("bgColor", "white"); // 배경색
    tr.setAttribute("height", "30"); // 높이 
    
    let td1 = document.createElement("td");
    td1.setAttribute("width", "80"); // 넓이
    td1.innerText = row.major;

    let td2 = document.createElement("td");
    td2.setAttribute("width", "300"); // 넓이
    td2.innerText = row.subject;

    let td3 = document.createElement("td");
    td3.setAttribute("width", "100"); // 넓이
    td3.innerText = row.number;

    let td4 = document.createElement("td");
    td4.setAttribute("width", "100"); // 넓이
    
    td4.innerText = row.score;

    let td5 = document.createElement("td");
    td5.setAttribute("width", "50"); // 넓이
    td5.innerText = row.grade;

    let td6 = document.createElement("td");
    td6.setAttribute("width", "50"); // 넓이
    td6.innerText = row.semester;

    const btns = document.createElement('button'); // the delete buttons
    btns.innerText = "Delete"


    table3.appendChild(tr);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(btns);

    btns.addEventListener('click', function() {
        this.parentElement.remove();
      
    });

    rows.push(row);


}

let new_sum = 0;
let i;
let sumMultiple = 0;
let majorsumMultiple = 0;
let notmajorsumMultiple = 0;
let generalsumMultiple = 0;
let majornew_sum = 0;
let notmajornew_sum = 0;
let generalnew_sum = 0;

function Add(){

    let multiple = parseFloat(document.getElementById("box_2").value) * parseFloat(document.all.a3.value);
    sumMultiple = sumMultiple + multiple;

    if(document.getElementById("box_1").value === "전공"){
        let majormultiple = parseFloat(document.getElementById("box_2").value) * parseFloat(document.all.a3.value);
        majorsumMultiple = majorsumMultiple + majormultiple;
        Add_major();
        let majornew_sum = majorSum();
        let majorTotalscore = majorsumMultiple / majornew_sum;
        majorsum_score.innerHTML= majorTotalscore;
        localStorage.setItem("major_sum",majornew_sum);
        localStorage.setItem("major_score",majorTotalscore);
    }else if(document.getElementById("box_1").value === "교양"){
        let notmajormultiple = parseFloat(document.getElementById("box_2").value) * parseFloat(document.all.a3.value);
        notmajorsumMultiple = notmajorsumMultiple + notmajormultiple;
        Add_notmajor();
        let notmajornew_sum = notmajorSum();
        let notmajorTotalscore = notmajorsumMultiple / notmajornew_sum;
        notmajorsum_score.innerHTML= notmajorTotalscore;
        localStorage.setItem("notmajor_sum",notmajornew_sum);
        localStorage.setItem("notmajor_score",notmajorTotalscore);
    }else if(document.getElementById("box_1").value === "일반선택"){
        let generalmultiple = parseFloat(document.getElementById("box_2").value) * parseFloat(document.all.a3.value);
        generalsumMultiple = generalsumMultiple + generalmultiple;
        Add_general();
        let generalnew_sum = generalSum();
        let generalTotalscore = generalsumMultiple / generalnew_sum;
        generalsum_score.innerHTML= generalTotalscore;
        localStorage.setItem("general_sum",generalnew_sum);
        localStorage.setItem("general_score",generalTotalscore);
    }
    
    let new_sum = Sum();
    let Totalscore = sumMultiple / new_sum;
    sum_score.innerHTML= Totalscore;
    
    if(localStorage.getItem("subject") ==undefined) {
        localStorage.setItem("subject", JSON.stringify(rows));
    }
    else{
        var list = localStorage.getItem("subject");
        console.log(type(list))
        for(let i =0; i<rows.length; i++){
            list.push(rows[i]);
        }
        localStorage.setItem("subject",JSON.stringify(list));

    }
}

// window.addEventListener("beforeunload", function (event) {

//     localStorage.setItem("subject", JSON.stringify(rows));
//   });
function Load(){

} 
  

function Sum(){
    let sum_num=0;
    for(i=0; i< document.querySelectorAll('table > tr > td:nth-child(3)').length; i++){
        number = Number(document.querySelectorAll('table > tr > td:nth-child(3)')[i].innerText);
        sum_num = sum_num + number;
    }
    let sum_num_box = document.getElementById("sum_num");
    sum_num_box.innerHTML= sum_num;
    return sum_num;
    
    
    
}

function majorSum(){
    let majorsum_num=0;
    for(i=0; i< document.querySelectorAll('#major_table > tr > td:nth-child(3)').length; i++){
        majornumber = Number(document.querySelectorAll('table:nth-child(1) > tr > td:nth-child(3)')[i].innerText);
        majorsum_num = majorsum_num + majornumber;
    }
    let majorsum_num_box = document.getElementById("majorsum_num");
    majorsum_num_box.innerHTML= majorsum_num;
    return majorsum_num;
}

function notmajorSum(){
    let notmajorsum_num=0;
    for(i=0; i< document.querySelectorAll('#notmajor_table > tr > td:nth-child(3)').length; i++){
        notmajornumber = Number(document.querySelectorAll('#notmajor_table > tr > td:nth-child(3)')[i].innerText);
        notmajorsum_num = notmajorsum_num + notmajornumber;
    }
    let notmajorsum_num_box = document.getElementById("notmajorsum_num");
    notmajorsum_num_box.innerHTML= notmajorsum_num;
    return notmajorsum_num;
}

function generalSum(){
    let generalsum_num=0;
    for(i=0; i< document.querySelectorAll('#general_table > tr > td:nth-child(3)').length; i++){
        generalnumber = Number(document.querySelectorAll('#general_table > tr > td:nth-child(3)')[i].innerText);
        generalsum_num = generalsum_num + generalnumber;
    }
    let generalsum_num_box = document.getElementById("generalsum_num");
    generalsum_num_box.innerHTML= generalsum_num;
    return generalsum_num;
}

window.addEventListener("load", function(event) {
    var list = localStorage.getItem("subject");		

    var rowss = JSON.parse(list);
    rows = rowss;
    for(var l=0; l<rows.length;l++){
        if(rows[l].major==="전공"){
            let table = document.getElementById("major_table");

            // tr 개체를 얻어와 속성값을 조절한다.
            let tr = document.createElement("tr");
            tr.setAttribute("bgColor", "white"); // 배경색
            tr.setAttribute("height", "30"); // 높이 
            
            let td1 = document.createElement("td");
            td1.setAttribute("width", "80"); // 넓이
            td1.innerText = rows[l].major;

            let td2 = document.createElement("td");
            td2.setAttribute("width", "300"); // 넓이
            td2.innerText = rows[l].subject;

            let td3 = document.createElement("td");
            td3.setAttribute("width", "100"); // 넓이
            td3.innerText = rows[l].number;

            let td4 = document.createElement("td");
            td4.setAttribute("width", "100"); // 넓이
            
            td4.innerText = rows[l].score;

            let td5 = document.createElement("td");
            td5.setAttribute("width", "50"); // 넓이
            td5.innerText = rows[l].grade;

            let td6 = document.createElement("td");
            td6.setAttribute("width", "50"); // 넓이
            td6.innerText = rows[l].semester;

            const btns = document.createElement('button'); // the delete buttons
            btns.innerText = "Delete"


            table.appendChild(tr);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(btns);


            btns.addEventListener('click', function() {
                this.parentElement.remove()

      
            });

        } else if(rows[l].major==="교양"){
            let table2 = document.getElementById("notmajor_table");

            // tr 개체를 얻어와 속성값을 조절한다.
            let tr = document.createElement("tr");
            tr.setAttribute("bgColor", "white"); // 배경색
            tr.setAttribute("height", "30"); // 높이 
            
            let td1 = document.createElement("td");
            td1.setAttribute("width", "80"); // 넓이
            td1.innerText = rows[l].major;

            let td2 = document.createElement("td");
            td2.setAttribute("width", "300"); // 넓이
            td2.innerText = rows[l].subject;

            let td3 = document.createElement("td");
            td3.setAttribute("width", "100"); // 넓이
            td3.innerText = rows[l].number;

            let td4 = document.createElement("td");
            td4.setAttribute("width", "100"); // 넓이
            
            td4.innerText = rows[l].score;

            let td5 = document.createElement("td");
            td5.setAttribute("width", "50"); // 넓이
            td5.innerText = rows[l].grade;

            let td6 = document.createElement("td");
            td6.setAttribute("width", "50"); // 넓이
            td6.innerText = rows[l].semester;

            const btns = document.createElement('button'); // the delete buttons
            btns.innerText = "Delete"


            table2.appendChild(tr);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(btns);


            btns.addEventListener('click', function() {
                this.parentElement.remove()

            });

        }else{
            let table3 = document.getElementById("general_table");

            // tr 개체를 얻어와 속성값을 조절한다.
            let tr = document.createElement("tr");
            tr.setAttribute("bgColor", "white"); // 배경색
            tr.setAttribute("height", "30"); // 높이 
            
            let td1 = document.createElement("td");
            td1.setAttribute("width", "80"); // 넓이
            td1.innerText = rows[l].major;

            let td2 = document.createElement("td");
            td2.setAttribute("width", "300"); // 넓이
            td2.innerText = rows[l].subject;

            let td3 = document.createElement("td");
            td3.setAttribute("width", "100"); // 넓이
            td3.innerText = rows[l].number;

            let td4 = document.createElement("td");
            td4.setAttribute("width", "100"); // 넓이
            
            td4.innerText = rows[l].score;

            let td5 = document.createElement("td");
            td5.setAttribute("width", "50"); // 넓이
            td5.innerText = rows[l].grade;

            let td6 = document.createElement("td");
            td6.setAttribute("width", "50"); // 넓이
            td6.innerText = rows[l].semester;

            const btns = document.createElement('button'); // the delete buttons
            btns.innerText = "Delete"


            table3.appendChild(tr);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(btns);


            btns.addEventListener('click', function() {
                this.parentElement.remove()
            });

        }
    }
})