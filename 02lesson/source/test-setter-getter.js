const kkbinfo = {
    info: {name: '海上世界'},
    get name() {
        return this.info.name 
    },
    set name(val) {
        this.info.name = val
    }
}
kkbinfo.name = '回港二期'
console.log(kkbinfo.name)