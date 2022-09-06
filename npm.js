const _ = require(`lodash`)

const listo = [1,[2,[3,[4,[5]]]]]
const arrN = _.flattenDeep(listo)
const clonearr = _.cloneDeep(arrN)
arrN.push(10)
console.log(arrN);
clonearr.push(20)
console.log(clonearr);
