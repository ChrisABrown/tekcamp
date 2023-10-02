export const tryCatchWrapper = (fn) => {
  return (req, res, next) => {
    try {
      return fn(req, res)
    } catch (error) {
      next(error)
    }
  }
}
