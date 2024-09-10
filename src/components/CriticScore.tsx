import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 80 ? "yellow" : "";

  return (
    <Badge colorScheme={color} borderRadius={2} paddingX="8px">
      {score}
    </Badge>
  );
};

export default CriticScore;
