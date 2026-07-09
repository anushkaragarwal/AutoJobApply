const API="http://localhost:3000";

async function loginLinkedIn(){

const res=await fetch(API+"/linkedin/login");

const data=await res.json();

document.getElementById("output").textContent=
JSON.stringify(data,null,2);

}

async function searchJobs(){

const res=await fetch(API+"/linkedin/search");

const data=await res.json();

document.getElementById("output").textContent=
JSON.stringify(data,null,2);

}

async function sendEmail(){

const email=document.getElementById("email").value;

const res=await fetch(API+"/email/send?email="+encodeURIComponent(email));

const data=await res.json();

document.getElementById("output").textContent=
JSON.stringify(data,null,2);

}