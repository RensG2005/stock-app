interface Props {
    children: React.ReactNode;
    type: string;
    extraclass?: string;
}

const Title = ({ type, extraclass, children }: Props) => {
    if (type === "h1") {
        return <h1 className={`text-3xl font-bold ${extraclass || ""}`}>{children}</h1>
    } else if (type === "h2") {
        return <h2 className={`text-2xl font-bold ${extraclass || ""}`}>{children}</h2>
    } else if (type === "h3") {
        return <h3 className={`text-xl font-semibold ${extraclass || ""}`}>{children}
        </h3>
    } else if (type === "h4") {
        return <h4 className={`text-md font-semibold ${extraclass || ""}`}>{children}
        </h4>
    } else if (type === "h5") {
        return <h5 className={`text-sm font-medium ${extraclass || ""}`}>{children}
        </h5>
    } else {
        return <h1 className={`text-3xl font-bold ${extraclass || ""}`}>{children}</h1>
    }
}

export default Title