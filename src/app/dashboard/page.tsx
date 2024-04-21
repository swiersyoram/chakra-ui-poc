import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { ModalComponent } from "@/app/components/ModalComponent";
import { TableComponent } from "@/app/components/TableComponent";
import ToastComponent from "@/app/components/ToastComponent";

export default function Page() {
  return (
    <div>
      <TableComponent />
      <Center className="p-5">
        <ModalComponent />
      </Center>
      <Center className="p-5">
        <ToastComponent />
      </Center>
    </div>
  );
}
