
interface WrapperProps {
    children: React.ReactNode,
    className?: string
}

const MainWrapper = ({ children, className } : WrapperProps ) => {
  return (
    <div className={`max-w-screen-2xl mx-auto w-full ${!!className && className}`}>
        {children}
    </div>
  )
}
export default MainWrapper