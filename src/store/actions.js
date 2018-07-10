import { get } from '../fetch'

export function FETCH_PROJECT_TREE_DATA ({ commit }) {
    const url = 'project/tree'

    return get(url).then(res => {
        commit('SET_PROJECT_TREE_DATA', res.data)
        return
    })
}

