import { useId, forwardRef } from "react";

const Select = ({ options, label, className, ...props }, ref) => {
    const id = useId();
    return (
        <div className="w-full">
            {label && <label htmlFor={id}>{label}</label>}
            <select
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                {...props}
            >
                {options?.map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>
        </div>
    )
}
export default forwardRef(Select);