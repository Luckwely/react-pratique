import type { Dispatch, MouseEventHandler, SetStateAction } from "react";

type Props = {
    children: any;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
export default function ButtonPrimary({children, onClick}: Props) {
  return (
    <button onClick={onClick} className="bg-violet-500 text-white px-2 py-1 rounded-md">{children}</button>
  )
}
