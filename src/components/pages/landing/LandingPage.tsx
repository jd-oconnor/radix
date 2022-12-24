import { indigo, mauve, purple } from "@radix-ui/colors"
import { styled } from "@stitches/react"
import {
  Button,
  Fieldset,
  Flex,
  Input,
  Label,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../atoms"

const Text = styled("div", {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
})

const LandingPage = () => (
  <Flex
    css={{
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      backgroundImage: `linear-gradient(330deg, ${purple.purple9} 0%, ${indigo.indigo9} 100%)`,
    }}
  >
    <div style={{ marginTop: "20vh" }}>
      <Tabs defaultValue="tab1">
        <TabsList aria-label="Manage your account">
          <TabsTrigger value="tab1">Login</TabsTrigger>
          <TabsTrigger value="tab2">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Text>Log into your account using your email and password.</Text>
          <Text>
            Don't have an account? Click sign up and fill in the form to create
            your free account.
          </Text>

          <Fieldset>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="test@example.com" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </Fieldset>
          <Flex css={{ marginTop: 20, justifyContent: "flex-end" }}>
            <Button variant="violet">Login</Button>
          </Flex>
        </TabsContent>
        <TabsContent value="tab2">
          <Text>Complete the form and submit to create your free account.</Text>
          <Fieldset>
            <Label htmlFor="fname">First Name</Label>
            <Input id="fname" placeholder="Jane" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="lname">Last Name</Label>
            <Input id="lname" placeholder="Smith" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="test@example.com" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input id="confirmPassword" type="password" />
          </Fieldset>
          <Flex css={{ marginTop: 20, justifyContent: "flex-end" }}>
            <Button variant="green">Create Account</Button>
          </Flex>
        </TabsContent>
      </Tabs>
    </div>
  </Flex>
)

export default LandingPage
