const Title = (props) => {
    if (props.h1) {
        return <h1 className={`text-3xl font-bold ${props.extraclass}`} {...props}>{props.children}</h1>
    } else if (props.h2) {
        return <h2 className={`text-2xl font-bold ${props.extraclass}`} {...props}>{props.children}</h2>
    } else if (props.h3) {
        return <h3 className={`text-xl font-semibold ${props.extraclass}`} {...props}>{props.children}
        </h3>
    } else if (props.h4) {
        return <h4 className={`text-md font-semibold ${props.extraclass}`} {...props}>{props.children}
        </h4>
    } else if (props.h5) {
        return <h5 className={`text-sm font-medium ${props.extraclass}`} {...props}>{props.children}
        </h5>
    } else {
        return <h1 className={`text-3xl font-bold ${props.extraclass}`} {...props}>{props.childrej}</h1>
    }
}

export default Title