export const state = () => {
    return {
        myHistory:{
        }
    }
}
export const mutations = {
    setHistory(state,data) {
        state.myHistory = data
        
    }
}
