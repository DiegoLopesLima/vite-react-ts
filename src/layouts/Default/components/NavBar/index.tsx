import { ReactNode } from "react"

import Container from "@/components/Container"

interface NavBarProps {
  children: ReactNode
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <div className="bg-neutral-600 py-2.5">
      <Container>
        <div className="flex gap-4 items-center">{ children }</div>
      </Container>
    </div>
  );
}
