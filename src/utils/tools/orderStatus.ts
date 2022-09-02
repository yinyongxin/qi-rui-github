export const getOrderStatus = (role: number, orderStatus: number) => {
  if (role === 1) {
    if (orderStatus === 1) {
      return 1
    }
    else {
      return 2
    }
  }
  if (role === 2) {
    if (orderStatus === 1) {
      return 3
    }
    else {
      return 4
    }
  }
  if (role === 3) {
    if (orderStatus === 1) {
      return 5
    }

    else if (orderStatus === 2) {
      return 6
    }
    else {
      return 7
    }
  }
}
