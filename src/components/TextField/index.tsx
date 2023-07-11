import classNames from "classnames";
import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}

export default function TextField({ label, id, type = 'text', className, ...remainingProps }: TextFieldProps) {
  return (
    <div className={classNames("flex flex-col gap-1", className)}>
      {label && (
        <label htmlFor={id} className="text-sm font-semibold">{label}</label>
      )}

      <input
        type={type}
        id={id}
        className="flex w-full py-2 px-4 rounded-md border-0.5 border-neutral-500 text-white bg-white/20 items-center"
        {...remainingProps}
      />
    </div>
  )
}
