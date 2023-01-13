import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/router';
import {
  Flex,
  FormLabel,
  FormControl,
  Button,
  Input,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Link,
  GridItem,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { AlertPop } from "../components/Alert";
import { userService } from '../services';

type LoginFormData = {
  email: string;
  password: string;
  name: string; 
  lname: string;
  
};

export default function LoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("white", "white");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    return userService.register(data)
      .then(() => {
        router.push('login');
      })
  }

  return (
    <GridItem h={'1020px'}>
      <GridItem  w='100%' pl='2' bg='white' borderRadius={'0 0 13px 13px'} boxShadow='0px 4px 18px -6px #0057FF' h='127px' area={'header'}>
        <Image src="Group 181.png" paddingTop={'42.91px'} paddingLeft={'3.54%'}></Image>
      </GridItem>
      <GridItem position={'absolute'} width='295px' height={'32px'} left='42%' top={'192px'}>
        <Text
          fontFamily={'DM Sans'}
          fontStyle='normal'
          fontSize={'32px'}
          fontWeight={'700'}
          lineHeight='99.5%'
          textAlign={'center'}
          color={'#134077'}
        >
          Crea il tuo account   
        </Text>
      </GridItem>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex height="80vh" alignItems="center" justifyContent="center">
          <Flex
            position={'absolute'}
            w='662px'
            mt={'262px'}
            direction="column"
            background={formBackground}
            p={'46px 36px'}
            mb='20px'
            rounded={12}
            border={'1px solid #134077'}
          >
            <FormControl p="4px 2px">
              <FormLabel htmlFor="email">Inserisci il nome</FormLabel>
              <Input
                id="name"
                type="text"
                placeholder="Mario"
                variant='flushed'
                {...register('name')}
                mb={'33px'}
                w="579px"
              />
            </FormControl>

            <FormControl p="4px 2px">
              <FormLabel htmlFor="email">Inserisci il cognome</FormLabel>

              <Input
                id="lname"
                type="text"
                placeholder="Rossi"
                variant='flushed'
                mb={'33px'}
                {...register('lname')}
                w="579px"
              />
            </FormControl>

            <FormControl p="4px 2px">
              <FormLabel htmlFor="email">Inserisci l' email</FormLabel>

              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                variant='flushed'
                mb={'33px'}
                w="579px"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid",
                  },
                })}
              />
              {errors.email && <AlertPop formError={errors.email.message} />}
            </FormControl>

            <FormControl p="4px 2px">
              <FormLabel htmlFor="password">Inserisci la password</FormLabel>

              <Input
                id="password"
                type="password"
                placeholder="Password"
                aria-label='Send email'
                variant='flushed'
                w="579px"
                mb={'33px'}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Must contain at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <AlertPop formError={errors.password.message} />
              )}
            </FormControl>

            <Button
              onClick={onOpen}
              type="submit"
              fontFamily={'DM Sans'}
              fontWeight={500}
              lineHeight={'99.5%'}
              colorScheme="messenger"
              mt={'32px'}
              p='22px'
              fontSize='20px'
              isLoading={isSubmitting}
            >
              REGISTARTI
            </Button>
            <Flex alignItems="center" justifyContent="center" mt='49px'>
              <Text>Hai gia un account? <Link href="/login">Accedi</Link></Text>
            </Flex> 
          </Flex>
        </Flex>
      </form>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Success</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text align={'center'} mb='20px'>Register Success!!!</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </GridItem>
  );
}
