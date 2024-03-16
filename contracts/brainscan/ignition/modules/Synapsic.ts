import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DEFAULT_INITIAL_OWNER_ADDRESS =
  "0x8e05f4E1d11A20d6ef27CBD19788d0c36eb868F4";
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

const SynapsicModule = buildModule("SynapsicModule", (m) => {
  const initialOwner = m.getParameter<string>(
    "initialOwner",
    DEFAULT_INITIAL_OWNER_ADDRESS
  );

  // @ts-ignore
  if (initialOwner == ZERO_ADDRESS) {
    throw new Error(
      "Initial owner address must be specified and not the zero address."
    );
  }

  const synapsic = m.contract("Synapsic", [initialOwner], {});

  return { synapsic };
});

export default SynapsicModule;
