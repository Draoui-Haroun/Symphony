const nextEl  = document.querySelector(".business-next");
const prevEl  = document.querySelector(".business-prev");
const imgsEl  = document.querySelectorAll(".business-images img");
const imageContainerEl  = document.querySelector(".business-images");

let currentImg = 1;
let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg1();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg1();
});

function updateImg1() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 740}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg1();
  }, 5000);
}
updateImg1();



const weddingNext = document.querySelector(".wedding-next");
const weddingPrev = document.querySelector(".wedding-prev");
const weddingImgs = document.querySelectorAll(".wedding-images img");
const weddingContainer = document.querySelector(".wedding-images");

let weddingIndex  = 1;
let weddingTimeout;

weddingNext.addEventListener("click", () => {
  weddingIndex ++;
  clearTimeout(weddingTimeout);
  updateImg2();
});

weddingPrev.addEventListener("click", () => {
  weddingIndex --;
  clearTimeout(weddingTimeout);
  updateImg2();
});

updateImg2();

function updateImg2() {
  if (weddingIndex  > weddingImgs.length) {
    weddingIndex  = 1;
  } else if (weddingIndex  < 1) {
    weddingIndex  = weddingImgs.length;
  }
  weddingContainer.style.transform = `translateX(-${(weddingIndex  - 1) * 740}px)`;
  weddingTimeout = setTimeout(() => {
    weddingIndex ++;
    updateImg2();
  }, 5000);
}


const casualNext = document.querySelector(".casual-next");
const casualPrev = document.querySelector(".casual-prev");
const casualImgs = document.querySelectorAll(".casual-images img");
const casualContainer = document.querySelector(".casual-images");

let casualIndex  = 1;
let casualTimeout;

casualNext.addEventListener("click", () => {
  casualIndex ++;
  clearTimeout(casualTimeout);
  updateImg3();
});

casualPrev.addEventListener("click", () => {
  casualIndex --;
  clearTimeout(casualTimeout);
  updateImg3();
});

updateImg3();

function updateImg3() {
  if (casualIndex  > casualImgs.length) {
    casualIndex  = 1;
  } else if (casualIndex  < 1) {
    casualIndex  = casualImgs.length;
  }
  casualContainer.style.transform = `translateX(-${(casualIndex  - 1) * 740}px)`;
  casualTimeout = setTimeout(() => {
    casualIndex ++;
    updateImg3();
  }, 5000);
}



const tuxedosNext = document.querySelector(".tuxedos-next");
const tuxedosPrev = document.querySelector(".tuxedos-prev");
const tuxedosImgs = document.querySelectorAll(".tuxedos-images img");
const tuxedosContainer = document.querySelector(".tuxedos-images");

let tuxedosIndex  = 1;
let tuxedosTimeout;

tuxedosNext.addEventListener("click", () => {
  tuxedosIndex ++;
  clearTimeout(tuxedosTimeout);
  updateImg4();
});

tuxedosPrev.addEventListener("click", () => {
  tuxedosIndex --;
  clearTimeout(tuxedosTimeout);
  updateImg4();
});

updateImg4();

function updateImg4() {
  if (tuxedosIndex  > tuxedosImgs.length) {
    tuxedosIndex  = 1;
  } else if (tuxedosIndex  < 1) {
    tuxedosIndex  = tuxedosImgs.length;
  }
  tuxedosContainer.style.transform = `translateX(-${(tuxedosIndex  - 1) * 740}px)`;
  tuxedosTimeout = setTimeout(() => {
    tuxedosIndex ++;
    updateImg4();
  }, 5000);
}


const threePieceNext = document.querySelector(".three-piece-next");
const threePiecePrev = document.querySelector(".three-piece-prev");
const threePieceImgs = document.querySelectorAll(".three-piece-images img");
const threePieceContainer = document.querySelector(".three-piece-images");

let threePieceIndex  = 1;
let threePieceTimeout;

threePieceNext.addEventListener("click", () => {
  threePieceIndex ++;
  clearTimeout(threePieceTimeout);
  updateImg5();
});

threePiecePrev.addEventListener("click", () => {
  threePieceIndex --;
  clearTimeout(threePieceTimeout);
  updateImg5();
});

updateImg5();

function updateImg5() {
  if (threePieceIndex  > threePieceImgs.length) {
    threePieceIndex  = 1;
  } else if (threePieceIndex  < 1) {
    threePieceIndex  = threePieceImgs.length;
  }
  threePieceContainer.style.transform = `translateX(-${(threePieceIndex  - 1) * 740}px)`;
  threePieceTimeout = setTimeout(() => {
    threePieceIndex ++;
    updateImg5();
  }, 5000);
}

