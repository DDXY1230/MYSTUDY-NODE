// 手写实现原理简写
module.exports = function promisify(fn) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            args.push(function (err, ...args) {
                if (err) {
                    reject(err)
                } else {
                    resolve(...args)
                }
            })
        })
    }
}