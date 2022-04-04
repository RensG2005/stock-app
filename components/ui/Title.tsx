interface Props {
    children: React.ReactNode;
    type: string;
    extraclass?: string;
}

function Title({ type, extraclass, children }: Props) {
  if (type === 'h1') {
    return <h1 className={`text-3xl font-bold ${extraclass || ''}`}>{children}</h1>;
  } if (type === 'h2') {
    return <h2 className={`text-2xl font-bold ${extraclass || ''}`}>{children}</h2>;
  } if (type === 'h3') {
    return (
      <h3 className={`text-xl font-semibold ${extraclass || ''}`}>
        {children}
      </h3>
    );
  } if (type === 'h4') {
    return (
      <h4 className={`text-md font-semibold ${extraclass || ''}`}>
        {children}
      </h4>
    );
  } if (type === 'h5') {
    return (
      <h5 className={`text-sm font-medium ${extraclass || ''}`}>
        {children}
      </h5>
    );
  }
  return <h1 className={`text-3xl font-bold ${extraclass || ''}`}>{children}</h1>;
}

export default Title;
