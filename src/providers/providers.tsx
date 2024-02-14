import React from "react";
import { UserProvider } from "./user";
import { Container } from "../components/container";

type ProvidersProps = { children: React.ReactNode };

export const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <Container>
    <UserProvider>{children}</UserProvider>
  </Container>
);
