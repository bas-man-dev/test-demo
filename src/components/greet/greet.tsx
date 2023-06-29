type GreetProps = {
  name?: string;
}


export const Greet = (props: GreetProps) => {
  return (
    <div className="hello">Hello {props.name}</div>
  )
}
