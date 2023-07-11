import { ReactNode } from "react"
import classNames from "classnames"

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return <div className={classNames("container px-4 mx-auto", className)}>{ children }</div>
}
