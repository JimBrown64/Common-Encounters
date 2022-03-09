const modifierConverter = (stat) => {
  const modifier = (stat) => {
    if (stat < 10) {
      if (stat == 9 || stat == 8) {
        return -1
      } else if (stat == 7 || stat == 6) {
        return -2
      } else if (stat == 5 || stat == 4) {
        return -3
      } else if (stat == 3 || stat == 2) {
        return -4
      } else if (stat == 1) {
        return -5
      }
    } else if (stat >= 10 && stat < 20) {
      if (stat == 10 || stat == 11) {
        return 0
      } else if (stat == 12 || stat == 13) {
        return "+1"
      } else if (stat == 14 || stat == 15) {
        return "+2"
      } else if (stat == 16 || stat == 17) {
        return "+3"
      } else if (stat == 18 || stat == 19) {
        return "+4"
      } else if (stat > 20) {
        if (stat == 20 || stat == 21) {
          return "+5"
        } else if (stat == 22 || stat == 23) {
          return "+6"
        } else if (stat == 24 || stat == 25) {
          return "+7"
        } else if (stat == 26 || stat == 27) {
          return "+8"
        } else if (stat == 28 || stat == 29) {
          return "+9"
        } else if (stat == 30 || stat == 31) {
          return "+10"
        }
      }
    }else{
    }
  }
  return modifier(stat)
}
export default modifierConverter