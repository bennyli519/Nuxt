/*
 * @Description:
 * @Author: Benny
 * @Date: 2020-05-19 19:55:33
 * @LastEditTime: 2020-05-20 11:26:42
 */
export const state = () => ({
    test: 'asdf'
})

export const mutations = {
    change(state, payload) {
        state.test = payload
    }
}