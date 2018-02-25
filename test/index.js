require('react')
require('react-native-mock/mock')
const should = require('should')
const toEasing = require('..')
const values = require('./test.json')

for(let easing in toEasing.easings) {
  it(`check is function of ${easing}`, () => {
    const fn = toEasing(easing)
    should(fn).be.a.Function()
  })
}
describe(`check easing input->output`, () => {
  for(let test of values) {
    describe(`key = '${test.key}'`, () => {
      test.inout.forEach(function(v, i) {
        const input = v[0]
        const output = v[1]
        it(`easing(key)(${input}) = ${output}`, () => {
          const fn = toEasing(test.key)
          const actual = fn(input)
          should(actual).be.approximately(output, 0.005)
        })
      })
    })
  }
})
