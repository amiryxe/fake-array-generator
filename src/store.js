import { createStore, action, computed } from "easy-peasy";

const store = createStore({
    count: 1,
    isAutoID: true,
    propItems: [
        {
            id: 1,
            key: 'name',
            value: 'John Doe'
        },
        {
            id: 2,
            key: 'age',
            value: 28
        }
    ],
    record: computed(state => {
        const obj = {};
        state.propItems.map(item => obj[item.key] = item.value)
        return obj;
    }),
    updatePropItem: action((state, payload) => {
        const { id, key, value } = payload;

        const arr = [];

        state.propItems.forEach(item => {
            if (item.id === id) {
                arr.push({
                    id: id,
                    key: key,
                    value: value
                })
            } else {
                arr.push(item);
            }
        })

        state.propItems = arr;
    }),
    setCount: action((state, payload) => {
        state.count = payload;
    }),
    addPropItem: action((state, payload) => {
        state.propItems.push(payload);
    }),
    changeAutoID: action((state, payload) => {
        state.isAutoID = payload;
    }),
    deleteProp: action((state, payload) => {
        state.propItems = state.propItems.filter(item => item.id !== payload)
    })
});

export default store;
