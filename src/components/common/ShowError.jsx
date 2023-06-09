import { useRef } from "react"

// eslint-disable-next-line react/prop-types
const ShowError = ({ open, children }) => {
  const contentRef = useRef()
  if (contentRef.current) console.log(contentRef?.current?.scrollHeight)
  return (
    <div
      className={`h-0 transition-all duration-700`}
      ref={contentRef}
      style={open ? { height: "10px" } : { height: "0px" }}
    >
      <div className="content">{children}</div>
    </div>
  )
}

// <p className="text-red-500 font-semibold text-sm mt-2 animate-topToBottom">
//       {message}
//     </p>

export default ShowError
