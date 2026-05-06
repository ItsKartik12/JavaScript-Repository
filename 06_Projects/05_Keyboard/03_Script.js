window.addEventListener("keydown", (event) => {
  // This stops the spacebar from scrolling the page down
  if (event.key === " ") {
    event.preventDefault();
  }

  const keyName = event.key === " " ? "Space" : event.key;

  insert.innerHTML = `
    <div class='key'>
      <table>
        <tr>
          <th>Key</th>
          <th>Keycode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${keyName}</td>
          <td>${event.keyCode}</td>
          <td>${event.code}</td>
        </tr>
      </table>
    </div>`;
});