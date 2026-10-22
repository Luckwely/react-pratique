type Props = {
    children: any;
}

export default function Modal({children}: Props) {
  return (
    <>
        <div className="bg-gray-100/90 w-full h-screen absolute top-0 left-0 z-20"></div>
        <div className="absolute top-[50%] left-[50%] bg-white border border-gray-200 shadow-2xl w-[90%] translate-y-[-50%] translate-x-[-50%] p-4 z-50">
            {children}
        </div>
    </>
  )
}
