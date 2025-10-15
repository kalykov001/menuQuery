import Header from "./header/Header";
import scss from "./layout.module.scss"
type ChildrenProps = {
    children: React.ReactNode;
}
const Layout = ({children}: ChildrenProps) => {
    return (
        <div className={scss.container}>
      <Header/>
      <main className={scss.mainContainer}>{children}</main>
    </div>
    );
};

export default Layout;