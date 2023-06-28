// let card = document.getElementsByClassName("flip-card")
// card.addEventListener("click" , supers)

// let card = document.getElementById("main")
// card.addEventListener("click", supers)
// let image = document.getElementsByClassName("secondkpage.html")

//   function supers() {
//     console.log(1);
//     image.style.display = "black"
//   }

let card = document.getElementById("main");
card.addEventListener("click", supers);
const audio1 = document.querySelector(".flip");
let movesCount = 0; // Initialize moves count

function updateMoves() {
  const movesElement = document.querySelector(".Moves");
  movesElement.textContent = `Moves: ${movesCount}`;
}

function supers() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back");
  if (image) {
    card.style.display = "none";
    image.style.display = "block";
  }
}

let card1 = document.getElementById("main1");
card1.addEventListener("click", supers1);

function supers1() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back1"); 
  if (image) {
    card1.style.display = "none";
    image.style.display = "block"; 
  }
}

let card2 = document.getElementById("main2");
card2.addEventListener("click", supers2);

function supers2() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back2"); 
  if (image) {
    card2.style.display = "none";
    image.style.display = "block"; 
  }
}

let card3 = document.getElementById("main3");
card3.addEventListener("click", supers3);

function supers3() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back3"); 
  if (image) {
    card3.style.display = "none";
    image.style.display = "block"; 
  }
}


let card4 = document.getElementById("main4");
card4.addEventListener("click", supers4);

function supers4() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back4"); 
  if (image) {
    card4.style.display = "none";
    image.style.display = "block"; 
  }
}

let card5 = document.getElementById("main5");
card5.addEventListener("click", supers5);

function supers5() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back5"); 
  if (image) {
    card5.style.display = "none";
    image.style.display = "block"; 
  }
}

let card6 = document.getElementById("main6");
card6.addEventListener("click", supers6);

function supers6() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back6"); 
  if (image) {
    card6.style.display = "none";
    image.style.display = "block"; 
  }
}


let card7 = document.getElementById("main7");
card7.addEventListener("click", supers7);

function supers7() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back7"); 
  if (image) {
    card7.style.display = "none";
    image.style.display = "block"; 
  }
}

let card8 = document.getElementById("main8");
card8.addEventListener("click", supers8);

function supers8() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back8"); 
  if (image) {
    card8.style.display = "none";
    image.style.display = "block"; 
  }
}

let card9 = document.getElementById("main9");
card9.addEventListener("click", supers9);

function supers9() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back9"); 
  if (image) {
    card9.style.display = "none";
    image.style.display = "block"; 
  }
}



let card10 = document.getElementById("main10");
card10.addEventListener("click", supers10);

function supers10() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back10"); 
  if (image) {
    card10.style.display = "none";
    image.style.display = "block"; 
  }
}

let card11 = document.getElementById("main11");
card11.addEventListener("click", supers11);

function supers11() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back11"); 
  if (image) {
    card11.style.display = "none";
    image.style.display = "block"; 
  }
}

let card12 = document.getElementById("main12");
card12.addEventListener("click", supers12);

function supers12() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back12"); 
  if (image) {
    card12.style.display = "none";
    image.style.display = "block"; 
  }
}


let card13 = document.getElementById("main13");
card13.addEventListener("click", supers13);

function supers13() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back13"); 
  if (image) {
    card13.style.display = "none";
    image.style.display = "block"; 
  }
}


let card14 = document.getElementById("main14");
card14.addEventListener("click", supers14);

function supers14() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back14"); 
  if (image) {
    card14.style.display = "none";
    image.style.display = "block"; 
  }
}



let card15 = document.getElementById("main15");
card15.addEventListener("click", supers15);

function supers15() {
  movesCount++; // Increment moves count
  updateMoves(); // Update moves display
  audio1.play();
  
  let image = document.querySelector(".flip-card-back15"); 
  if (image) {
    card15.style.display = "none";
    image.style.display = "block"; 
  }
}


// Update moves count initially
updateMoves();
