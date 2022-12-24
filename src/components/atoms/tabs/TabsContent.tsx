import * as TabsPrimitive from "@radix-ui/react-tabs"
import { styled } from "@stitches/react"

const TabsContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: "white",
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: "none",
  "&:focus": { boxShadow: `0 0 0 2px black` },
})

export default TabsContent
