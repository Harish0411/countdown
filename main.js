let x = setInterval(() =>{

let day = document.getElementById('days');
let hr = document.getElementById('hrs')
let mini = document.getElementById('mini')
let sec = document.getElementById('sec')

// getting current date & counter date in milliseconds

let counterDate = new Date('Apr 15, 2023 12:00:00 AM').getTime();

let currentDate = new Date().getTime();

// differnce in milliseconds

let difference = counterDate - currentDate;

// remaining days differnce

var days = Math.floor(difference / (1000*60*60*24));
days = days<10 ? '0'+days : days;

// remaining hours differnce

var hours = Math.floor((difference % (1000*60*60*24)) / (1000*60*60));
hours = hours<10 ? '0'+hours : hours;

// remaining minutes differnce

var minutes = Math.floor((difference % (1000*60*60)) / (1000*60));
minutes = minutes<10 ? '0'+minutes : minutes;

// remaining seconds differnce

var seconds = Math.floor((difference % (1000*60)) / 1000);
seconds = seconds<10 ? '0'+seconds : seconds;

// show result

day.innerText = days;
hr.innerText = hours;
mini.innerText = minutes;
sec.innerText = seconds;

if(difference<0){
    clearInterval(x);
    document.getElementById('result').innerText = 'EXPIRED';
}

},1000)





