function addnewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter your Experience");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}



function addnewEQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter your Qualification");

    let eqOb=document.getElementById("eq");
    let eqAddButtonOb=document.getElementById("eqAddButton");

    eqOb.insertBefore(newNode,eqAddButtonOb);
}



function addnewSKILLField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter your Skills");

    let skillOb=document.getElementById("skill");
    let skillAddButtonOb=document.getElementById("skillAddButton");

    skillOb.insertBefore(newNode,skillAddButtonOb);
}

//Generate Resume

function generateResume(){
    //console.log("generating resume");

    let namefield=document.getElementById('namefield').value;

    let nameT1=document.getElementById('nameT1');

    nameT1.innerHTML=namefield;

    document.getElementById('nameT2').innerHTML=namefield;

    document.getElementById('contactT').innerHTML=document.getElementById('contactfield').value;

    document.getElementById('addressT').innerHTML=document.getElementById('addressfield').value;

    document.getElementById('fbT').innerHTML=document.getElementById('fbfield').value;

    document.getElementById('instaT').innerHTML=document.getElementById('instafield').value;

    document.getElementById('linkedT').innerHTML=document.getElementById('linkdinfield').value;

    document.getElementById('objectiveT').innerHTML=document.getElementById('objectivefield').value;

    //Work Experience


    let wes=document.getElementsByClassName('wefield');

    let str='';

    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }
    
    document.getElementById('weT').innerHTML=str;


    //Academic Qualifications

    let eqs=document.getElementsByClassName('eqfield');

    let str1='';

    for(let e of eqs)
    {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    
    document.getElementById('eqT').innerHTML=str1;


    //Skills

    let skills=document.getElementsByClassName('skillfield');

    let str2='';

    for(let e of skills)
    {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    
    document.getElementById('skillT').innerHTML=str2;

    //For Image

    let file=document.getElementById('imgfield').files[0];

    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);

    console.log(reader.result);

    //set the image to template

    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;
    }

    document.getElementById('resume-form').style.display='none';
    document.getElementById('resume-template').style.display='block';
}



// Print Resume


function printResume(){
    window.print();
}