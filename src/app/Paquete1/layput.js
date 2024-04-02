import SmallStars from "../../../components/SmallStars";

const Layout = ({ children }) => {
    return (
        <main>
            <SmallStars />
            {children}
        </main>
    );
};

export default Layout;
