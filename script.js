function calculateCalories() {
    const steps = document.getElementById('steps').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const minutes = document.getElementById('minutes').value;
    const meters = document.getElementById('meters').value;
    const activity = document.getElementById('activity').value;
  
    let met;
    if (activity === "running") {
        met = 9.8;
    } else if (activity === "walking") {
        met = 3.5;
    } else {
        alert("Please select an activity."); // Basic error handling
        return; // Stop the function
    }
  
    // Calculate calories burned based on steps and weight
    const caloriesFromSteps = (steps * 0.04) * weight;
  
    // Calculate calories burned based on meters and weight
    const caloriesFromMeters = (meters / 1000 ) * (met * 3.5 * weight) / 200 * minutes; // Convert meters to kilometers
  
    const totalCalories = caloriesFromSteps + caloriesFromMeters;
  
    document.getElementById('result').textContent = `You burned approximately ${totalCalories} calories.`;
  }