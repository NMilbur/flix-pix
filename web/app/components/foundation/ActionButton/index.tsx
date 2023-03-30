import { Button } from "@chakra-ui/react";
import { CSSProperties, ReactElement } from "react";

interface ActionButtonProps {
  buttonColor?: string;
  clickHandler: () => void;
  extraStyles: CSSProperties;
  icon: ReactElement;
  title?: string;
}

const ActionButton = ({
  buttonColor,
  clickHandler,
  icon,
  title,
  extraStyles,
}: ActionButtonProps) => (
  <Button width="100%" style={extraStyles} bg={buttonColor} onClick={clickHandler} title={title}>
    {icon}
  </Button>
);

export default ActionButton;
