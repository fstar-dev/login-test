
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
  Link,
  GridItem,
  Image,
  Text
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { AlertPop } from "../components/Alert";
import { userService } from '../services';

type LoginFormData = {
  email: string;
  password: string;
  
};

export default function LoginForm() {
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
    return userService.login(data)
      .then(() => {
        router.push('event');
      })
  }

  return (
    <GridItem h={'1020px'}>
      <GridItem w='100%' pl='2' bg='white' borderRadius={'0 0 13px 13px'} boxShadow='0px 4px 18px -6px #0057FF' h='127px' area={'header'}>
        <Image src="Group 181.png" paddingTop={'42.91px'} paddingLeft={'3.54%'}></Image>
      </GridItem>
      <GridItem position={'absolute'} width='295px' height={'32px'} left='42%' top={'182px'}>
        <Text
          fontFamily={'DM Sans'}
          fontStyle='normal'
          fontSize={'32px'}
          fontWeight={'700'}
          lineHeight='99.5%'
          textAlign={'center'}
          color={'#134077'}
        >
          Hai gia un account   
        </Text>
      </GridItem>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex
            w='662px'
            mt='-130px'
            direction="column"
            background={formBackground}
            p={'46px 36px'}
            mb='20px'
            rounded={12}
            border={'1px solid #134077'}
          >
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
                mb={'33px'}
                w="579px"
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
              ACCEDI
            </Button>
            <Flex alignItems="center" justifyContent="center" mt='49px'>
              <Text>Hai gia un account? <Link href="/">Registrati</Link></Text>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </GridItem>
  );
}