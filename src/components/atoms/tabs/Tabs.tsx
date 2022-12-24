import { blackA } from "@radix-ui/colors"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { styled } from "@stitches/react"

const Tabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  minWidth: 300,
  width: 500,
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
})

export default Tabs
