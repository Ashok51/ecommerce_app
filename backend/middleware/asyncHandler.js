// this is to avoid third party middleware, yo afai banako ho 
// to use custom asyncHandler express-async-handler use garna ni sakinxa directly
const asyncHandler = fn =>(req, res, next) =>{
  Promise.resolve(fn(req, res, next)).catch(next)
}

export default asyncHandler

