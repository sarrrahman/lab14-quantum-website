document.getElementById("quantum-btn").addEventListener("click", function() {
    const states = ["State 0", "State 1", "Superposition (0 and 1 simultaneously)"];
    const randomState = states[Math.floor(Math.random() * states.length)];
    
    document.getElementById("result-msg").innerHTML = "<strong>Measured Qubit State:</strong> " + randomState;
});
