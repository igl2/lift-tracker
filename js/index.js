fetch('./json/workoutplans.json').then(response => {
  return response.json();
}).then(data => {
  console.log(data);
  let jsonStringA = JSON.stringify(data.bodybuildingWorkoutPlan[0].day +
    "\n" + data.bodybuildingWorkoutPlan[0].workoutType +
    "\n" + data.bodybuildingWorkoutPlan[0].workout1 +
    "\n" + data.bodybuildingWorkoutPlan[0].workout2 +
    "\n" + data.bodybuildingWorkoutPlan[0].workout3 +
    "\n" + data.bodybuildingWorkoutPlan[0].workout4 +
    "\n" + data.bodybuildingWorkoutPlan[0].workout5 +
    "\n" + data.bodybuildingWorkoutPlan[0].workout6 +
    "\n" +
    "\n" + data.bodybuildingWorkoutPlan[1].day +
    "\n" + data.bodybuildingWorkoutPlan[1].workoutType +
    "\n" + data.bodybuildingWorkoutPlan[1].workout1 +
    "\n" + data.bodybuildingWorkoutPlan[1].workout2 +
    "\n" + data.bodybuildingWorkoutPlan[1].workout3 +
    "\n" + data.bodybuildingWorkoutPlan[1].workout4 +
    "\n" + data.bodybuildingWorkoutPlan[1].workout5 +
    "\n" + data.bodybuildingWorkoutPlan[1].workout6 +
    "\n" + data.bodybuildingWorkoutPlan[1].workout7 +
    "\n" + data.bodybuildingWorkoutPlan[1].workout8 +
    "\n" + data.bodybuildingWorkoutPlan[1].workout9 +
    "\n" + data.bodybuildingWorkoutPlan[1].workout10 +
    "\n" +
    "\n" + data.bodybuildingWorkoutPlan[2].day +
    "\n" + data.bodybuildingWorkoutPlan[2].workoutType +
    "\n" + data.bodybuildingWorkoutPlan[2].workout1 +
    "\n" + data.bodybuildingWorkoutPlan[2].workout2 +
    "\n" + data.bodybuildingWorkoutPlan[2].workout3 +
    "\n" + data.bodybuildingWorkoutPlan[2].workout4 +
    "\n" + data.bodybuildingWorkoutPlan[2].workout5 +
    "\n" + data.bodybuildingWorkoutPlan[2].workout6 +
    "\n" + data.bodybuildingWorkoutPlan[2].workout7 +
    "\n" + data.bodybuildingWorkoutPlan[2].workout8 +
    "\n" + data.bodybuildingWorkoutPlan[2].workout9 +
    "\n" +
    "\n" + data.bodybuildingWorkoutPlan[3].day +
    "\n" + data.bodybuildingWorkoutPlan[3].workoutType +
    "\n" + data.bodybuildingWorkoutPlan[3].workout1 +
    "\n" + data.bodybuildingWorkoutPlan[3].workout2 +
    "\n" + data.bodybuildingWorkoutPlan[3].workout3 +
    "\n" + data.bodybuildingWorkoutPlan[3].workout4 +
    "\n" + data.bodybuildingWorkoutPlan[3].workout5 +
    "\n" + data.bodybuildingWorkoutPlan[3].workout6 +
    "\n" + data.bodybuildingWorkoutPlan[3].workout7 +
    "\n" + data.bodybuildingWorkoutPlan[3].workout8 +
    "\n" + data.bodybuildingWorkoutPlan[3].workout9
  );
  let jsonStringB = JSON.stringify(data.strengthWorkoutPlan[0].day +
    "\n" + data.strengthWorkoutPlan[0].workoutType +
    "\n" + data.strengthWorkoutPlan[0].workout1 +
    "\n" + data.strengthWorkoutPlan[0].workout2 +
    "\n" + data.strengthWorkoutPlan[0].workout3 +
    "\n" + data.strengthWorkoutPlan[0].workout4 +
    "\n" + data.strengthWorkoutPlan[0].workout5 +
    "\n" + data.strengthWorkoutPlan[0].workout6 +
    "\n" + data.strengthWorkoutPlan[0].workout7 +
    "\n" + data.strengthWorkoutPlan[0].workout8 +
    "\n" +
    "\n" + data.strengthWorkoutPlan[1].day +
    "\n" + data.strengthWorkoutPlan[1].workoutType +
    "\n" + data.strengthWorkoutPlan[1].workout1 +
    "\n" + data.strengthWorkoutPlan[1].workout2 +
    "\n" + data.strengthWorkoutPlan[1].workout3 +
    "\n" + data.strengthWorkoutPlan[1].workout4 +
    "\n" + data.strengthWorkoutPlan[1].workout5 +
    "\n" + data.strengthWorkoutPlan[1].workout6 +
    "\n" + data.strengthWorkoutPlan[1].workout7 +
    "\n" + data.strengthWorkoutPlan[1].workout8 +
    "\n" + data.strengthWorkoutPlan[1].workout9 +
    "\n" + data.strengthWorkoutPlan[1].workout10 +
    "\n" +
    "\n" + data.strengthWorkoutPlan[2].day +
    "\n" + data.strengthWorkoutPlan[2].workoutType +
    "\n" + data.strengthWorkoutPlan[2].workout1 +
    "\n" + data.strengthWorkoutPlan[2].workout2 +
    "\n" + data.strengthWorkoutPlan[2].workout3 +
    "\n" + data.strengthWorkoutPlan[2].workout4 +
    "\n" + data.strengthWorkoutPlan[2].workout5 +
    "\n" + data.strengthWorkoutPlan[2].workout6 +
    "\n" + data.strengthWorkoutPlan[2].workout7 +
    "\n" + data.strengthWorkoutPlan[2].workout8 +
    "\n" + data.strengthWorkoutPlan[2].workout9 +
    "\n" + data.strengthWorkoutPlan[2].workout10);
  let jsonStringC = JSON.stringify(data.functionalWorkoutPlan[0].day +
    "\n" + data.functionalWorkoutPlan[0].workoutType +
    "\n" + data.functionalWorkoutPlan[0].workout1 +
    "\n" + data.functionalWorkoutPlan[0].workout2 +
    "\n" + data.functionalWorkoutPlan[0].workout3 +
    "\n" + data.functionalWorkoutPlan[0].workout4 +
    "\n" + data.functionalWorkoutPlan[0].workout5 +
    "\n" + data.functionalWorkoutPlan[0].workout6 +
    "\n" +
    "\n" + data.functionalWorkoutPlan[1].day +
    "\n" + data.functionalWorkoutPlan[1].workoutType +
    "\n" + data.functionalWorkoutPlan[1].workout1 +
    "\n" + data.functionalWorkoutPlan[1].workout2 +
    "\n" + data.functionalWorkoutPlan[1].workout3 +
    "\n" + data.functionalWorkoutPlan[1].workout4 +
    "\n" + data.functionalWorkoutPlan[1].workout5 +
    "\n" +
    "\n" + data.functionalWorkoutPlan[2].day +
    "\n" + data.functionalWorkoutPlan[2].workoutType +
    "\n" + data.functionalWorkoutPlan[2].workout1 +
    "\n" + data.functionalWorkoutPlan[2].workout2 +
    "\n" + data.functionalWorkoutPlan[2].workout3 +
    "\n" + data.functionalWorkoutPlan[2].workout4 +
    "\n" + data.functionalWorkoutPlan[2].workout5
  );
  document.querySelector("#bodybuilding-workouts").innerText = JSON.parse(jsonStringA);
  document.querySelector("#strength-workouts").innerText = JSON.parse(jsonStringB);
  document.querySelector("#functional-workouts").innerText = JSON.parse(jsonStringC);
}).catch(err => {
  console.log(err);
});

//Add Exercise Button
function addExercise() {
  let table = document.getElementById("add-workout-table");
  let trackWorkoutAlert = document.getElementById("track-workout-alert");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  cell1.innerHTML = document.getElementById("workout-name-input").value;
  cell2.innerHTML = document.getElementById("sets-input").value;
  cell3.innerHTML = document.getElementById("reps-input").value;
  cell4.innerHTML = document.getElementById("weight-input").value;
  if (cell1.innerHTML === "" || cell2.innerHTML === "" || cell3.innerHTML === "" || cell4.innerHTML === "") {
    trackWorkoutAlert.style.display = 'block';
    row = table.deleteRow(-1);
  }
}

//Remove Last Exercise Button
function removeLastExercise() {
  let table = document.getElementById("add-workout-table");
  let rowCount = table.rows.length;
  for (let i = rowCount - 1; i > 1; i++) {
    table.deleteRow(i);
  }
}

//Clear Exercise Button
function clearExercise() {
  let table = document.getElementById("add-workout-table");
  let rowCount = table.rows.length;
  for (let i = rowCount - 1; i > 1; i--) {
    table.deleteRow(i);
  }
}
