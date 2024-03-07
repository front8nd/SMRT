const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
document.querySelector(".time").innerText = formattedTime;
