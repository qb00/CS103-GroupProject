//zach
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

let hour = today.getHours();
let min = today.getMinutes();
let ampm;

if (hour <12) {
    ampm = "AM"

    if (hour < 10 && hour !== 0) {
        hour = "0" + hour;
    }

    if (hour === 0) {
        hour = 12;
    }
}

else{
    ampm="PM";

    if(hour-12<10 && hour-12!==0){
        hour="0"+(hour-12);
    }

    else if(hour-12>=10){
        hour=hour-12;
    }

    else{
        hour=12;
    }
}

if(min<10){
    min = "0"+min;
}

let time = hour + ":" + min;

document.getElementById("time-date").innerHTML =
    `
        <h3>${time + ampm}</h3>
        <h5>${month + "/" + day + "/" + year}</h5>
    `
;

//arya
const observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hideThis');
hiddenElements.forEach((el) => observe.observe(el));
