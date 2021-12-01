import { createStore, action, computed } from "easy-peasy";

const store = createStore({
    count: 1,
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
        state.propItem.map(item => obj[item.key] = item.value)
        return obj;
    }),
    records: [],
    setCount: action((state, payload) => {
        state.count = payload;
    }),
    addPropItem: action((state, payload) => {
        state.records.push(payload);
    }),
    updateRecord: action((state, payload) => {
        const { id, key, value } = payload;
        const record = state.records.find(record => record.id === id);
        record[key] = value;
    })
});

export default store;
