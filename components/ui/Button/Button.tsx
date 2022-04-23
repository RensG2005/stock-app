import clsx from '../../../lib/clsx';

interface Props {
  onClick?: (...args: any) => any;
  disabled?: boolean;
  children: React.ReactNode;
  extraclass?: string;
  type?: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'secondary' | 'tertiary' | 'transparent';
}

function Button({
  onClick,
  disabled,
  extraclass,
  children,
  type,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-md m-4 text-sm font-medium text-white focus:outline-none focus:shadow-outline',
        extraclass,
        props.variant === 'primary' && 'bg-sky-600 hover:bg-sky-700',
        props.variant === 'secondary' && 'bg-indigo-500 hover:bg-indigo-500',
        props.variant === 'tertiary' && 'bg-gray-400',
        props.variant === 'transparent'
          && 'bg-transparent text-sky-500 hover:text-sky-600 border border-1 border-sky-500 hover:border-sky-600',
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
