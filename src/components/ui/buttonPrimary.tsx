type Props = {
    children: any;
}
export default function ButtonPrimary({children}: Props) {
  return (
    <button className="bg-violet-500 text-white px-2 py-1 rounded-md">{children}</button>
  )
}
