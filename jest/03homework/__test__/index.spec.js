test('测试03homework', async() => {
    const { parser } = require('../index')
    const { user }  = await parser(__dirname + 'data/data.json')
    expect(user).toBe('tom')
})