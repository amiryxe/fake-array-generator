import { createStore, action } from "easy-peasy";

const store = createStore({
    count: 1,
    records: [{
        "id": 1,
        "name": "John Doe",
        "age": 27,
        "city": "New York",
    }],

    setCount: action((state, payload) => {
        state.count = payload;
    }),
    addProp: action((state, payload) => {
        state.records.push(payload);
    }),
    updateRecord: action((state, payload) => {
        const { id, key, value } = payload;
        const record = state.records.find(record => record.id === id);
        record[key] = value;
    })
});

export default store;
