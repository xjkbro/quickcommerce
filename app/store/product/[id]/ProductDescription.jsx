"use client";
import { useState } from "react";

export default function ProductDescription({ desc }) {
    const [click, setClick] = useState(false);
    return (
        <div id={desc} className="text-sm">
            {!click ? desc.substr(0, 120) : desc}{" "}
            {!click ? (
                <div
                    onClick={() => {
                        setClick(true);
                    }}
                    className="opacity-50 text-gray-900 hover:cursor-pointerc
                     hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                >
                    MORE <i className="mdi mdi-arrow-right"></i>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
