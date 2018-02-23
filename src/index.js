import { Easing } from 'react-native'

const steps = (n, type) => {
  const fn = Easing[type === 'start' ? 'step1' : 'step0']
  return (v) => {
    const p = Math.floor(v*n)
    return (p + fn(v-p)) / n
  }
}
const internal = {

  // default 
  'linear'            : () => Easing.linear,
  'ease'              : () => Easing.ease,
  'ease-in'           : () => Easing.in(Easing.ease),
  'ease-out'          : () => Easing.out(Easing.ease),
  'ease-in-out'       : () => Easing.inOut(Easing.ease),
  'step-start'        : () => Easing.step1,
  'step-end'          : () => Easing.step0,
  'steps'             : (args) => steps(args[0], args[1]),
  'cubic-bezier'      : (args) => Easing.bezier.apply(null, args),

  // more 
  'ease-in-cubic'     : () => Easing.bezier(0.550, 0.055, 0.675, 0.190),
  'ease-out-cubic'    : () => Easing.bezier(0.215, 0.610, 0.355, 1.000),
  'ease-in-out-cubic' : () => Easing.bezier(0.645, 0.045, 0.355, 1.000),

  'ease-in-circ'      : () => Easing.bezier(0.600, 0.040, 0.980, 0.335),
  'ease-out-circ'     : () => Easing.bezier(0.075, 0.820, 0.165, 1.000),
  'ease-in-out-circ'  : () => Easing.bezier(0.785, 0.135, 0.150, 0.860),

  'ease-in-expo'      : () => Easing.bezier(0.950, 0.050, 0.795, 0.035),
  'ease-out-expo'     : () => Easing.bezier(0.190, 1.000, 0.220, 1.000),
  'ease-in-out-expo'  : () => Easing.bezier(1.000, 0.000, 0.000, 1.000),

  'ease-in-quad'      : () => Easing.bezier(0.550, 0.085, 0.680, 0.530),
  'ease-out-quad'     : () => Easing.bezier(0.250, 0.460, 0.450, 0.940),
  'ease-in-out-quad'  : () => Easing.bezier(0.455, 0.030, 0.515, 0.955),

  'ease-in-quart'     : () => Easing.bezier(0.895, 0.030, 0.685, 0.220),
  'ease-out-quart'    : () => Easing.bezier(0.165, 0.840, 0.440, 1.000),
  'ease-in-out-quart' : () => Easing.bezier(0.770, 0.000, 0.175, 1.000),

  'ease-in-quint'     : () => Easing.bezier(0.755, 0.050, 0.855, 0.060),
  'ease-out-quint'    : () => Easing.bezier(0.230, 1.000, 0.320, 1.000),
  'ease-in-out-quint' : () => Easing.bezier(0.860, 0.000, 0.070, 1.000),

  'ease-in-sine'      : () => Easing.bezier(0.470, 0.000, 0.745, 0.715),
  'ease-out-sine'     : () => Easing.bezier(0.390, 0.575, 0.565, 1.000),
  'ease-in-out-sine'  : () => Easing.bezier(0.445, 0.050, 0.550, 0.950),

  'ease-in-back'      : () => Easing.bezier(0.600, -0.280, 0.735, 0.045),
  'ease-out-back'     : () => Easing.bezier(0.175,  0.885, 0.320, 1.275),
  'ease-in-out-back'  : () => Easing.bezier(0.680, -0.550, 0.265, 1.550),

  'material-standard' : () => Easing.bezier(0.4, 0.0, 0.2, 1),

}

module.exports = (easing, t=1) => {
  const m = easing.match(/^([^)]+)(?:\(([^)]+)\))?$/)
  const name = m[1]
  const args = m[2] ? m[2].split(/\s*,\s*/) : []
  return internal[name](args)
}

