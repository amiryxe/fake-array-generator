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
    updatePropItem: action((state, payload) => {
        const { id, key, value } = payload;
        state.propItems.map(item => {
            if (item.id === id) {
                item[key] = key;
                item.value = value;
            } else {
                return item;
            }
        });
    }),
    record: computed(state => {
        const obj = {};
        state.propItems.map(item => obj[item.key] = item.value)
        return obj;
    }),
    setCount: action((state, payload) => {
        state.count = payload;
    }),
    addPropItem: action((state, payload) => {
        state.propItems.push(payload);
    }),
    updateRecord: action((state, payload) => {
        const { id, key, value } = payload;
        const record = state.records.find(record => record.id === id);
        record[key] = value;
    })
});

export default store;
