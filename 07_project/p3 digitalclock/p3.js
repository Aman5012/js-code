

// const clock = document.getElementById('clock');

// setInterval(function () {
//     let date = new Date();
//     let currentTime = date.toLocaleTimeString();
//     let currentDate = date.toLocaleDateString();
//     clock.innerHTML = `${currentDate} ${currentTime}`;
// }, 1000);


const clock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    let options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    let currentDate = date.toLocaleDateString('en-GB', options); // en-GB locale for day/month/year format
    let currentTime = date.toLocaleTimeString();
    clock.innerHTML = `Date: ${currentDate} </br> Time: ${currentTime}`;
}, 1000);