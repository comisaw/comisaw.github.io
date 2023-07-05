var ret;
function read(num){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://comisaw.github.io/网站/data.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            window.location.replace(data.sites[num].url);
        }
    };
    xhr.send(); 
}
function write(id,data){
    document.getElementById(id).innerHTML=data;
}
function news(num,mod,data){
    if(data.sites[num]=="")return null;
    if(mod="name")return data.sites[num].name;
    else if(mod="url")return data.sites[num].url;
    else return 1;
}
function test0(id,num,mod){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://comisaw.github.io/网站/data.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            if(data.sites[num]=="")document.getElementById(id).innerHTML=null;
            if(mod=="name")document.getElementById(id).innerHTML=data.sites[num].name;
            else if(mod=="url")document.getElementById(id).innerHTML=data.sites[num].url;
            else if(mod=="word")document.getElementById(id).innerHTML=data.sites[num].word;
            else document.getElementById(id).innerHTML=1;
        }
    };
    xhr.send();
}
function test1(){
    fetch('https://comisaw.github.io/网站/data.json')
      .then(response => response.json())
      .then(data => {
        document.getElementById("demo").innerHTML = JSON.stringify(data);
      });
}