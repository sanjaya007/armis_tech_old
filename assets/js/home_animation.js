$(window).on("load", function () {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  // head vector
  const headBox = document.querySelector(".head-container");

  const headVectorBall = document.querySelector(".head-vector-ball");
  const headVectorPlus = document.querySelector(".head-vector-plus");
  const headVectorCircle = document.querySelector(".head-vector-circle");
  const headVectorSquare = document.querySelector(".head-vector-square");
  const headVectorImageFirst = document.querySelector(
    ".head-vector-image-first"
  );
  const headVectorImageSecond = document.querySelector(
    ".head-vector-image-second"
  );

  let headBoxWidth = headBox.getBoundingClientRect().width;
  let headBoxHeight = headBox.getBoundingClientRect().height;

  // ball
  let headVectorBallSpeedX = 1;
  let headVectorBallSpeedY = 1;
  let headVectorBallPositionX = 0;
  let headVectorBallPositionY = 0;

  function moveHeadVectorBall() {
    headVectorBallPositionX += headVectorBallSpeedX;
    headVectorBallPositionY += headVectorBallSpeedY;

    if (
      headVectorBallPositionX >= headBoxWidth ||
      headVectorBallPositionX <= 0
    ) {
      headVectorBallSpeedX *= -1;
    }

    if (
      headVectorBallPositionY >= headBoxHeight ||
      headVectorBallPositionY <= 0
    ) {
      headVectorBallSpeedY *= -1;
    }

    headVectorBall.style.left = headVectorBallPositionX + "px";
    headVectorBall.style.top = headVectorBallPositionY + "px";

    requestAnimationFrame(moveHeadVectorBall);
  }
  moveHeadVectorBall();

  // plus
  let headVectorPlusSpeedX = 0.5;
  let headVectorPlusSpeedY = 0.5;
  let headVectorPlusPositionX = headBoxWidth;
  let headVectorPlusPositionY = headBoxHeight;

  function moveHeadVectorPlus() {
    headVectorPlusPositionX -= headVectorPlusSpeedX;
    headVectorPlusPositionY -= headVectorPlusSpeedY;

    if (
      headVectorPlusPositionX >= headBoxWidth ||
      headVectorPlusPositionX <= 0
    ) {
      headVectorPlusSpeedX *= -1;
    }

    if (
      headVectorPlusPositionY >= headBoxHeight ||
      headVectorPlusPositionY <= 0
    ) {
      headVectorPlusSpeedY *= -1;
    }

    headVectorPlus.style.left = headVectorPlusPositionX + "px";
    headVectorPlus.style.top = headVectorPlusPositionY + "px";

    requestAnimationFrame(moveHeadVectorPlus);
  }
  moveHeadVectorPlus();

  // image first
  let headVectorImageFirstSpeedX = 0.8;
  let headVectorImageFirstSpeedY = 0.8;
  let headVectorImageFirstPositionX = headBoxWidth / 1.5;
  let headVectorImageFirstPositionY = headBoxHeight / 1.5;

  function moveHeadVectorImageFirst() {
    headVectorImageFirstPositionX -= headVectorImageFirstSpeedX;
    headVectorImageFirstPositionY -= headVectorImageFirstSpeedY;

    if (
      headVectorImageFirstPositionX >= headBoxWidth ||
      headVectorImageFirstPositionX <= 0
    ) {
      headVectorImageFirstSpeedX *= -1;
    }

    if (
      headVectorImageFirstPositionY >= headBoxHeight ||
      headVectorImageFirstPositionY <= 0
    ) {
      headVectorImageFirstSpeedY *= -1;
    }

    headVectorImageFirst.style.left = headVectorImageFirstPositionX + "px";
    headVectorImageFirst.style.top = headVectorImageFirstPositionY + "px";

    requestAnimationFrame(moveHeadVectorImageFirst);
  }
  moveHeadVectorImageFirst();

  // image second
  let headVectorImageSecondSpeedX = 0.3;
  let headVectorImageSecondSpeedY = 0.3;
  let headVectorImageSecondPositionX = headBoxWidth / 3;
  let headVectorImageSecondPositionY = headBoxHeight / 3;

  function moveHeadVectorImageSecond() {
    headVectorImageSecondPositionX += headVectorImageSecondSpeedX;
    headVectorImageSecondPositionY += headVectorImageSecondSpeedY;

    if (
      headVectorImageSecondPositionX >= headBoxWidth ||
      headVectorImageSecondPositionX <= 0
    ) {
      headVectorImageSecondSpeedX *= -1;
    }

    if (
      headVectorImageSecondPositionY >= headBoxHeight ||
      headVectorImageSecondPositionY <= 0
    ) {
      headVectorImageSecondSpeedY *= -1;
    }

    headVectorImageSecond.style.left = headVectorImageSecondPositionX + "px";
    headVectorImageSecond.style.top = headVectorImageSecondPositionY + "px";

    requestAnimationFrame(moveHeadVectorImageSecond);
  }
  moveHeadVectorImageSecond();

  // square
  let headVectorSquareSpeedX = 0.4;
  let headVectorSquareSpeedY = 0.4;
  let headVectorSquarePositionX = headBoxWidth / 2;
  let headVectorSquarePositionY = headBoxHeight / 2;

  function moveHeadVectorSquare() {
    headVectorSquarePositionX += headVectorSquareSpeedX;
    headVectorSquarePositionY += headVectorSquareSpeedY;

    if (
      headVectorSquarePositionX >= headBoxWidth ||
      headVectorSquarePositionX <= 0
    ) {
      headVectorSquareSpeedX *= -1;
    }

    if (
      headVectorSquarePositionY >= headBoxHeight ||
      headVectorSquarePositionY <= 0
    ) {
      headVectorSquareSpeedY *= -1;
    }

    headVectorSquare.style.left = headVectorSquarePositionX + "px";
    headVectorSquare.style.top = headVectorSquarePositionY + "px";

    requestAnimationFrame(moveHeadVectorSquare);
  }
  moveHeadVectorSquare();

  // circle
  let headVectorCircleSpeedX = 0.7;
  let headVectorCircleSpeedY = 0.7;
  let headVectorCirclePositionX = headBoxWidth / 2;
  let headVectorCirclePositionY = headBoxHeight / 2;

  function moveHeadVectorCircle() {
    headVectorCirclePositionX -= headVectorCircleSpeedX;
    headVectorCirclePositionY -= headVectorCircleSpeedY;

    if (
      headVectorCirclePositionX >= headBoxWidth ||
      headVectorCirclePositionX <= 0
    ) {
      headVectorCircleSpeedX *= -1;
    }

    if (
      headVectorCirclePositionY >= headBoxHeight ||
      headVectorCirclePositionY <= 0
    ) {
      headVectorCircleSpeedY *= -1;
    }

    headVectorCircle.style.left = headVectorCirclePositionX + "px";
    headVectorCircle.style.top = headVectorCirclePositionY + "px";

    requestAnimationFrame(moveHeadVectorCircle);
  }
  moveHeadVectorCircle();

  // ------------------------------------------------------------------------------

  // exp vector
  const expBox = document.querySelector(".experience-container");

  const expVectorDot = document.querySelector(".exp-vector-dot");
  const expVectorPlus = document.querySelector(".exp-vector-plus");
  const expVectorCircle = document.querySelector(".exp-vector-circle");
  const expVectorSquare = document.querySelector(".exp-vector-square");

  let expBoxWidth = expBox.getBoundingClientRect().width;
  let expBoxHeight = expBox.getBoundingClientRect().height;

  // dot
  let expVectorDotSpeedX = 1;
  let expVectorDotSpeedY = 1;
  let expVectorDotPositionX = 0;
  let expVectorDotPositionY = 0;

  function moveExpVectorDot() {
    expVectorDotPositionX += expVectorDotSpeedX;
    expVectorDotPositionY += expVectorDotSpeedY;

    if (expVectorDotPositionX >= expBoxWidth || expVectorDotPositionX <= 0) {
      expVectorDotSpeedX *= -1;
    }

    if (expVectorDotPositionY >= expBoxHeight || expVectorDotPositionY <= 0) {
      expVectorDotSpeedY *= -1;
    }

    expVectorDot.style.left = expVectorDotPositionX + "px";
    expVectorDot.style.top = expVectorDotPositionY + "px";

    requestAnimationFrame(moveExpVectorDot);
  }
  moveExpVectorDot();

  // plus
  let expVectorPlusSpeedX = 0.5;
  let expVectorPlusSpeedY = 0.5;
  let expVectorPlusPositionX = expBoxWidth;
  let expVectorPlusPositionY = expBoxHeight;

  function moveExpVectorPlus() {
    expVectorPlusPositionX -= expVectorPlusSpeedX;
    expVectorPlusPositionY -= expVectorPlusSpeedY;

    if (expVectorPlusPositionX >= expBoxWidth || expVectorPlusPositionX <= 0) {
      expVectorPlusSpeedX *= -1;
    }

    if (expVectorPlusPositionY >= expBoxHeight || expVectorPlusPositionY <= 0) {
      expVectorPlusSpeedY *= -1;
    }

    expVectorPlus.style.left = expVectorPlusPositionX + "px";
    expVectorPlus.style.top = expVectorPlusPositionY + "px";

    requestAnimationFrame(moveExpVectorPlus);
  }
  moveExpVectorPlus();

  // circle
  let expVectorCircleSpeedX = 0.7;
  let expVectorCircleSpeedY = 0.7;
  let expVectorCirclePositionX = expBoxWidth / 2;
  let expVectorCirclePositionY = expBoxHeight / 2;

  function moveExpVectorCircle() {
    expVectorCirclePositionX -= expVectorCircleSpeedX;
    expVectorCirclePositionY -= expVectorCircleSpeedY;

    if (
      expVectorCirclePositionX >= expBoxWidth ||
      expVectorCirclePositionX <= 0
    ) {
      expVectorCircleSpeedX *= -1;
    }

    if (
      expVectorCirclePositionY >= expBoxHeight ||
      expVectorCirclePositionY <= 0
    ) {
      expVectorCircleSpeedY *= -1;
    }

    expVectorCircle.style.left = expVectorCirclePositionX + "px";
    expVectorCircle.style.top = expVectorCirclePositionY + "px";

    requestAnimationFrame(moveExpVectorCircle);
  }
  moveExpVectorCircle();

  // square
  let expVectorSquareSpeedX = 0.4;
  let expVectorSquareSpeedY = 0.4;
  let expVectorSquarePositionX = expBoxWidth / 2;
  let expVectorSquarePositionY = expBoxHeight / 2;

  function moveExpVectorSquare() {
    expVectorSquarePositionX += expVectorSquareSpeedX;
    expVectorSquarePositionY += expVectorSquareSpeedY;

    if (
      expVectorSquarePositionX >= expBoxWidth ||
      expVectorSquarePositionX <= 0
    ) {
      expVectorSquareSpeedX *= -1;
    }

    if (
      expVectorSquarePositionY >= expBoxHeight ||
      expVectorSquarePositionY <= 0
    ) {
      expVectorSquareSpeedY *= -1;
    }

    expVectorSquare.style.left = expVectorSquarePositionX + "px";
    expVectorSquare.style.top = expVectorSquarePositionY + "px";

    requestAnimationFrame(moveExpVectorSquare);
  }
  moveExpVectorSquare();

  // ---------------------------------------------------------------------------------

  // about vector
  const aboutBox = document.querySelector(".about-container");

  console.log(aboutBox);

  const aboutVectorDot = document.querySelector(".about-vector-dot");
  const aboutVectorPlus = document.querySelector(".about-vector-plus");
  const aboutVectorCircle = document.querySelector(".about-vector-circle");
  const aboutVectorSquare = document.querySelector(".about-vector-square");

  let aboutBoxWidth = aboutBox.getBoundingClientRect().width;
  let aboutBoxHeight = aboutBox.getBoundingClientRect().height;

  console.log(aboutBoxHeight);

  // dot
  let aboutVectorDotSpeedX = 1;
  let aboutVectorDotSpeedY = 1;
  let aboutVectorDotPositionX = 0;
  let aboutVectorDotPositionY = 0;

  function moveaboutVectorDot() {
    aboutVectorDotPositionX += aboutVectorDotSpeedX;
    aboutVectorDotPositionY += aboutVectorDotSpeedY;

    if (
      aboutVectorDotPositionX >= aboutBoxWidth ||
      aboutVectorDotPositionX <= 0
    ) {
      aboutVectorDotSpeedX *= -1;
    }

    if (
      aboutVectorDotPositionY >= aboutBoxHeight ||
      aboutVectorDotPositionY <= 0
    ) {
      aboutVectorDotSpeedY *= -1;
    }

    aboutVectorDot.style.left = aboutVectorDotPositionX + "px";
    aboutVectorDot.style.top = aboutVectorDotPositionY + "px";

    requestAnimationFrame(moveaboutVectorDot);
  }
  moveaboutVectorDot();

  // plus
  let aboutVectorPlusSpeedX = 0.5;
  let aboutVectorPlusSpeedY = 0.5;
  let aboutVectorPlusPositionX = aboutBoxWidth;
  let aboutVectorPlusPositionY = aboutBoxHeight;

  function moveaboutVectorPlus() {
    aboutVectorPlusPositionX -= aboutVectorPlusSpeedX;
    aboutVectorPlusPositionY -= aboutVectorPlusSpeedY;

    if (
      aboutVectorPlusPositionX >= aboutBoxWidth ||
      aboutVectorPlusPositionX <= 0
    ) {
      aboutVectorPlusSpeedX *= -1;
    }

    if (
      aboutVectorPlusPositionY >= aboutBoxHeight ||
      aboutVectorPlusPositionY <= 0
    ) {
      aboutVectorPlusSpeedY *= -1;
    }

    aboutVectorPlus.style.left = aboutVectorPlusPositionX + "px";
    aboutVectorPlus.style.top = aboutVectorPlusPositionY + "px";

    requestAnimationFrame(moveaboutVectorPlus);
  }
  moveaboutVectorPlus();

  // circle
  let aboutVectorCircleSpeedX = 0.7;
  let aboutVectorCircleSpeedY = 0.7;
  let aboutVectorCirclePositionX = aboutBoxWidth / 2;
  let aboutVectorCirclePositionY = aboutBoxHeight / 2;

  function moveaboutVectorCircle() {
    aboutVectorCirclePositionX -= aboutVectorCircleSpeedX;
    aboutVectorCirclePositionY -= aboutVectorCircleSpeedY;

    if (
      aboutVectorCirclePositionX >= aboutBoxWidth ||
      aboutVectorCirclePositionX <= 0
    ) {
      aboutVectorCircleSpeedX *= -1;
    }

    if (
      aboutVectorCirclePositionY >= aboutBoxHeight ||
      aboutVectorCirclePositionY <= 0
    ) {
      aboutVectorCircleSpeedY *= -1;
    }

    aboutVectorCircle.style.left = aboutVectorCirclePositionX + "px";
    aboutVectorCircle.style.top = aboutVectorCirclePositionY + "px";

    requestAnimationFrame(moveaboutVectorCircle);
  }
  moveaboutVectorCircle();

  // square
  let aboutVectorSquareSpeedX = 0.4;
  let aboutVectorSquareSpeedY = 0.4;
  let aboutVectorSquarePositionX = aboutBoxWidth / 2;
  let aboutVectorSquarePositionY = aboutBoxHeight / 2;

  function moveaboutVectorSquare() {
    aboutVectorSquarePositionX += aboutVectorSquareSpeedX;
    aboutVectorSquarePositionY += aboutVectorSquareSpeedY;

    if (
      aboutVectorSquarePositionX >= aboutBoxWidth ||
      aboutVectorSquarePositionX <= 0
    ) {
      aboutVectorSquareSpeedX *= -1;
    }

    if (
      aboutVectorSquarePositionY >= aboutBoxHeight ||
      aboutVectorSquarePositionY <= 0
    ) {
      aboutVectorSquareSpeedY *= -1;
    }

    aboutVectorSquare.style.left = aboutVectorSquarePositionX + "px";
    aboutVectorSquare.style.top = aboutVectorSquarePositionY + "px";

    requestAnimationFrame(moveaboutVectorSquare);
  }
  moveaboutVectorSquare();

  // ------------------------------------------------------------------------------------

  // partner vector
  const partnerBox = document.querySelector(".partner-container");

  const partnerVectorPlusFirst = document.querySelector(
    ".partner-vector-plus-one"
  );
  const partnerVectorPlusSecond = document.querySelector(
    ".partner-vector-plus-two"
  );

  let partnerBoxWidth = partnerBox.getBoundingClientRect().width;
  let partnerBoxHeight = partnerBox.getBoundingClientRect().height;

  // plus first
  let partnerVectorPlusFirstSpeedX = 0.5;
  let partnerVectorPlusFirstSpeedY = 0.5;
  let partnerVectorPlusFirstPositionX = 0;
  let partnerVectorPlusFirstPositionY = 0;

  function movePartnerVectorPlusFirst() {
    partnerVectorPlusFirstPositionX += partnerVectorPlusFirstSpeedX;
    partnerVectorPlusFirstPositionY += partnerVectorPlusFirstSpeedY;

    if (
      partnerVectorPlusFirstPositionX >= partnerBoxWidth ||
      partnerVectorPlusFirstPositionX <= 0
    ) {
      partnerVectorPlusFirstSpeedX *= -1;
    }

    if (
      partnerVectorPlusFirstPositionY >= partnerBoxHeight ||
      partnerVectorPlusFirstPositionY <= 0
    ) {
      partnerVectorPlusFirstSpeedY *= -1;
    }

    partnerVectorPlusFirst.style.left = partnerVectorPlusFirstPositionX + "px";
    partnerVectorPlusFirst.style.top = partnerVectorPlusFirstPositionY + "px";

    requestAnimationFrame(movePartnerVectorPlusFirst);
  }
  movePartnerVectorPlusFirst();

  // plus second
  let partnerVectorPlusSecondSpeedX = 0.5;
  let partnerVectorPlusSecondSpeedY = 0.5;
  let partnerVectorPlusSecondPositionX = partnerBoxWidth;
  let partnerVectorPlusSecondPositionY = partnerBoxHeight;

  function movePartnerVectorPlusSecond() {
    partnerVectorPlusSecondPositionX -= partnerVectorPlusSecondSpeedX;
    partnerVectorPlusSecondPositionY -= partnerVectorPlusSecondSpeedY;

    if (
      partnerVectorPlusSecondPositionX >= partnerBoxWidth ||
      partnerVectorPlusSecondPositionX <= 0
    ) {
      partnerVectorPlusSecondSpeedX *= -1;
    }

    if (
      partnerVectorPlusSecondPositionY >= partnerBoxHeight ||
      partnerVectorPlusSecondPositionY <= 0
    ) {
      partnerVectorPlusSecondSpeedY *= -1;
    }

    partnerVectorPlusSecond.style.left =
      partnerVectorPlusSecondPositionX + "px";
    partnerVectorPlusSecond.style.top = partnerVectorPlusSecondPositionY + "px";

    requestAnimationFrame(movePartnerVectorPlusSecond);
  }
  movePartnerVectorPlusSecond();
});

var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

// head vector
const headBox = document.querySelector(".head-container");

const headVectorBall = document.querySelector(".head-vector-ball");
const headVectorPlus = document.querySelector(".head-vector-plus");
const headVectorCircle = document.querySelector(".head-vector-circle");
const headVectorSquare = document.querySelector(".head-vector-square");
const headVectorImageFirst = document.querySelector(".head-vector-image-first");
const headVectorImageSecond = document.querySelector(
  ".head-vector-image-second"
);

let headBoxWidth = headBox.getBoundingClientRect().width;
let headBoxHeight = headBox.getBoundingClientRect().height;

// ball
let headVectorBallSpeedX = 1;
let headVectorBallSpeedY = 1;
let headVectorBallPositionX = 0;
let headVectorBallPositionY = 0;

function moveHeadVectorBall() {
  headVectorBallPositionX += headVectorBallSpeedX;
  headVectorBallPositionY += headVectorBallSpeedY;

  if (headVectorBallPositionX >= headBoxWidth || headVectorBallPositionX <= 0) {
    headVectorBallSpeedX *= -1;
  }

  if (
    headVectorBallPositionY >= headBoxHeight ||
    headVectorBallPositionY <= 0
  ) {
    headVectorBallSpeedY *= -1;
  }

  headVectorBall.style.left = headVectorBallPositionX + "px";
  headVectorBall.style.top = headVectorBallPositionY + "px";

  requestAnimationFrame(moveHeadVectorBall);
}
moveHeadVectorBall();

// plus
let headVectorPlusSpeedX = 0.5;
let headVectorPlusSpeedY = 0.5;
let headVectorPlusPositionX = headBoxWidth;
let headVectorPlusPositionY = headBoxHeight;

function moveHeadVectorPlus() {
  headVectorPlusPositionX -= headVectorPlusSpeedX;
  headVectorPlusPositionY -= headVectorPlusSpeedY;

  if (headVectorPlusPositionX >= headBoxWidth || headVectorPlusPositionX <= 0) {
    headVectorPlusSpeedX *= -1;
  }

  if (
    headVectorPlusPositionY >= headBoxHeight ||
    headVectorPlusPositionY <= 0
  ) {
    headVectorPlusSpeedY *= -1;
  }

  headVectorPlus.style.left = headVectorPlusPositionX + "px";
  headVectorPlus.style.top = headVectorPlusPositionY + "px";

  requestAnimationFrame(moveHeadVectorPlus);
}
moveHeadVectorPlus();

// image first
let headVectorImageFirstSpeedX = 0.8;
let headVectorImageFirstSpeedY = 0.8;
let headVectorImageFirstPositionX = headBoxWidth / 1.5;
let headVectorImageFirstPositionY = headBoxHeight / 1.5;

function moveHeadVectorImageFirst() {
  headVectorImageFirstPositionX -= headVectorImageFirstSpeedX;
  headVectorImageFirstPositionY -= headVectorImageFirstSpeedY;

  if (
    headVectorImageFirstPositionX >= headBoxWidth ||
    headVectorImageFirstPositionX <= 0
  ) {
    headVectorImageFirstSpeedX *= -1;
  }

  if (
    headVectorImageFirstPositionY >= headBoxHeight ||
    headVectorImageFirstPositionY <= 0
  ) {
    headVectorImageFirstSpeedY *= -1;
  }

  headVectorImageFirst.style.left = headVectorImageFirstPositionX + "px";
  headVectorImageFirst.style.top = headVectorImageFirstPositionY + "px";

  requestAnimationFrame(moveHeadVectorImageFirst);
}
moveHeadVectorImageFirst();

// image second
let headVectorImageSecondSpeedX = 0.3;
let headVectorImageSecondSpeedY = 0.3;
let headVectorImageSecondPositionX = headBoxWidth / 3;
let headVectorImageSecondPositionY = headBoxHeight / 3;

function moveHeadVectorImageSecond() {
  headVectorImageSecondPositionX += headVectorImageSecondSpeedX;
  headVectorImageSecondPositionY += headVectorImageSecondSpeedY;

  if (
    headVectorImageSecondPositionX >= headBoxWidth ||
    headVectorImageSecondPositionX <= 0
  ) {
    headVectorImageSecondSpeedX *= -1;
  }

  if (
    headVectorImageSecondPositionY >= headBoxHeight ||
    headVectorImageSecondPositionY <= 0
  ) {
    headVectorImageSecondSpeedY *= -1;
  }

  headVectorImageSecond.style.left = headVectorImageSecondPositionX + "px";
  headVectorImageSecond.style.top = headVectorImageSecondPositionY + "px";

  requestAnimationFrame(moveHeadVectorImageSecond);
}
moveHeadVectorImageSecond();

// square
let headVectorSquareSpeedX = 0.4;
let headVectorSquareSpeedY = 0.4;
let headVectorSquarePositionX = headBoxWidth / 2;
let headVectorSquarePositionY = headBoxHeight / 2;

function moveHeadVectorSquare() {
  headVectorSquarePositionX += headVectorSquareSpeedX;
  headVectorSquarePositionY += headVectorSquareSpeedY;

  if (
    headVectorSquarePositionX >= headBoxWidth ||
    headVectorSquarePositionX <= 0
  ) {
    headVectorSquareSpeedX *= -1;
  }

  if (
    headVectorSquarePositionY >= headBoxHeight ||
    headVectorSquarePositionY <= 0
  ) {
    headVectorSquareSpeedY *= -1;
  }

  headVectorSquare.style.left = headVectorSquarePositionX + "px";
  headVectorSquare.style.top = headVectorSquarePositionY + "px";

  requestAnimationFrame(moveHeadVectorSquare);
}
moveHeadVectorSquare();

// circle
let headVectorCircleSpeedX = 0.7;
let headVectorCircleSpeedY = 0.7;
let headVectorCirclePositionX = headBoxWidth / 2;
let headVectorCirclePositionY = headBoxHeight / 2;

function moveHeadVectorCircle() {
  headVectorCirclePositionX -= headVectorCircleSpeedX;
  headVectorCirclePositionY -= headVectorCircleSpeedY;

  if (
    headVectorCirclePositionX >= headBoxWidth ||
    headVectorCirclePositionX <= 0
  ) {
    headVectorCircleSpeedX *= -1;
  }

  if (
    headVectorCirclePositionY >= headBoxHeight ||
    headVectorCirclePositionY <= 0
  ) {
    headVectorCircleSpeedY *= -1;
  }

  headVectorCircle.style.left = headVectorCirclePositionX + "px";
  headVectorCircle.style.top = headVectorCirclePositionY + "px";

  requestAnimationFrame(moveHeadVectorCircle);
}
moveHeadVectorCircle();

// ------------------------------------------------------------------------------

// exp vector
const expBox = document.querySelector(".experience-container");

const expVectorDot = document.querySelector(".exp-vector-dot");
const expVectorPlus = document.querySelector(".exp-vector-plus");
const expVectorCircle = document.querySelector(".exp-vector-circle");
const expVectorSquare = document.querySelector(".exp-vector-square");

let expBoxWidth = expBox.getBoundingClientRect().width;
let expBoxHeight = expBox.getBoundingClientRect().height;

// dot
let expVectorDotSpeedX = 1;
let expVectorDotSpeedY = 1;
let expVectorDotPositionX = 0;
let expVectorDotPositionY = 0;

function moveExpVectorDot() {
  expVectorDotPositionX += expVectorDotSpeedX;
  expVectorDotPositionY += expVectorDotSpeedY;

  if (expVectorDotPositionX >= expBoxWidth || expVectorDotPositionX <= 0) {
    expVectorDotSpeedX *= -1;
  }

  if (expVectorDotPositionY >= expBoxHeight || expVectorDotPositionY <= 0) {
    expVectorDotSpeedY *= -1;
  }

  expVectorDot.style.left = expVectorDotPositionX + "px";
  expVectorDot.style.top = expVectorDotPositionY + "px";

  requestAnimationFrame(moveExpVectorDot);
}
moveExpVectorDot();

// plus
let expVectorPlusSpeedX = 0.5;
let expVectorPlusSpeedY = 0.5;
let expVectorPlusPositionX = expBoxWidth;
let expVectorPlusPositionY = expBoxHeight;

function moveExpVectorPlus() {
  expVectorPlusPositionX -= expVectorPlusSpeedX;
  expVectorPlusPositionY -= expVectorPlusSpeedY;

  if (expVectorPlusPositionX >= expBoxWidth || expVectorPlusPositionX <= 0) {
    expVectorPlusSpeedX *= -1;
  }

  if (expVectorPlusPositionY >= expBoxHeight || expVectorPlusPositionY <= 0) {
    expVectorPlusSpeedY *= -1;
  }

  expVectorPlus.style.left = expVectorPlusPositionX + "px";
  expVectorPlus.style.top = expVectorPlusPositionY + "px";

  requestAnimationFrame(moveExpVectorPlus);
}
moveExpVectorPlus();

// circle
let expVectorCircleSpeedX = 0.7;
let expVectorCircleSpeedY = 0.7;
let expVectorCirclePositionX = expBoxWidth / 2;
let expVectorCirclePositionY = expBoxHeight / 2;

function moveExpVectorCircle() {
  expVectorCirclePositionX -= expVectorCircleSpeedX;
  expVectorCirclePositionY -= expVectorCircleSpeedY;

  if (
    expVectorCirclePositionX >= expBoxWidth ||
    expVectorCirclePositionX <= 0
  ) {
    expVectorCircleSpeedX *= -1;
  }

  if (
    expVectorCirclePositionY >= expBoxHeight ||
    expVectorCirclePositionY <= 0
  ) {
    expVectorCircleSpeedY *= -1;
  }

  expVectorCircle.style.left = expVectorCirclePositionX + "px";
  expVectorCircle.style.top = expVectorCirclePositionY + "px";

  requestAnimationFrame(moveExpVectorCircle);
}
moveExpVectorCircle();

// square
let expVectorSquareSpeedX = 0.4;
let expVectorSquareSpeedY = 0.4;
let expVectorSquarePositionX = expBoxWidth / 2;
let expVectorSquarePositionY = expBoxHeight / 2;

function moveExpVectorSquare() {
  expVectorSquarePositionX += expVectorSquareSpeedX;
  expVectorSquarePositionY += expVectorSquareSpeedY;

  if (
    expVectorSquarePositionX >= expBoxWidth ||
    expVectorSquarePositionX <= 0
  ) {
    expVectorSquareSpeedX *= -1;
  }

  if (
    expVectorSquarePositionY >= expBoxHeight ||
    expVectorSquarePositionY <= 0
  ) {
    expVectorSquareSpeedY *= -1;
  }

  expVectorSquare.style.left = expVectorSquarePositionX + "px";
  expVectorSquare.style.top = expVectorSquarePositionY + "px";

  requestAnimationFrame(moveExpVectorSquare);
}
moveExpVectorSquare();

// ---------------------------------------------------------------------------------

// about vector
const aboutBox = document.querySelector(".about-container");

console.log(aboutBox);

const aboutVectorDot = document.querySelector(".about-vector-dot");
const aboutVectorPlus = document.querySelector(".about-vector-plus");
const aboutVectorCircle = document.querySelector(".about-vector-circle");
const aboutVectorSquare = document.querySelector(".about-vector-square");

let aboutBoxWidth = aboutBox.getBoundingClientRect().width;
let aboutBoxHeight = aboutBox.getBoundingClientRect().height;

console.log(aboutBoxHeight);

// dot
let aboutVectorDotSpeedX = 1;
let aboutVectorDotSpeedY = 1;
let aboutVectorDotPositionX = 0;
let aboutVectorDotPositionY = 0;

function moveaboutVectorDot() {
  aboutVectorDotPositionX += aboutVectorDotSpeedX;
  aboutVectorDotPositionY += aboutVectorDotSpeedY;

  if (
    aboutVectorDotPositionX >= aboutBoxWidth ||
    aboutVectorDotPositionX <= 0
  ) {
    aboutVectorDotSpeedX *= -1;
  }

  if (
    aboutVectorDotPositionY >= aboutBoxHeight ||
    aboutVectorDotPositionY <= 0
  ) {
    aboutVectorDotSpeedY *= -1;
  }

  aboutVectorDot.style.left = aboutVectorDotPositionX + "px";
  aboutVectorDot.style.top = aboutVectorDotPositionY + "px";

  requestAnimationFrame(moveaboutVectorDot);
}
moveaboutVectorDot();

// plus
let aboutVectorPlusSpeedX = 0.5;
let aboutVectorPlusSpeedY = 0.5;
let aboutVectorPlusPositionX = aboutBoxWidth;
let aboutVectorPlusPositionY = aboutBoxHeight;

function moveaboutVectorPlus() {
  aboutVectorPlusPositionX -= aboutVectorPlusSpeedX;
  aboutVectorPlusPositionY -= aboutVectorPlusSpeedY;

  if (
    aboutVectorPlusPositionX >= aboutBoxWidth ||
    aboutVectorPlusPositionX <= 0
  ) {
    aboutVectorPlusSpeedX *= -1;
  }

  if (
    aboutVectorPlusPositionY >= aboutBoxHeight ||
    aboutVectorPlusPositionY <= 0
  ) {
    aboutVectorPlusSpeedY *= -1;
  }

  aboutVectorPlus.style.left = aboutVectorPlusPositionX + "px";
  aboutVectorPlus.style.top = aboutVectorPlusPositionY + "px";

  requestAnimationFrame(moveaboutVectorPlus);
}
moveaboutVectorPlus();

// circle
let aboutVectorCircleSpeedX = 0.7;
let aboutVectorCircleSpeedY = 0.7;
let aboutVectorCirclePositionX = aboutBoxWidth / 2;
let aboutVectorCirclePositionY = aboutBoxHeight / 2;

function moveaboutVectorCircle() {
  aboutVectorCirclePositionX -= aboutVectorCircleSpeedX;
  aboutVectorCirclePositionY -= aboutVectorCircleSpeedY;

  if (
    aboutVectorCirclePositionX >= aboutBoxWidth ||
    aboutVectorCirclePositionX <= 0
  ) {
    aboutVectorCircleSpeedX *= -1;
  }

  if (
    aboutVectorCirclePositionY >= aboutBoxHeight ||
    aboutVectorCirclePositionY <= 0
  ) {
    aboutVectorCircleSpeedY *= -1;
  }

  aboutVectorCircle.style.left = aboutVectorCirclePositionX + "px";
  aboutVectorCircle.style.top = aboutVectorCirclePositionY + "px";

  requestAnimationFrame(moveaboutVectorCircle);
}
moveaboutVectorCircle();

// square
let aboutVectorSquareSpeedX = 0.4;
let aboutVectorSquareSpeedY = 0.4;
let aboutVectorSquarePositionX = aboutBoxWidth / 2;
let aboutVectorSquarePositionY = aboutBoxHeight / 2;

function moveaboutVectorSquare() {
  aboutVectorSquarePositionX += aboutVectorSquareSpeedX;
  aboutVectorSquarePositionY += aboutVectorSquareSpeedY;

  if (
    aboutVectorSquarePositionX >= aboutBoxWidth ||
    aboutVectorSquarePositionX <= 0
  ) {
    aboutVectorSquareSpeedX *= -1;
  }

  if (
    aboutVectorSquarePositionY >= aboutBoxHeight ||
    aboutVectorSquarePositionY <= 0
  ) {
    aboutVectorSquareSpeedY *= -1;
  }

  aboutVectorSquare.style.left = aboutVectorSquarePositionX + "px";
  aboutVectorSquare.style.top = aboutVectorSquarePositionY + "px";

  requestAnimationFrame(moveaboutVectorSquare);
}
moveaboutVectorSquare();

// ------------------------------------------------------------------------------------

// partner vector
const partnerBox = document.querySelector(".partner-container");

const partnerVectorPlusFirst = document.querySelector(
  ".partner-vector-plus-one"
);
const partnerVectorPlusSecond = document.querySelector(
  ".partner-vector-plus-two"
);

let partnerBoxWidth = partnerBox.getBoundingClientRect().width;
let partnerBoxHeight = partnerBox.getBoundingClientRect().height;

// plus first
let partnerVectorPlusFirstSpeedX = 0.5;
let partnerVectorPlusFirstSpeedY = 0.5;
let partnerVectorPlusFirstPositionX = 0;
let partnerVectorPlusFirstPositionY = 0;

function movePartnerVectorPlusFirst() {
  partnerVectorPlusFirstPositionX += partnerVectorPlusFirstSpeedX;
  partnerVectorPlusFirstPositionY += partnerVectorPlusFirstSpeedY;

  if (
    partnerVectorPlusFirstPositionX >= partnerBoxWidth ||
    partnerVectorPlusFirstPositionX <= 0
  ) {
    partnerVectorPlusFirstSpeedX *= -1;
  }

  if (
    partnerVectorPlusFirstPositionY >= partnerBoxHeight ||
    partnerVectorPlusFirstPositionY <= 0
  ) {
    partnerVectorPlusFirstSpeedY *= -1;
  }

  partnerVectorPlusFirst.style.left = partnerVectorPlusFirstPositionX + "px";
  partnerVectorPlusFirst.style.top = partnerVectorPlusFirstPositionY + "px";

  requestAnimationFrame(movePartnerVectorPlusFirst);
}
movePartnerVectorPlusFirst();

// plus second
let partnerVectorPlusSecondSpeedX = 0.5;
let partnerVectorPlusSecondSpeedY = 0.5;
let partnerVectorPlusSecondPositionX = partnerBoxWidth;
let partnerVectorPlusSecondPositionY = partnerBoxHeight;

function movePartnerVectorPlusSecond() {
  partnerVectorPlusSecondPositionX -= partnerVectorPlusSecondSpeedX;
  partnerVectorPlusSecondPositionY -= partnerVectorPlusSecondSpeedY;

  if (
    partnerVectorPlusSecondPositionX >= partnerBoxWidth ||
    partnerVectorPlusSecondPositionX <= 0
  ) {
    partnerVectorPlusSecondSpeedX *= -1;
  }

  if (
    partnerVectorPlusSecondPositionY >= partnerBoxHeight ||
    partnerVectorPlusSecondPositionY <= 0
  ) {
    partnerVectorPlusSecondSpeedY *= -1;
  }

  partnerVectorPlusSecond.style.left = partnerVectorPlusSecondPositionX + "px";
  partnerVectorPlusSecond.style.top = partnerVectorPlusSecondPositionY + "px";

  requestAnimationFrame(movePartnerVectorPlusSecond);
}
movePartnerVectorPlusSecond();
