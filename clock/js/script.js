setInterval(() => {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let hrRot = 30*hour + minute/2; // get the hour pointer to rotate every minute ignore second
    let minRot = 6*minute; // get the minute pointer to rotate every second
    let secRot = 6*second; // get the second pointer to rotate every second
    hr.style.transform = `rotate(${hrRot}deg)`;
    min.style.transform = `rotate(${minRot}deg)`;
    sec.style.transform = `rotate(${secRot}deg)`;
},1000)
// hr.style.transform = `rotate(${0}deg)`;
// min.style.transform = `rotate(${30}deg)`;
// sec.style.transform = `rotate(${45}deg)`;