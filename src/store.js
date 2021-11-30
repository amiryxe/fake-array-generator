import { createStore, action } from "easy-peasy";

const store = createStore({
    records: [{
        id: 1,
        key: "title",
        value: "Hello World"
    }],
    addRecord: action((state, payload) => {
        state.records.push(payload);
    }),
    updateRecord: action((state, payload) => {
        const { id, key, value } = payload;
        const record = state.records.find(record => record.id === id);
        record[key] = value;
    })
});

export default store;
