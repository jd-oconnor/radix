import { blackA, violet } from "@radix-ui/colors"
import { styled } from "@stitches/react"

const Input = styled("input", {
  all: "unset",
  flex: "1 0 auto",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 15,
  lineHeight: 1,
  color: blackA.blackA11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
})

export default Input
