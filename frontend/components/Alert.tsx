import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { FieldErrors } from "react-hook-form";



export const AlertPop = (props: FieldErrors) => {
  return <div>
<Alert status="error" p="2" rounded="md" >
    <AlertIcon />
    <AlertTitle mr={2}
    fontSize="sm">{props.formError}</AlertTitle>
</Alert>

  </div>;
};
