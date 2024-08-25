import { HTMLInputTypeAttribute } from "react"

type InputFieldProps = {
    name: string,
    className? : string,
    type: HTMLInputTypeAttribute,
    placeholder: string

}

function InputField({className, type, placeholder, name}: InputFieldProps) {
    return (
        <input type={type}
        className={`w-[30vw] p-4 text-xl border border-b-2 rounded-lg ${className}`}
        placeholder={placeholder}
        name={name}
        />
  )
}

export default InputField