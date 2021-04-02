let inputData = document.querySelector('#data');
let inputselector = document.querySelector('#Selector');
let inputname = document.querySelector('#name');
let inputname2 = document.querySelector('#name2');
let inputface = document.querySelector('#facebook_id');
let inputfaceLink = document.querySelector('#Facejs');
let inputfaceLink2 = document.querySelector('#Facejs2');
let inputfaceLink3 = document.querySelector('#Facejs3');


fetch('https://raw.githubusercontent.com/nofelmedia/BD_friend/main/bd%20friend.json')
.then((response) => response.json())
.then(data => {

    let dataLenth = data.length;
    for(i=0; i<dataLenth; i++){
        let innerHtml = `
   <option value="${i}"> ${data[i].login} </option>
   `;
   inputselector.innerHTML += innerHtml;
    };
   

      console.log(data);

})


inputselector.addEventListener("change", function(){
    let thisValue = this.value;
    console.log(thisValue)
    fetch('https://raw.githubusercontent.com/nofelmedia/BD_friend/main/bd%20friend.json')
.then((response) => response.json())
.then(data => {
    // for main Image
    let htmlData = `
     <img src="${data[thisValue].avatar_url}"/>
    `;
    inputData.innerHTML = htmlData;

    // for full name
    // let htmlDat = `
    //<span> ${data[thisValue].id_name}</span>
    //`;
    //inputname2.innerHTML = htmlDat;
    
    //for social name
    let htmlDa = `
    <h1> ${data[thisValue].id_name}</h1>
    `;
    inputname.innerHTML = htmlDa;

    // social linl
    let htmlfb = `
   <a href="${data[thisValue].social_id}"> ${data[thisValue].id_name}</a>
    `;
    inputfaceLink.innerHTML = htmlfb;


     // email
    let htmlemail = `
   <a > ${data[thisValue].email_name}</a>
    `;
    inputfaceLink2.innerHTML = htmlemail;

    // phonw
     let htmlphone = `
   <a > ${data[thisValue].phone_number}</a>
    `;
    inputfaceLink3.innerHTML = htmlphone;
})
});