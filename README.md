# WalletEthGenerator-Looping-Nodejs

## Bisakah membuat wallet acak untuk mendapatkan wallet yang dimiliki seorang? 

Secara teori, mungkin saja menghasilkan pasangan kunci pribadi/publik yang sudah terkait dengan akun Ethereum yang memiliki saldo. Namun, kemungkinan keberhasilannya sangat kecil, hampir mustahil.

Setiap akun Ethereum memiliki alamat unik yang dihasilkan dari proses hashing yang memerlukan entropi yang cukup tinggi. Kunci pribadi juga dihasilkan secara acak dan terdiri dari bilangan bulat 256 bit. Karena jumlah kemungkinan alamat dan kunci pribadi yang mungkin sangat besar, sangat tidak mungkin untuk secara acak menghasilkan pasangan kunci pribadi/publik yang terkait dengan akun yang memiliki saldo.

## Script membuat wallet ETH acak menggunakan runtime Node.js

Node.js Versi 18

##### Library atau dependencies:
ethers Versi 5.7.2

Kita tidak menggunakan versi terbaru, karena versi terbaru belum stabil. 

#### Penginstalan library
```
npm i ethers@5.7.2
```

## Code sederhana (ini sangat cepat) 

Run? 
```
node index
```
`index.js`
```
const { ethers } = require("ethers");

  while (true) {
    // Membuat wallet acak/random
    const wallet = ethers.Wallet.createRandom();

    // Output print
    console.log("Address: " + wallet.address);
    console.log("Public Key: " + wallet.publicKey);
    console.log("Private Key:" + wallet.privateKey);
    console.log("=====================================================");
  }
```
## Jika menginginkan kode mengecek balance

Run? 
```
node app
```
`app.js`
```
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
```

## Output Respon:

![](/download.png)
