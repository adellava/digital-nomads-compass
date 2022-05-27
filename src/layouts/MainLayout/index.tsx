import './MainLayout.scss'
import Header from 'components/shared/Header'

type MainLayoutProps = {
  children: JSX.Element
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="MainLayout">
      <div className="MainLayout_header">
        <Header />
      </div>
      <main className="MainLayout_body">{children}</main>
    </div>
  )
}

export default MainLayout
