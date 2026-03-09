let habits = [];

function addHabit(){
let habitInput = document.getElementById("habitInput");
let habit = habitInput.value;

habits.push({name:habit,done:false});

displayHabits();

habitInput.value="";
}

function displayHabits(){
let list = document.getElementById("habitList");
list.innerHTML="";

habits.forEach((habit,index)=>{

let li = document.createElement("li");

let status = habit.done ? " (Done ✓)" : "";
li.innerHTML = habit.name + status;

if (!habit.done) {
    li.innerHTML += " <button onclick='markDone("+index+")'>Done</button>";
}

// Add animation delay for staggered effect
li.style.animationDelay = (index * 0.1) + 's';

if (habit.done) {
    li.style.opacity = '0.6';
    li.style.textDecoration = 'line-through';
}

list.appendChild(li);

});

}

function markDone(index){
habits[index].done=true;
displayHabits();
updateChart();
}