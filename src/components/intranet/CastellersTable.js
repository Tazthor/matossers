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
  Link
} from "@chakra-ui/react";
import {
  LuSearch,
  LuDownload,
  LuArrowUpDown,
  LuArrowUp,
  LuArrowDown,
  LuTrash2,
  LuChevronLeft,
  LuChevronRight,
  LuFilePen
} from "react-icons/lu";
import { deleteCasteller } from "../../app/utils/utils_intranet";

export default function CastellersTable({ data }) {
  const [filter, setFilter] = useState("");
  const [onlyActive, setOnlyActive] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [pageSize, setPageSize] = useState("Tots");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Primer filtrem i ordenem
  const filteredAndSortedData = useMemo(() => {
    let result = [...data];
    if (onlyActive) result = result.filter((c) => c.actiu === true);
    if (filter) {
      const searchStr = filter.toLowerCase();
      result = result.filter((c) =>
        `${c.nom} ${c.cognom} ${c.dni} ${c.email}`
          .toLowerCase()
          .includes(searchStr),
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

  // 2. Calculem la paginació
  const limit =
    pageSize === "Tots" ? filteredAndSortedData.length : parseInt(pageSize);
  const totalPages = Math.ceil(filteredAndSortedData.length / limit) || 1;

  // Si el filtre fa que tinguem menys pàgines de les que marca currentPage,
  const validatedPage = Math.min(currentPage, totalPages);

  const paginatedData = useMemo(() => {
    const start = (validatedPage - 1) * limit;
    return filteredAndSortedData.slice(start, start + limit);
  }, [filteredAndSortedData, limit, validatedPage]);

  // FUNCIONS DE CONTROL (Ara gestionen el reset de pàgina directament)
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleActiveChange = (e) => {
    setOnlyActive(!!e.checked);
    setCurrentPage(1);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(e.target.value);
    setCurrentPage(1);
  };

  const downloadJSON = () => {
    const fileName = `llistat_castellers_${new Date().toISOString().slice(0, 10)}.json`;
    const jsonStr = JSON.stringify(filteredAndSortedData, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Box
      bg="white"
      p={4}
      borderRadius="lg"
      shadow="sm"
      borderWidth="1px"
      borderColor="border.subtle"
    >
      <Flex mb={4} justify="space-between" align="center" gap={4} wrap="wrap">
        <HStack gap={3}>
          <Button
            size="sm"
            variant="outline"
            colorPalette="teal"
            onClick={downloadJSON}
          >
            <LuDownload /> Exportar JSON
          </Button>
        </HStack>

        <HStack gap={4}>
          <Flex align="center" gap={2}>
            <Text fontSize="xs" fontWeight="medium">
              Mostrar registres:
            </Text>
            <select
              value={pageSize}
              onChange={handlePageSizeChange}
              style={{
                fontSize: "12px",
                border: "1px solid #E2E8F0",
                borderRadius: "4px",
                padding: "2px 8px",
              }}
            >
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="Tots">Tots</option>
            </select>
          </Flex>

          <Checkbox.Root
            checked={onlyActive}
            onCheckedChange={handleActiveChange}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label fontSize="sm" cursor="pointer" userSelect="none">
              Només actius
            </Checkbox.Label>
          </Checkbox.Root>
          <HStack
            gap={2}
            maxW="350px"
            flex="1"
            px={3}
            py={1}
            borderRadius="md"
          >
            <LuSearch color="gray" />
            <Input
              placeholder="Cerca..."
              value={filter}
              onChange={handleFilterChange}
              size="sm"
              variant="plain"
            />
          </HStack>
        </HStack>
      </Flex>

      <Box overflowX="auto">
        <Table.Root size="sm" variant="line" interactive>
          <Table.Header bg="bg.subtle">
            <Table.Row>
              <Table.ColumnHeader
                cursor="pointer"
                onClick={() => {
                  setSortConfig({
                    key: "nom",
                    direction: sortConfig.direction === "asc" ? "desc" : "asc",
                  });
                  setCurrentPage(1);
                }}
                userSelect="none"
              >
                <HStack gap={1}>
                  <Text>Nom Complet</Text>{" "}
                  {sortConfig.key === "nom" ? (
                    sortConfig.direction === "asc" ? (
                      <LuArrowUp />
                    ) : (
                      <LuArrowDown />
                    )
                  ) : (
                    <LuArrowUpDown style={{ opacity: 0.3 }} />
                  )}
                </HStack>
              </Table.ColumnHeader>
              <Table.ColumnHeader
                cursor="pointer"
                onClick={() => {
                  setSortConfig({
                    key: "email",
                    direction: sortConfig.direction === "asc" ? "desc" : "asc",
                  });
                  setCurrentPage(1);
                }}
                userSelect="none"
              >
                <HStack gap={1}>
                  <Text>Email</Text>{" "}
                  {sortConfig.key === "email" ? (
                    sortConfig.direction === "asc" ? (
                      <LuArrowUp />
                    ) : (
                      <LuArrowDown />
                    )
                  ) : (
                    <LuArrowUpDown style={{ opacity: 0.3 }} />
                  )}
                </HStack>
              </Table.ColumnHeader>
              <Table.ColumnHeader>Telèfon</Table.ColumnHeader>
              <Table.ColumnHeader>Població</Table.ColumnHeader>
              <Table.ColumnHeader>Estat</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Accions</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>

          <Table.Body
            key={`${sortConfig.key}-${sortConfig.direction}-${onlyActive}-${validatedPage}-${pageSize}`}
          >
            {paginatedData.map((casteller) => (
              <CastellerRow
                key={casteller.dni || casteller.email}
                casteller={casteller}
              />
            ))}
          </Table.Body>
        </Table.Root>
      </Box>

      {pageSize !== "Tots" && (
        <Flex mt={4} justify="space-between" align="center">
          <Text fontSize="xs" color="gray.600">
            Mostrant {paginatedData.length} de {filteredAndSortedData.length}{" "}
            castellers
          </Text>
          <HStack gap={2}>
            <Button
              size="xs"
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={validatedPage === 1}
            >
              <LuChevronLeft /> Anterior
            </Button>
            <Text fontSize="xs" fontWeight="bold">
              Pàgina {validatedPage} de {totalPages}
            </Text>
            <Button
              size="xs"
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={validatedPage === totalPages}
            >
              Següent <LuChevronRight />
            </Button>
          </HStack>
        </Flex>
      )}
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
      <Table.Cell fontWeight="bold">
        {casteller.nom} {casteller.cognom}
      </Table.Cell>
      <Table.Cell fontSize="xs" color="fg.muted">
        {casteller.email}
      </Table.Cell>
      <Table.Cell>{casteller.phone}</Table.Cell>
      <Table.Cell>{casteller.poblacio}</Table.Cell>
      <Table.Cell>
        <Badge variant="solid" colorPalette={casteller.actiu ? "green" : "red"}>
          {casteller.actiu ? "Actiu" : "No actiu"}
        </Badge>
      </Table.Cell>
      <Table.Cell textAlign="end">
        <HStack gap={2} justify="flex-end">
          <Link href={`/intranet/cpanel/castellers/edita?dni=${casteller.dni}`}>
            <Button size="xs" variant="ghost">
              <LuFilePen />
              Editar
            </Button></Link>

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

            <Dialog.Backdrop />

            <Portal>
              <Dialog.Positioner padding="4">
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Confirmar eliminació</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <Text>
                      Estàs segur que vols esborrar a{" "}
                      <strong>
                        {casteller.nom} {casteller.cognom}
                      </strong>
                      ? Aquesta acció esborrarà el registre de la base de dades
                      definitivament.
                    </Text>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline" disabled={loading}>
                        Cancel·lar
                      </Button>
                    </Dialog.ActionTrigger>
                    <Button
                      bg="red.700"
                      loading={loading}
                      onClick={handleDelete}
                    >
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
