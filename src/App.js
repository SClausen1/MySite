import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./Router/Router";
export const App = () => {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
};
