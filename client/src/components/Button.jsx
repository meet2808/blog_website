const Button = ({
  text,
  type = "button",
  bgColor,
  textColor,
  borderColor,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${bgColor} ${textColor} ${borderColor} ${className}`}
      {...props}
    >{text}</button>
  )
}
export default Button;
// const Button = ({
//   type = "button",
//   text,
//   bgColor,
//   textColor,
//   borderColor,
//   padding = 0,
//   margin = 0,
//   onClick
// }) => {
//   return (
//     <>
//       <button
//         type={type}
//         className={`${bgColor} ${textColor} ${borderColor} ${padding} ${margin}`}
//         onClick={onClick}
//       >{text}</button>
//     </>
//   )
// }

// export default Button