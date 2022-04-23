interface Props {
  label?: string;
  placeholder?: string;
  id?: string;
  type: string;
  name?: string;
  textarea?: boolean;
  value?: string;
}

function Input({
  textarea = false,
  label = 'Email',
  id = label,
  value = label,
  type = 'text',
  name = label,
  placeholder = '',
}: Props) {
  if (!textarea) {
    return (
      <div className="relative">
        <label htmlFor={id} className="text-gray-700">
          {label}
        </label>
        <input
          value={value}
          type={type || 'text'}
          id={id}
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-2"
          name={name}
          placeholder={placeholder}
        />
      </div>
    );
  }
  return (
    <div className="relative">
      <label htmlFor={id} className="text-gray-700">
        {label}
      </label>
      <textarea
        value={value}
        name={name}
        className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-2"
        id={id}
      />
    </div>
  );
}
export default Input;
