function generateRoomId() {
  const id = Math.random().toString(36).substring(2, 8).toUpperCase();
  document.getElementById("room-id").value = id;
}

function joinRoom() {
  const roomId = document.getElementById("room-id").value.trim();

  if (roomId === "") {
    alert("Please enter or generate a room ID.");
    return;
  }

  // Show room ID text
  document.getElementById("room-display").style.display = "block";
  document.getElementById("show-room-id").textContent = roomId;

  // Show game selection area
  document.getElementById("game-selection").style.display = "block";

  // Save room ID for later
  localStorage.setItem("room-id", roomId);
}

function loadGame(gameName) {
  const roomId = localStorage.getItem("room-id");
  if (!roomId) {
    alert("Please join a room first.");
    return;
  }

  const iframe = document.getElementById("game-frame");
  iframe.src = `games/${gameName}.html?room=${roomId}`;
  iframe.style.display = "block";
}
