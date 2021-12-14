import BlockNativeRepository from "./BlockNativeRepository";
import Web3Repository from "./Web3Repository";

export default ($store, $axios) => ({
  blocknative: BlockNativeRepository($store),
  web3: Web3Repository(),
});
