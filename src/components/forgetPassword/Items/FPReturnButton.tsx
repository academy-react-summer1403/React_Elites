import { NavLink } from "react-router-dom";

const FPReturnButton = () => {
  return (
    <div className="flex max-w-96  justify-center mt-4">
      <div className=" flex rounded-full justify-center gap-1.5 w-28 px-4 py-2 bg-white border border-px border-gray-300">
        <NavLink to="/Auth/Login" className="border-non cursor-pointer text-blue-700 text-sm font-DannaBold tracking-tight">&lt; بازگشت </NavLink>
      </div>
    </div>
  )
}

export { FPReturnButton }