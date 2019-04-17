// const BlockChain=()=>{
// }
// Data structure of Block chain
class BlockChain{
    constructor(){
        this.chain= [];
        // all of the blocks will be storedin this chain array
        this.newTransactions=[]; 
        // all of the new transactions created before placing it into a block
        
    }
}
BlockChain.prototype.createNewBlock = (nonce, previousBlockHash, hash)=>{
const newBlock={
index: this.chain.length+1,
timestamp: Date.now(),
transactions: this.newTransactions,
nonce: nonce,
hash: hash,
previousBlockHash: previousBlockHash
};
this.newTransactions = [];
this.chain.push(newBlock);
return newBlock;
}