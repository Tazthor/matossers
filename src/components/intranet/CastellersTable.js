"use client";
import { useState, useMemo } from "react";
import {
  Table,
  Input,
  Badge,
  Button,
  Box,
  Flex,
  HStack,
  Checkbox,
  Text,
  Dialog,
  Portal,
} from "@chakra-ui/react";
import {
  LuSearch,
  LuDownload,
  LuArrowUpDown,
  LuArrowUp,
  LuArrowDown,
  LuTrash2,
} from "react-icons/lu";
import { deleteCasteller } from "../../app/utils/utils_intranet";

export default function CastellersTable({ data }) {
  const [filter, setFilter] = useState("");
  const [onlyActive, setOnlyActive] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // 1. Lògica de filtrat i ordenació
  const processedData = useMemo(() => {
    let result = [...data];
    if (onlyActive) result = result.filter((c) => c.actiu === true);
    if (filter) {
      const searchStr = filter.toLowerCase();
      result = result.filter((c) =>
        `${c.nom} ${c.cognom} ${c.dni} ${c.email}`.toLowerCase().includes(searchStr)
      );
    }
    if (sortConfig.key) {
      result.sort((a, b) => {
        let valA = a[sortConfig.key]?.toString().toLowerCase() || "";
        let valB = b[sortConfig.key]?.toString().toLowerCase() || "";
        if (sortConfig.key === "nom") {
          valA = `${a.nom} ${a.cognom}`.toLowerCase();
          valB = `${b.nom} ${b.cognom}`.toLowerCase();
        }
        if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
        if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return result;
  }, [data, filter, onlyActive, sortConfig]);

  const requestSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <LuArrowUpDown style={{ opacity: 0.3 }} />;
    return sortConfig.direction === "asc" ? <LuArrowUp /> : <LuArrowDown />;
  };

  const downloadJSON = () => {
    const fileName = `llistat_castellers_${new Date().toISOString().slice(0, 10)}.json`;
    const jsonStr = JSON.stringify(processedData, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Box bg="white" p={4} borderRadius="lg" shadow="sm" borderWidth="1px" borderColor="border.subtle">
      {/* CAPÇALERA */}
      <Flex mb={4} justify="space-between" align="center" gap={4} wrap="wrap">
        <Button size="sm" variant="outline" colorPalette="teal" onClick={downloadJSON}>
          <LuDownload /> Exportar JSON
        </Button>
        <HStack gap={4}>
          <Checkbox.Root checked={onlyActive} onCheckedChange={(e) => setOnlyActive(!!e.checked)}>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label fontSize="sm" cursor="pointer" userSelect="none">Només actius</Checkbox.Label>
          </Checkbox.Root>
          <HStack gap={2} maxW="350px" flex="1" border="1px solid" borderColor="gray.200" px={3} py={1} borderRadius="md">
            <LuSearch color="gray" />
            <Input placeholder="Cerca..." value={filter} onChange={(e) => setFilter(e.target.value)} size="sm" variant="plain" />
          </HStack>
        </HStack>
      </Flex>

      {/* TAULA */}
      <Box overflowX="auto">
        <Table.Root size="sm" variant="line" interactive>
          <Table.Header bg="bg.subtle">
            <Table.Row>
              <Table.ColumnHeader cursor="pointer" onClick={() => requestSort("nom")} _hover={{ color: "teal.600", bg: "gray.50" }} userSelect="none">
                <HStack gap={1}><Text>Nom Complet</Text> {getSortIcon("nom")}</HStack>
              </Table.ColumnHeader>
              <Table.ColumnHeader cursor="pointer" onClick={() => requestSort("email")} _hover={{ color: "teal.600", bg: "gray.50" }} userSelect="none">
                <HStack gap={1}><Text>Email</Text> {getSortIcon("email")}</HStack>
              </Table.ColumnHeader>
              <Table.ColumnHeader>Telèfon</Table.ColumnHeader>
              <Table.ColumnHeader>Població</Table.ColumnHeader>
              <Table.ColumnHeader>Estat</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Accions</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          
          <Table.Body key={`${sortConfig.key}-${sortConfig.direction}-${onlyActive}`}>
            {processedData.map((casteller) => (
              <CastellerRow key={casteller.dni || casteller.email} casteller={casteller} />
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  );
}

// COMPONENT DE FILA SEPARAT
function CastellerRow({ casteller }) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const res = await deleteCasteller(casteller.dni);
    if (res.success) {
      window.location.reload();
    } else {
      alert("Error en esborrar: " + res.error);
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <Table.Row>
      <Table.Cell fontWeight="bold">{casteller.nom} {casteller.cognom}</Table.Cell>
      <Table.Cell fontSize="xs" color="fg.muted">{casteller.email}</Table.Cell>
      <Table.Cell>{casteller.phone}</Table.Cell>
      <Table.Cell>{casteller.poblacio}</Table.Cell>
      <Table.Cell>
        <Badge variant="solid" colorPalette={casteller.actiu ? "green" : "red"}>
          {casteller.actiu ? "Actiu" : "No actiu"}
        </Badge>
      </Table.Cell>
      <Table.Cell textAlign="end">
        <HStack gap={2} justify="flex-end">
          <Button size="xs" variant="ghost" colorPalette="blue">Editar</Button>
          
          {/* DIÀLEG AMB PORTAL PER CENTRAR-LO A LA PANTALLA */}
          <Dialog.Root 
            open={open} 
            onOpenChange={(e) => setOpen(e.open)}
            role="alertdialog"
          >
            <Dialog.Trigger asChild>
              <Button size="xs" variant="ghost" bg="red.700">
                <LuTrash2 /> Esborrar
              </Button>
            </Dialog.Trigger>
            
            <Dialog.Backdrop /> {/* Això enfosqueix el fons */}
            
            <Portal>
              <Dialog.Positioner padding="4"> 
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Confirmar eliminació</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <Text>
                      Estàs segur que vols esborrar a <strong>{casteller.nom} {casteller.cognom}</strong>? 
                      Aquesta acció esborrarà el registre de la base de dades definitivament.
                    </Text>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline" disabled={loading}>Cancel·lar</Button>
                    </Dialog.ActionTrigger>
                    <Button bg="red.700" loading={loading} onClick={handleDelete}>
                      Sí, esborrar
                    </Button>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger />
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>

        </HStack>
      </Table.Cell>
    </Table.Row>
  );
}