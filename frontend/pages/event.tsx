import { useForm, SubmitHandler } from "react-hook-form";
import {
  Flex,
  Heading,
  FormLabel,
  FormControl,
  Button,
  Input,
  useColorMode,
  useColorModeValue,
  IconButton,
  GridItem,
  Image,
  Text,
  Link,
  Center
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { AlertPop } from "../components/Alert";

type LoginFormData = {
  email: string;
  password: string;
  
};

export default function LoginForm() {
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("white", "white");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
    reset({})
  }

  return (
    <GridItem h={'1020px'}>
      <GridItem  w='100%' pl='2' bg='white' borderRadius={'0 0 13px 13px'} boxShadow='0px 4px 18px -6px #0057FF' h='127px' area={'header'}>
        <Image src="Group 181.png" paddingTop={'42.91px'} paddingLeft={'3.54%'}></Image>
      </GridItem>
      <GridItem position={'absolute'} width='446px' height={'32px'} left='38.5%' top={'192px'}>
        <Text
          fontFamily={'DM Sans'}
          fontStyle='normal'
          fontSize={'32px'}
          fontWeight={'700'}
          lineHeight='99.5%'
          textAlign={'center'}
          color={'#134077'}
        >
          Ciao NOME ecco i tuoi eventi 
        </Text>
      </GridItem>
      <GridItem position={'absolute'} display={'inline-flex'} left='18%'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex alignItems="left" justifyContent="left">
            <Flex
              w='349px'
              mt='160px'
              direction="column"
              background={formBackground}
              p={'37px 28px'}
              rounded={12}
              border={'1px solid #134077'}
            >
              <Flex w={'232px'} h='36px' alignItems="left" justifyContent="left" mb='13px'>
                <Text fontSize={'36px'} fontFamily='DM Sans' fontWeight={'700'}>Name evento</Text>
              </Flex> 

              <Flex w={'162px'} h='20px' alignItems="left" justifyContent="left" mb='21px'>
                <Text fontSize={'20px'} fontFamily='DM Sans' fontWeight={'400'}>15-10-2022 15:00</Text>
              </Flex> 


              <Button
                type="submit"
                fontFamily={'DM Sans'}
                fontWeight={500}
                lineHeight={'99.5%'}
                colorScheme="messenger"
                p='22px'
                fontSize='20px'
                isLoading={isSubmitting}
              >
                JOIN
              </Button>
            </Flex>
          </Flex>
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex alignItems="center" justifyContent="center">
            <Flex
              w='349px'
              direction="column"
              mt='160px'
              background={formBackground}
              ml='100px'
              p={'37px 28px'}
              rounded={12}
              border={'1px solid #134077'}
            >
              <Flex w={'232px'} h='36px' alignItems="left" justifyContent="left" mb='13px'>
                <Text fontSize={'36px'} fontFamily='DM Sans' fontWeight={'700'}>Name evento</Text>
              </Flex> 

              <Flex w={'162px'} h='20px' alignItems="left" justifyContent="left" mb='21px'>
                <Text fontSize={'20px'} fontFamily='DM Sans' fontWeight={'400'}>15-10-2022 15:00</Text>
              </Flex> 


              <Button
                type="submit"
                fontFamily={'DM Sans'}
                fontWeight={500}
                lineHeight={'99.5%'}
                colorScheme="messenger"
                p='22px'
                fontSize='20px'
                isLoading={isSubmitting}
              >
                JOIN
              </Button>
            </Flex>
          </Flex>
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex alignItems="center" justifyContent="right">
            <Flex
              w='349px'
              direction="column"
              mt='160px'
              ml='100px'
              background={formBackground}
              p={'37px 28px'}
              rounded={12}
              border={'1px solid #134077'}
            >
              <Flex w={'232px'} h='36px' alignItems="left" justifyContent="left" mb='13px'>
                <Text fontSize={'36px'} fontFamily='DM Sans' fontWeight={'700'}>Name evento</Text>
              </Flex> 

              <Flex w={'162px'} h='20px' alignItems="left" justifyContent="left" mb='21px'>
                <Text fontSize={'20px'} fontFamily='DM Sans' fontWeight={'400'}>15-10-2022 15:00</Text>
              </Flex> 


              <Button
                type="submit"
                fontFamily={'DM Sans'}
                fontWeight={500}
                lineHeight={'99.5%'}
                colorScheme="messenger"
                p='22px'
                fontSize='20px'
                isLoading={isSubmitting}
              >
                JOIN
              </Button>
            </Flex>
          </Flex>
        </form>
      </GridItem> 
    </GridItem>
  );
}
