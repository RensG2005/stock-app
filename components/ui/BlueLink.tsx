const BlueLink = (props) => {
    return (
        <a className="text-blue-500 underline block" href={props.href} {...props}>
            {props.children}
        </a>
    )
}

export default BlueLink