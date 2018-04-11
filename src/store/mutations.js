import * as types from './mutaion-types'

const mutaions = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutaions