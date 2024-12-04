document.addEventListener("DOMContentLoaded", () => {
  const yearSelector = document.getElementById("yearSelector");
  if (!yearSelector) {
      console.error("yearSelector element not found");
      return;
  }

  yearSelector.addEventListener("change", () => {
      loadStats(yearSelector.value);
      //alert(yearSelector.value);
  });
});

function loadStats(file) {
  var dir = "../json/";

  fetch(dir+file)
      .then((response) => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then((data) => {
          const tableBody = document.querySelector("#statsTable tbody");
          tableBody.innerHTML = ""; // Clear the table body
          data.players.forEach((player) => {
              const row = document.createElement("tr");
              row.innerHTML = `
          <td>${player.name}</td>
          <td>${player.PTS}</td>
          <td>${player["PTS/G"]}</td>
          <td>${player.FG_FGA}</td>
          <td>${player["FG%"]}</td>
          <td>${player["3FG_FGA"]}</td>
          <td>${player["3PT%"]}</td>
          <td>${player.FT_FTA}</td>
          <td>${player["FT%"]}</td>
          <td>${player.AST}</td>
          <td>${player.STL}</td>
          <td>${player.BLO}</td>
          <td>${player.REB}</td>
        `;
              tableBody.appendChild(row);
          });
      })
      .catch((error) => {
          console.error("Error loading stats:", error);
      });
}
