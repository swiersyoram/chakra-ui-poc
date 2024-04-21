"use client";
import React from "react";
import { Button, useToast } from "@chakra-ui/react";

const ToastComponent = () => {
  const toast = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: "Important message",
          description: "Ultra wide monitors are a good investment",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        })
      }
    >
      Toast
    </Button>
  );
};

export default ToastComponent;
