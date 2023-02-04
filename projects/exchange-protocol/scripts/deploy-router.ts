import { ethers, network, run } from "hardhat";
import config from "../config";

const main = async () => {
  // Compile contracts
  await run("compile");
  console.log("Compiled contracts.");

  const networkName = network.name;

  // Sanity checks
  // if (networkName === "mainnet") {
  //   if (!process.env.KEY_MAINNET) {
  //     throw new Error("Missing private key, refer to README 'Deployment' section");
  //   }
  // } else if (networkName === "testnet") {
  //   if (!process.env.KEY_TESTNET) {
  //     throw new Error("Missing private key, refer to README 'Deployment' section");
  //   }
  // }

  // if (!config.PancakeRouter[networkName] || config.PancakeRouter[networkName] === ethers.constants.AddressZero) {
  //   throw new Error("Missing router address, refer to README 'Deployment' section");
  // }

  // if (!config.WBNB[networkName] || config.WBNB[networkName] === ethers.constants.AddressZero) {
  //   throw new Error("Missing WBNB address, refer to README 'Deployment' section");
  // }

  console.log("Deploying to network:", networkName);

  // Deploy PancakeZapV1
  console.log("Deploying PancakeRouter ..");
  
  // const factory = "0x51427dAc011A182dbeaB990Bf29C79f5F9A7E7C0" // bsc testnet
  // const wbnb = "0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F" // bsc testnet
  const factory = "0x14bE31a37607a56C97d3Aa10AdF294e1Fe442969" // goerli
  const wbnb = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6" // goerli
  
  const PancakeRouter = await ethers.getContractFactory("PancakeRouter");

  const pancakeRouter = await PancakeRouter.deploy(factory,wbnb);

  await pancakeRouter.deployed();

  console.log("PancakeRouter deployed to:", pancakeRouter.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
