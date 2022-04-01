interface Props {
    readonly onClick?: (...args: any) => any;
    readonly disabled?: boolean;
    readonly children: React.ReactNode;
}

const Button = (props: Props) => {
    return (
        <button
            onClick={props.onClick}
            className="py-2 px-4 mx-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            disabled={props.disabled}
            {...props}
        >
            {props.children}
        </button>

    )
}

export default Button;