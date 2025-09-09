import type { LucideProps } from "lucide-react"
import type { ForwardRefExoticComponent, RefAttributes } from "react"

export type CardInfoProps = {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
  title: string
  text: string
}
