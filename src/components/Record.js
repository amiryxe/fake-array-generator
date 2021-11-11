import React, { useState } from "react"

export default function Record({ index }) {
    return (
        <div>
            <input type="text" placeholder={`Key ${index + 1}`} />
            <input type="text" placeholder={`Value ${index + 1}`} />
        </div>
    )
}