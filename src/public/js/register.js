const loginButton = document.querySelector("#login");

loginButton.addEventListener("click", () => {
  const user = document.querySelector("#username").value;

  if (!user) {
    alert("Please enter a username");
  } else {
    document.cookie = `username=${user}`
    window.location.href = "/";
  }
});