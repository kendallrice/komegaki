if (sessionStorage.theme) {
  document.getElementById('stylesheet').href = sessionStorage.theme; 
  }
else {}

function changeTheme(newTheme)
{
  document.getElementById('stylesheet').href = newTheme;
  sessionStorage.theme = newTheme;
}