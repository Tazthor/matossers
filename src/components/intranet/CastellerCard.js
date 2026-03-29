"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Field,
  Input,
  Stack,
  Text,
  Heading,
  Flex,
  HStack,
  Textarea,
  Separator,
  Grid,
} from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch"; // Snippet de Chakra v3
import { LuSave, LuArrowLeft } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { updateCasteller } from "@/app/utils/utils_intranet";
import Link from "next/link";

export default function CastellerCard({ initialData }) {
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (details) => {
    setFormData((prev) => ({ ...prev, actiu: details.checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await updateCasteller(formData.dni, formData);
    if (res.success) {
      alert("Dades actualitzades correctament!");
      router.back();
    } else {
      alert("Error: " + res.error);
    }
    setLoading(false);
  };

  return (
    <Box
      maxW="800px"
      mx="auto"
      p={6}
      bg="white"
      borderRadius="xl"
      shadow="md"
      border="1px solid"
      borderColor="gray.100"
    >
      <Flex justify="space-between" align="center" mb={6}>
        <HStack gap={4}>
          <Link href="/intranet/cpanel/castellers" passHref>
            <Flex alignItems="center" gap="6px">
              <LuArrowLeft />{" "}
              <Text fontSize="xs" fontWeight="medium">
                Tornar al Llistat
              </Text>
            </Flex>
          </Link>
          <Box>
            <Heading size="lg">
              {formData.nom} {formData.cognom}
            </Heading>
            <Text color="gray.500" fontSize="sm">
              DNI: {formData.dni}
            </Text>
          </Box>
        </HStack>
        <HStack gap={3}>
          <Text
            fontSize="sm"
            fontWeight="bold"
            color={formData.actiu ? "green.600" : "red.600"}
          >
            {formData.actiu ? "ACTIU" : "INACTIU"}
          </Text>
          <Switch
            checked={formData.actiu}
            onCheckedChange={handleSwitchChange}
            colorPalette="green"
          />
        </HStack>
      </Flex>

      <Separator mb={8} />

      <form onSubmit={handleSubmit}>
        <Stack gap={8}>
          {/* SECCIÓ DADES PERSONALS */}
          <Box>
            <Heading size="sm" mb={4} color="teal.700">
              Dades Personals
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Field.Root label="Nom">
                <Input
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                />
              </Field.Root>
              <Field.Root label="Cognom">
                <Input
                  name="cognom"
                  value={formData.cognom}
                  onChange={handleChange}
                />
              </Field.Root>
              <Field.Root label="Malnom">
                <Input
                  name="malnom"
                  value={formData.malnom}
                  onChange={handleChange}
                  placeholder="Com el coneixen a la colla?"
                />
              </Field.Root>
              <Field.Root label="Data de Naixement">
                <Input
                  name="dataNaixement"
                  value={formData.dataNaixement}
                  onChange={handleChange}
                  placeholder="DD/MM/AAAA"
                />
              </Field.Root>
              <Field.Root label="Gènere">
                <Input
                  name="genere"
                  value={formData.genere}
                  onChange={handleChange}
                />
              </Field.Root>
            </Grid>
          </Box>

          {/* SECCIÓ CONTACTE */}
          <Box>
            <Heading size="sm" mb={4} color="teal.700">
              Contacte i Localització
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Field.Root label="Email">
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Field.Root>
              <Field.Root label="Telèfon">
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Field.Root>
              <Field.Root label="Adreça" span={2}>
                <Input
                  name="adreca"
                  value={formData.adreca}
                  onChange={handleChange}
                />
              </Field.Root>
              <Field.Root label="Població">
                <Input
                  name="poblacio"
                  value={formData.poblacio}
                  onChange={handleChange}
                />
              </Field.Root>
              <Field.Root label="Codi Postal">
                <Input name="cp" value={formData.cp} onChange={handleChange} />
              </Field.Root>
            </Grid>
          </Box>

          {/* SECCIÓ ALTRES */}
          <Box>
            <Heading size="sm" mb={4} color="teal.700">
              Informació Addicional
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Field.Root label="Professió">
                <Input
                  name="professio"
                  value={formData.professio}
                  onChange={handleChange}
                />
              </Field.Root>
              <Field.Root label="Centre Educatiu">
                <Input
                  name="centreEducatiu"
                  value={formData.centreEducatiu}
                  onChange={handleChange}
                />
              </Field.Root>
              <Field.Root label="Tutor (si és menor)">
                <Input
                  name="tutor"
                  value={formData.tutor}
                  onChange={handleChange}
                />
              </Field.Root>
              <Field.Root label="Missatges/Notes" span={2}>
                <Textarea
                  name="msg"
                  value={formData.msg}
                  onChange={handleChange}
                />
              </Field.Root>
            </Grid>
          </Box>

          <Button
            type="submit"
            colorPalette="teal"
            size="lg"
            loading={loading}
            width="full"
            mt={4}
          >
            <LuSave /> Guardar Canvis
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
