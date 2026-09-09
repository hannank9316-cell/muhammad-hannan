// Apna Instagram username yahan likhen, jaise: "muhammadhannan"
const instagramUsername = "muhammad_hannan332";

const instagramLink = document.querySelector("#instagramLink");
const profileNote = document.querySelector("#profileNote");

if (instagramUsername.trim()) {
  instagramLink.href = `https://www.instagram.com/${instagramUsername.trim()}/`;
  profileNote.textContent = `@${instagramUsername.trim()} ka Instagram profile khulega`;
}
