import { mauve } from "@radix-ui/colors"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { styled } from "@stitches/react"

const TabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
  borderBottom: `1px solid ${mauve.mauve6}`,
})

export default TabsList
