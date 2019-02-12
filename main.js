function isText(){
    const element = document.getElementById('save');
    const text = document.getElementById('textarea').value;
    if(text){
        element.disabled=false;
    }else{
        element.disabled=true;
    }
}

function setTodaysDate(){
    var dateControl = document.getElementById('datepicker');
    var title = document.getElementById('titlebar');
    var MyDate = new Date();
    var MyDateString;
    MyDate.setDate(MyDate.getDate());
    MyDateString =  MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
    dateControl.value = MyDateString.toString();

    //setup the header
    text = MyDateString.toString();
    var h1 = document.createElement('h1');
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    h1.appendChild(document.createTextNode(n + ' ' + text));
    document.body.prepend(h1);

}

function postMethod(content, date){
    let url = 'http://83f0e169.ngrok.io/entry';
    let body = { 'name': content, 'Created_date': date}
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-type', 'application/json')

    console.log(JSON.stringify(body))
    xhr.send(JSON.stringify(body))
    xhr.onload = function() {
        //throw error or do nothing
        //alert(xhr.responseText)
    }
}

function getMethod(){
    document.getElementById('textarea').value='';
    let url = 'http://83f0e169.ngrok.io/entry';
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()
    return xhr.onload = function() {
        let text = JSON.parse(xhr.responseText);
        let needle = document.getElementById('datepicker').value;
        let d = new Date(needle).toISOString()
        text.forEach(function (element, index) {
            if(element['Created_date'] === d){
                document.getElementById('textarea').value = element.name;
            }
        })
    }

}


function saveContent(){
    var date = document.getElementById('datepicker').value;
    const content = document.getElementById('textarea').value;
    const element = document.getElementById('save');
    if(text && !element.disabled){
        postMethod(content, date);
    }else{
        //throw error or do nothing
        console.log(content);
        console.log(date);
        console.log(element.disabled);
    }
}
