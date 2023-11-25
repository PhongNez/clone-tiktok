import Header from './Header';
function HeaderUpload({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}
export default HeaderUpload;
