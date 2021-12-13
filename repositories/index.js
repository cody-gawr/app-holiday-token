import BlockNativeRepository from "./BlockNativeRepository";

export default ($store, $axios) => ({
  blocknative: BlockNativeRepository($store)
});
