interface Props {
    children: React.ReactNode
}

function Container(props: Props) {
  return (
    <div className="block" {...props}>
      {props.children}
    </div>
  );
}

export default Container;
