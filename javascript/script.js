// btn one
document.getElementById("btn-one").addEventListener("click", function () {
    const mainAssigned = getInputTextId ("assigned");
    const mainTask = getInputTextId ("task-completed");
    alert("Board updated Successfully");
    this.disabled = true;
    this.classList.add("bg-gray-300", "cursor-not-allowed");
    const sub = mainAssigned - 1;
    const sum = mainTask + 1;
    document.getElementById("assigned").innerText = sub;
    document.getElementById("task-completed").innerText = sum;

    let now = new Date();
    let timeString = now.toLocaleTimeString();
    let comment = document.createElement("div");
    comment.className = "bg-gray-200 p-3 rounded-md px-4 font-light mx-3";
    comment.innerHTML = `You have completed the task Fix Mobile Button Issue<p>at ${timeString}</p>`;
    document.getElementById("comment-section").appendChild(comment);

    checkBothDisabled();
});

// btn-two

document.getElementById("btn-two").addEventListener("click", function () {
    const mainAssigned = getInputTextId ("assigned");
    const mainTask = getInputTextId ("task-completed");
    alert("Board updated Successfully");
    this.disabled = true;
    this.classList.add("bg-gray-300", "cursor-not-allowed");
    const sub = mainAssigned - 1;
    const sum = mainTask + 1;
    document.getElementById("assigned").innerText = sub;
    document.getElementById("task-completed").innerText = sum;

    let now = new Date();
    let timeString = now.toLocaleTimeString();
    let comment = document.createElement("div");
    comment.className = "bg-gray-200 p-3 rounded-md px-4 font-light mx-3";
    comment.innerHTML = `You have completed the task Add Dark Mode<p>at ${timeString}</p>`;
    document.getElementById("comment-section").appendChild(comment);

    checkBothDisabled();
});

// btn-three

document.getElementById("btn-three").addEventListener("click", function () {
    const mainAssigned = getInputTextId ("assigned");
    const mainTask = getInputTextId ("task-completed");
    alert("Board updated Successfully");
    this.disabled = true;
    this.classList.add("bg-gray-300", "cursor-not-allowed");
    const sub = mainAssigned - 1;
    const sum = mainTask + 1;
    document.getElementById("assigned").innerText = sub;
    document.getElementById("task-completed").innerText = sum;

    let now = new Date();
    let timeString = now.toLocaleTimeString();
    let comment = document.createElement("div");
    comment.className = "bg-gray-200 p-3 rounded-md px-4 font-light mx-3";
    comment.innerHTML = `You have completed the task Optimize Home page <p>at ${timeString}</p>`;
    document.getElementById("comment-section").appendChild(comment);

    checkBothDisabled();
});

// btn-four

document.getElementById("btn-four").addEventListener("click", function () {
    const mainAssigned = getInputTextId ("assigned");
    const mainTask = getInputTextId ("task-completed");
    alert("Board updated Successfully");
    this.disabled = true;
    this.classList.add("bg-gray-300", "cursor-not-allowed");
    const sub = mainAssigned - 1;
    const sum = mainTask + 1;
    document.getElementById("assigned").innerText = sub;
    document.getElementById("task-completed").innerText = sum;

    let now = new Date();
    let timeString = now.toLocaleTimeString();
    let comment = document.createElement("div");
    comment.className = "bg-gray-200 p-3 rounded-md px-4 font-light mx-3";
    comment.innerHTML = `You have completed the task Add new emoji 🤲<p>at ${timeString}</p>`;
    document.getElementById("comment-section").appendChild(comment);

    checkBothDisabled();
});

// btn-five

document.getElementById("btn-five").addEventListener("click", function () {
    const mainAssigned = getInputTextId ("assigned");
    const mainTask = getInputTextId ("task-completed");
    alert("Board updated Successfully");
    this.disabled = true;
    this.classList.add("bg-gray-300", "cursor-not-allowed");
    const sub = mainAssigned - 1;
    const sum = mainTask + 1;
    document.getElementById("assigned").innerText = sub;
    document.getElementById("task-completed").innerText = sum;

    let now = new Date();
    let timeString = now.toLocaleTimeString();
    let comment = document.createElement("div");
    comment.className = "bg-gray-200 p-3 rounded-md px-4 font-light mx-3";
    comment.innerHTML = `You have completed the task Integrate OpenAI API<p>at ${timeString}</p>`;
    document.getElementById("comment-section").appendChild(comment);

    checkBothDisabled();
});

// btn-six

document.getElementById("btn-six").addEventListener("click", function () {
    const mainAssigned = getInputTextId ("assigned");
    const mainTask = getInputTextId ("task-completed");
    alert("Board updated Successfully");
    this.disabled = true;
    this.classList.add("bg-gray-300", "cursor-not-allowed");
    const sub = mainAssigned - 1;
    const sum = mainTask + 1;
    document.getElementById("assigned").innerText = sub;
    document.getElementById("task-completed").innerText = sum;

    let now = new Date();
    let timeString = now.toLocaleTimeString();
    let comment = document.createElement("div");
    comment.className = "bg-gray-200 p-3 rounded-md px-4 font-light mx-3";
    comment.innerHTML = `You have completed the task Improve Job searching<p>at ${timeString}</p>`;
    document.getElementById("comment-section").appendChild(comment);

    checkBothDisabled();
});

function checkBothDisabled() {
    const btnOne = document.getElementById("btn-one");
    const btnTwo = document.getElementById("btn-two");
    const btnThree = document.getElementById("btn-three");
    const btnFour = document.getElementById("btn-four");
    const btnFive = document.getElementById("btn-five");
    const btnSix = document.getElementById("btn-six");

    if (btnOne.disabled && btnTwo.disabled && btnThree.disabled && btnFour.disabled && btnFive.disabled && btnSix.disabled) {
        alert('congrates!!! You have completed all the current task');
    }
};

document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("comment-section").innerHTML = "";
});

document.getElementById("btn-change-bg").addEventListener("click", function () {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});