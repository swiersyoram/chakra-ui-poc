import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Select,
  VStack,
} from "@chakra-ui/react";

export default function Page() {
  //@ts-ignore
  const submit = async (e) => {
    "use server";
    console.log(e);
  };

  return (
    <Center className="mt-10">
      <form action={submit}>
        <VStack spacing={4}>
          <FormControl as="fieldset">
            <FormLabel as="legend">Favorite Naruto Character</FormLabel>
            <RadioGroup defaultValue="Itachi" name={"anime"}>
              <HStack spacing="24px">
                <Radio value="Sasuke">Sasuke</Radio>
                <Radio value="Nagato">Nagato</Radio>
                <Radio value="Itachi">Itachi</Radio>
                <Radio value="Sage of the six Paths">
                  Sage of the six Paths
                </Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText>Select only if you're a fan.</FormHelperText>
          </FormControl>
          <FormControl isRequired as="fieldset">
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select country" name={"country"}>
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
            <FormErrorMessage>Email is required.</FormErrorMessage>
          </FormControl>
          <Button type={"submit"} className={"mt-10"}>
            Submit
          </Button>
        </VStack>
      </form>
    </Center>
  );
}
