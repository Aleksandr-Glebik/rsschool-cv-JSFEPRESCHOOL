# Aleksandr Glebik

***

## Contacts
- **Location:** Grodno, Belarus;
- **Phone:** +375-33-310-61-62;
- **email:** glebikaa@mail.ru;
- **GitHub:** Aleksandr-Glebik;
- **Discord:** glebikaa;

***

## Abut Me

I am 30 years old, last 6 months i study on front end developer and learn english too. This is my second attempt pass the course "JavaScript/Front-end. Stage 0" in RS School, last time i was not able to complete all js tasks, and left the race. All this time I studied on my own and took several courses, this time I plan to take courses RS School completely and find a job.

***
## Skills
- **HTML**;
- **CSS**;
- **JS** (Basic);
- **Git / GitHub**;
- **Figma**;
- **~NodeJS**;
- **~WebPack**;
***

## Education
* **University:** Belarusian State Technological University, specialty "mechanical engineer";
* **Course:**
    * [Web Junior, Dmitry Lavrik.](https://www.youtube.com/watch?v=8i3iTVsdnrg&list=PLyeqauxei6jddpCRnLoQIpkRGxaip5pJ4);
    * [Loyout designer comtetence - HTML, CSS, JavaScript.](https://www.mishanep.com/);
    * [Vanilla JavaScript (2021)](https://www.udemy.com/course/jacascript-for-beginners/);
    * [JavaScript (2021) Complete guide from 0 to pro](https://www.udemy.com/course/javascript-full-guide/);
***
## Code Example

```
const clockContainer = document.getElementById('jsClock')
const clockTitle = clockContainer.querySelector('h1')
const clockDate = clockContainer.querySelector('h2')
function getTime() {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`: seconds}`
}
function getDate() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    clockDate.innerHTML = `${day < 10 ? `0${day}`: day}.${month < 10 ? `0${month}`: month}.${year < 10 ? `0${year}`: year}`
}
function init() {
    setInterval(getTime, 1000)
    getDate()
}
init()
```

***
## Languages
- Russian - Native;
- English - A1 (studying now);
- Polish - A1;
