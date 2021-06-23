const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
let regFormFn = document.getElementById('regForm');
regFormFn.addEventListener('click', regform);

function validate() {
  // POETRY-SHAYRI
  if (document.getElementById('event').value == 'POETRY-SHAYRI') {
    document.getElementById('language').style.display = 'block';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // STANDUP
  else if (document.getElementById('event').value == 'STANDUP') {
    document.getElementById('language').style.display = 'block';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'block';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // NAIL-ART
  else if (document.getElementById('event').value == 'NAIL-ART') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // DEBATE
  else if (document.getElementById('event').value == 'DEBATE') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'block';
    document.getElementById('topic').style.display = 'block';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // POSTER
  else if (document.getElementById('event').value == 'POSTER') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'block';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  //SKRIBBLE
  else if (document.getElementById('event').value == 'POSTER') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // MASK-PAINTING
  else if (document.getElementById('event').value == 'MASK-PAINTING') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // MUSIC
  else if (document.getElementById('event').value == 'MUSIC') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // DANCE
  else if (document.getElementById('event').value == 'DANCE') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // PHOTOGRAPHY
  else if (document.getElementById('event').value == 'PHOTOGRAPHY') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // SCI-PROJECT
  else if (document.getElementById('event').value == 'SCI-PROJECT') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'block';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // ELOCUTION
  else if (document.getElementById('event').value == 'ELOCUTION') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'block';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // CODING
  else if (document.getElementById('event').value == 'CODING') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'block';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // INSTRUMENT
  else if (document.getElementById('event').value == 'INSTRUMENT') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'block';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // QUIZ
  else if (document.getElementById('event').value == 'QUIZ') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // BGMI
  else if (document.getElementById('event').value == 'BGMI') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'block';
    document.getElementById('chessid').style.display = 'none';
  }
  // CHALK
  else if (document.getElementById('event').value == 'CHALK') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'none';
  }
  // CHESS
  else if (document.getElementById('event').value == 'CHESS') {
    document.getElementById('language').style.display = 'none';
    document.getElementById('proagainst').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('codelang').style.display = 'none';
    document.getElementById('instrument').style.display = 'none';
    document.getElementById('characterid').style.display = 'none';
    document.getElementById('chessid').style.display = 'block';
  }
}