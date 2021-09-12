import Button from './Button'

const Header = ({title, onToggle, AddButtonText}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text={AddButtonText ? "Close": "Add"} onToggle={onToggle} />
        </header>
    )
}

Header.defaultProps = {
    title: "Suleman khan"
}
export default Header
