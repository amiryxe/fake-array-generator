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
});

export default store;
