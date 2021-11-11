import React, { useState } from "react"

export default function Record({ index }) {
    return (
        <div>
            <input type="text" placeholder={index} />
            <input type="text" placeholder="Value" />
        </div>
    )
}