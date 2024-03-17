import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";


const RTE = ({ name, control, label, defaultValue = "", ...props }, ref) => {
    const [value, setValue] = useState("");

    useImperativeHandle(ref, () => ({
        getValue: () => value
    }));

    const handleChange = (content, delta, source, editor) => {
        setValue(content);
    };

    return (
        <div className="w-full">
            {label && (
                <label className="inline-block mb-1 pl-1">{label}</label>
            )}

            <ReactQuill
                className="w-full"
                theme="bubble"
                name={name}
                value={value}
                onChange={handleChange}
                // value={value}
                // onChange={setValue}
                placeholder="Tell your story..."
                ref={ref}
                {...props}
            />
        </div>
    );
};

export default forwardRef(RTE);
