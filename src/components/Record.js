import { useState } from "react"

export default function Record({ index }) {
    const [keyValue, setKeyValue] = useState('')
    const [valueValue, setValueValue] = useState('')

    return (
        <div className="record">
            <input type="text"
                placeholder={`Key ${index}`}
                value={keyValue}
                onChange={(e) => setKeyValue(e.target.value)}
            />

            <input type="text"
                placeholder={`Value ${index}`}
                value={valueValue}
                onChange={(e) => setValueValue(e.target.value)}
            />

            <button style={{
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