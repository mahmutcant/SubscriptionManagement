import { Link } from "react-router-dom"

const Button = ({title,icon,to}) => {
  return (
    <Link to={to} className="text-[#62618F] mb-3 flex w-full items-center justify-start ml-8 text-[13px]">
        {icon}
        {title}</Link>
  )
}

export default Button