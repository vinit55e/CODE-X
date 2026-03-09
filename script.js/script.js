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

li.innerHTML = habit.name +
" <button onclick='markDone("+index+")'>Done</button>";

list.appendChild(li);

});

}

function markDone(index){
habits[index].done=true;
updateChart();
}