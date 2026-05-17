import { Box, Text } from "@chakra-ui/react";
import { getDataCollection, getData } from "@/app/utils/utils";
import CastellerCard from "@/components/intranet/CastellerCard";

export async function generateStaticParams() {
  const castellers = await getDataCollection("castellers");
  return castellers.map((casteller) => {
    return { dni: casteller.dni };
  });
}

export default async function EditCastellerPage({ params }) {
  const resolvedParams = await params;
  const dni = resolvedParams.dni;
  const castellerData = await getData("castellers", dni);
console.log("Casteller Data:", castellerData); // Debugging log
  if (!castellerData) {
    return (
      <Box p={8}>
        <Text>No s&apos;ha trobat el casteller amb DNI: {dni}</Text>
      </Box>
    );
  }

  return (
    <Box>
      <CastellerCard initialData={castellerData} />
    </Box>
  );
}
