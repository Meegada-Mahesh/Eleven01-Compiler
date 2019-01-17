const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

const solc = require("solc");
const simple = path.resolve(__dirname,'./../contracts','SimpleStorage.sol');
const source = fs.readFileSync(simple,'UTF-8');
const SimpleCompile = solc.compile(source,1).contracts[':SimpleStorage'];
const bytecode = SimpleCompile.bytecode;
const abi = JSON.parse(SimpleCompile.interface);


// Web3 js connection to RPC and setting web3 as provider
const Web3 = require("web3");
const RPC_ENDPOINT = "http://40.83.215.160:8083/api/node/rpc";
const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);
const web3 = new Web3(provider);
const Simple = new web3.eth.Contract(abi)
const password = "mahesh"
var allAccounts;

router.get('/landing',function(req,res){
    res.send("Hello Landing page")
})

router.get('/dashboard',function(req,res){
    res.send("Hello Dashboard page")
})


module.exports = router;


