$(window).on("load", function () {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  // head vector
  const headBox = document.querySelector(".head-banner");

  const headVectorDot = document.querySelector(".head-vector-dot");
  const headVectorPlus = document.querySelector(".head-vector-plus");
  const headVectorCircle = document.querySelector(".head-vector-circle");
  const headVectorSquare = document.querySelector(".head-vector-square");

  let headBoxWidth = headBox.getBoundingClientRect().width;
  let headBoxHeight = headBox.getBoundingClientRect().height;

  // dot
  let headVectorDotSpeedX = 1;
  let headVectorDotSpeedY = 1;
  let headVectorDotPositionX = 0;
  let headVectorDotPositionY = 0;

  function moveHeadVectorDot() {
    headVectorDotPositionX += headVectorDotSpeedX;
    headVectorDotPositionY += headVectorDotSpeedY;

    if (headVectorDotPositionX >= headBoxWidth || headVectorDotPositionX <= 0) {
      headVectorDotSpeedX *= -1;
    }

    if (
      headVectorDotPositionY >= headBoxHeight ||
      headVectorDotPositionY <= 0
    ) {
      headVectorDotSpeedY *= -1;
    }

    headVectorDot.style.left = headVectorDotPositionX + "px";
    headVectorDot.style.top = headVectorDotPositionY + "px";

    requestAnimationFrame(moveHeadVectorDot);
  }
  moveHeadVectorDot();

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

  //   ---------------------------------------------------------------------

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
