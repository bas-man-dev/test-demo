import { GreetProps } from "./greet.types"

export const Greet = (props: GreetProps) => {
  return (
    <div className="hello">Hello {props.name ? props.name : "Guest"}</div>
  )
}
