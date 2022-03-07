const experienceTracker = (array) => {
  const experienceArray = array.map((cr) => {
    switch (cr) {
      case 0:
        return 10;
      case 0.125:
        return 25;
      case 0.25:
        return 50;
      case 0.5:
        return 100;
      case 1:
        return 200;
      case 2:
        return 450;
      case 3:
        return 700;
      case 4:
        return 1100;
      case 5:
        return 1800;
      case 6:
        return 2300;
      case 7:
        return 2900;
      case 8:
        return 3900;
      case 9:
        return 5000;
      case 10:
        return 5900;
      case 11:
        return 7200;
      case 12:
        return 8400;
      case 13:
        return 10000;
      case 14:
        return 11500;
      case 15:
        return 13000;
      case 16:
        return 15000;
      case 17:
        return 18000;
      case 18:
        return 20000;
      case 19:
        return 22000;
      case 20:
        return 25000;
      default:
        return 0;
    }
  })

  let total = 0
  const length = experienceArray.length
  if (length === 1) {
    total = experienceArray[0]
  } else if (length > 1) {
    let value = experienceArray.reduce((a, b) => a + b)
    if (length === 2) {
      total = value * 1.5
    } else if (length >= 3 && length <= 6) {
      total = value * 2
    } else if (length >= 7 && length <= 10) {
      total = value * 2.5
    } else if (length >= 11 && length <= 14) {
      total = value * 3
    } else if (length >= 15) {
      total = value * 4
    }
  }

  let challengeRating = 0
  if (total <= 0 || total === 10) {
    challengeRating = 0
  } else if (total > 10 && total <= 25) {
    challengeRating = 0.125;
  } else if (total > 25 && total <= 50) {
    challengeRating = 0.25;
  } else if (total > 50 && total <= 100) {
    challengeRating = 0.50;
  } else if (total > 100 && total <= 200) {
    challengeRating = 1;
  } else if (total > 200 && total <= 450) {
    challengeRating = 2;
  } else if (total > 450 && total <= 700) {
    challengeRating = 3;
  } else if (total > 700 && total <= 1100) {
    challengeRating = 4;
  } else if (total > 1100 && total <= 1800) {
    challengeRating = 5;
  } else if (total > 1800 && total <= 2300) {
    challengeRating = 6;
  } else if (total > 2300 && total <= 2900) {
    challengeRating = 7;
  } else if (total > 2900 && total <= 3900) {
    challengeRating = 8;
  } else if (total > 3900 && total <= 5000) {
    challengeRating = 9;
  } else if (total > 5000 && total <= 5900) {
    challengeRating = 10;
  } else if (total > 5900 && total <= 7200) {
    challengeRating = 11;
  } else if (total > 7200 && total <= 8400) {
    challengeRating = 12;
  } else if (total > 8400 && total <= 10000) {
    challengeRating = 13;
  } else if (total > 10000 && total <= 11500) {
    challengeRating = 14;
  } else if (total > 11500 && total <= 13000) {
    challengeRating = 15;
  } else if (total > 13000 && total <= 15000) {
    challengeRating = 16;
  } else if (total > 15000 && total <= 18000) {
    challengeRating = 17;
  } else if (total > 18000 && total <= 20000) {
    challengeRating = 18;
  } else if (total > 20000 && total <= 22000) {
    challengeRating = 19;
  } else if (total > 22000 && total <= 25000) {
    challengeRating = 20;
  } else {
    challengeRating = 100
  }

  return challengeRating
}

export default experienceTracker