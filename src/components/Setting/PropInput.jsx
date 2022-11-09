import { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function PropInput({ data }) {
    const {
        id,
        key,
        value
    } = data;

    const updatePropItem = useStoreActions(actions => actions.updatePropItem);
    const deleteProp = useStoreActions(actions => actions.deleteProp);
    const propLength = useStoreState(state => state.propItems.length);

    const [keyValue, setKeyValue] = useState(key);
    const [valueValue, setValueValue] = useState(value);

    useEffect(() => {
        updatePropItem({
            id: id,
            key: keyValue,
            value: valueValue
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyValue, valueValue, id]);

    const handleDeleteProp = () => {
        deleteProp(id)
    }

    return (
        <div className="record">
            <input type="text"
                placeholder={`Key ${id}`}
                value={keyValue}
                onChange={(e) => setKeyValue(e.target.value)}
            />

            <input type="text"
                placeholder={`Value ${id}`}
                value={valueValue}
                onChange={(e) => setValueValue(e.target.value)}
            />

            <button
                onClick={handleDeleteProp}
                hidden={propLength <= 1}
                style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fill: '#fff',
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
            </button>
        </div>
    )
}