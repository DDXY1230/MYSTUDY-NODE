const path = require('path')
module.exports = class TestNow {
    getTestFileName(filename) {
        /*
         *生成测试文件
         *@param {*} filename
         */
        const dirName = path.dirname(filename)
        const baseName = path.basename(filename)
        const extName = path.extname(filename)
        console.log('====>', dirName, baseName, extName)
        const testName = baseName.replace(extName, `.spec${extName}`)
        // return `${dirName}/__test__/${testName}`
        //以上模版字符串组装，以下运用path自带的方法组装
        return path.format({
            root: `${dirName}/__test__/`,
            base: testName
        })
    }
}