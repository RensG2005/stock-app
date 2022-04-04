interface Props {
    label?: string
    placeholder?: string
    id?: string
    type?: string
    name?: string
    textarea?: boolean
    value?: string
}

function Input(props: Props) {
  if (!props.textarea) {
    return (
      <div className="relative">
        <label htmlFor={props.id} className="text-gray-700">
          {props.label}
        </label>
        <input value={props.value} {...props} type={props.type || 'text'} id={props.id} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-2" name={props.name} placeholder={props.placeholder} />
      </div>

    );
  }
  return (
    <div className="relative">
      <label htmlFor={props.id} className="text-gray-700">
        {props.label}
      </label>
      <textarea value={props.value} {...props} name={props.name} className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-2" id={props.id} />
    </div>
  );
}
export default Input;
