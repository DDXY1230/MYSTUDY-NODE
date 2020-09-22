const hellText = require('../index')

test('测试hello world', () => {
    const ret = require('../index')
    console.log('测试中', ret)
    expect(ret).toBe('Hello world')
})
// jest hellowrld --watch  时刻监控是否通过测试