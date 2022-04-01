import clsx from "../../lib/clsx";

const Error = ({ error, background }: { error: string, background?: true}) => {
    if(error) {
        return <p className={clsx(background && "bg-red-50 p-5", "text-red-700 text-xs mb-4")}>{error}</p>;
    } else {
        return null
    }
};

export default Error