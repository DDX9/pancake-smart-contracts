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
  console.log("Deploying PancakeFactory ..");
  
  // const feetoSetter = "0x7B86C1670120206cd31C6CfAE35A6f013d12717c" // bsc testnet
  const feetoSetter = "0xF22CB1F2A5859b0563a33e976B34BA80054785A7" // goerli
  //my router: 0x5FbDB2315678afecb367f032d93F642f64180aa3
  
  const PancakeFactory = await ethers.getContractFactory("PancakeFactory");

  const pancakeFactory = await PancakeFactory.deploy(feetoSetter);

  await pancakeFactory.deployed();

  console.log("PancakeFactory deployed to:", pancakeFactory.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
