const entername = document.querySelector('#entername');
const showAlert = document.querySelector('.showAlert');
const imgpath = document.querySelector('.gimg');
const agreebtn = document.querySelector('.agreebtn');
const allquotes = [
    {
        imgurl: 'images/1.png'
    },
    {
        imgurl: 'images/2.jpg'
    },
    {
        imgurl: 'images/3.jpg'
    },
    {
        imgurl: 'images/4.jpg'
    },
    {
        imgurl: 'images/5.jpg'
    },
    {
        imgurl: 'images/6.jpg'
    },
    {
        imgurl: 'images/7.jpg'
    },
    {
        imgurl: 'images/8.jpg'
    },
    {
        imgurl: 'images/9.jpg'
    },
    {
        imgurl: 'images/10.jpg'
    },
    {
        imgurl: 'images/11.jpg'
    },
    {
        imgurl: 'images/12.jpg'
    },
    {
        imgurl: 'images/13.jpg'
    },
    {
        imgurl: 'images/14.jpg'
    },
    {
        imgurl: 'images/15.jpg'
    },
    {
        imgurl: 'images/16.jpg'
    },
    {
        imgurl: 'images/17.jpg'
    },
    {
        imgurl: 'images/18.jpg'
    },
]

const friends = ["Rajkumar", "Azad", "Priyal", "Rashi", "Sadaf fatima", "Devansh", "Sarvesh", "Hariom", "Vibhor", "Shivraj", "Kunal", "Riya", "Jackline", "Joni Sence", "Miya Khlifa", "Radhika", "Khushi", "Diksha", "Raghav"]
// setInterval(() => {
//     friendIndex = Math.floor(Math.random() * friends.length)
// }, 5000);

allquotes.forEach((e) => {
    imgpath.innerHTML += `<img src="${e.imgurl}">`
})



function constract() {
    alert(`Thanks ${entername.value} ! for your opinion`)
}

function showFriend() {

    if (entername.value.toLowerCase() == "azad kumar" || entername.value.toLowerCase() == "azad") {
        showAlert.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Hi ${entername.value} !</strong> Your Best Friend is ponung Mize
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `
      agreebtn.innerHTML = `<button type="button" class="btn btn-success my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
      You Agree?
      </button>`
      speak();
    }
    else if (entername.value.toLowerCase() == "ponung mize" || entername.value.toLowerCase() == "ponung") {
        showAlert.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Hi ${entername.value}! </strong> Your best friend is Azad Kumar
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      agreebtn.innerHTML = `
      <button type="button" class="btn btn-success my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
      You Agree?
      </button>`
      speak();
    }
    else if (entername.value == "") {
        showAlert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Sir! </strong>Enter Your Name Please
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        agreebtn.innerHTML = ``
    }
    else {
        const friendIndex = Math.floor(Math.random() * friends.length)
        showAlert.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Hi ${entername.value}!</strong> Your Best Friend is ${friends[friendIndex]}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `
        agreebtn.innerHTML = ``
    }
}

function speak() {
    const utterance = new SpeechSynthesisUtterance(entername.value.toLowerCase()=="azad"?"Hello azaaad your one of the best friend is ponung mizeee":"Hello ponung your one of the best friend is azad kumar")
    utterance.rate = 0.75;
    speechSynthesis.speak(utterance)
}

// const texts = document.querySelector(".texts");

// window.SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
// recognition.interimResults = true;

// let p = document.createElement("p");

// recognition.addEventListener("result", (e) => {
//     texts.appendChild(p);
//     const text = Array.from(e.results)
//         .map((result) => result[0])
//         .map((result) => result.transcript)
//         .join("");

//     p.innerText = text;
//     if (e.results[0].isFinal) {
//         if (text.includes("how are you")) {
//             p = document.createElement("p");
//             p.classList.add("replay");
//             p.innerText = "I am fine";
//             texts.appendChild(p);
//         }
//         if (
//             text.includes("what's your name") ||
//             text.includes("what is your name")
//         ) {
//             p = document.createElement("p");
//             p.classList.add("replay");
//             p.innerText = "My Name is Cifar";
//             texts.appendChild(p);
//         }
//         if (text.includes("open my YouTube")) {
//             p = document.createElement("p");
//             p.classList.add("replay");
//             p.innerText = "opening youtube channel";
//             texts.appendChild(p);
//             console.log("opening youtube");
//             window.open("https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ");
//         }
//         p = document.createElement("p");
//     }
// });

// recognition.addEventListener("end", () => {
//     recognition.start();
// });

// recognition.start();