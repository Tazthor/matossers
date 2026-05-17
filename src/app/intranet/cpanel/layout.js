"use client";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app, logoOut } from "../../utils/login";
import { 
  Box, 
  Flex, 
  Icon, 
  Text, 
  Button, 
  VStack, 
  Spinner
} from "@chakra-ui/react";
import { FiHome, FiUsers, FiLogOut, FiSettings } from "react-icons/fi";

export default function IntranetLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        router.push("/");
        //console.log("No user authenticated, redirecting to home.");
      }
    });
    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = async () => {
    try {
      await logoOut();
      router.push("/");
    } catch (error) {
      console.error("Error al tancar sessió:", error);
    }
  };

  if (loading) {
    return (
      <Flex height="100vh" align="center" justify="center" direction="column">
        <Spinner size="xl" mb={4} />
        <Text>Comprovant credencials...</Text>
      </Flex>
    );
  }

  return (
    <Flex height="100vh" overflow="hidden">
      {/* SIDEBAR */}
      <Box
        as="nav"
        w="250px"
        bg="white"
        borderRight="1px solid"
        borderColor="gray.200"
        display="flex"
        flexDirection="column"
        p={5}
      >
        <Text fontSize="lg" fontWeight="bold" mb={10} color="argila" >
          Tauler de control <br/> Matossers
        </Text>

        <VStack align="stretch" gap={2} flex="1">
          <NavItem icon={FiHome} onClick={() => router.push("/intranet/cpanel")}>
            Inici
          </NavItem>
          <NavItem icon={FiUsers} onClick={() => router.push("/intranet/cpanel/castellers")}>
            Castellers
          </NavItem>
        </VStack>

          <Button
            variant="ghost"
            width="full"
            justifyContent="flex-start"
            colorScheme="red"
            onClick={handleLogout}
          >
            <Icon as={FiLogOut} mr={3} />
            Tancar Sessió
          </Button>
      </Box>

      {/* CONTINGUT PRINCIPAL */}
      <Box flex="1" overflowY="auto" bg="gray.50" p={8}>
        {children}
      </Box>
    </Flex>
  );
}

const NavItem = ({ icon, children, onClick }) => (
  <Flex
    align="center"
    p={3}
    cursor="pointer"
    borderRadius="md"
    _hover={{ bg: "gray.100" }}
    onClick={onClick}
    transition="0.2s"
  >
    <Icon as={icon} mr={3} />
    <Text fontWeight="medium">{children}</Text>
  </Flex>
);