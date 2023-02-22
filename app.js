const { ethers } = require("ethers");

(async () => {
  while (true) {
    // Membuat wallet acak/random
    const wallet = ethers.Wallet.createRandom();

    // Definisikan provider
    const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/b5838b5679c54cacb756af57c51cc5e7");

    // melihat saldo/balance dari address
    const balance = await provider.getBalance(wallet.address);
    // mengubah nilai Ether dalam satuan wei menjadi nilai Ether dalam satuan ether. (10^18)
    const eth = ethers.utils.formatEther(balance);

    // Output print
    console.log("Address: " + wallet.address);
    console.log("Public Key: " + wallet.publicKey);
    console.log("Private Key:" + wallet.privateKey);
    console.log(`Balance: ${eth} ETH`);
    console.log("=====================================================");

    // Jika balance nilainya selain 0, maka looping berhenti
    if (eth != 0) break;
  }
})();
