import MainWrapper from "../containers/main-wrapper"
import { Icons } from "../icons"
import { Button } from "../ui/button"

const MainNavbar = () => {
  return (
    <nav className="h-auto border-b">
        <MainWrapper className="flex items-center w-full justify-between px-4 h-16">
            <div className="flex items-center ">
              <Icons.moobieIcon className="h-8 w-8 cursor-pointer" />
              <span className="font-logo text-3xl font-semibold hidden sm:block mb-1 leading-none ml-1">moobie</span>
            </div>

            <div className="">
              <Button className="w-52">Login</Button>
            </div>
        </MainWrapper>
    </nav>
  )
}
export default MainNavbar