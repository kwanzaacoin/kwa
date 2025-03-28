let web3;
let userAccount;

const connectWalletButton = document.getElementById('connectWallet');
const accountInfo = document.getElementById('accountInfo');
const accountAddress = document.getElementById('accountAddress');
const accountBalance = document.getElementById('accountBalance');
const buyCoinButton = document.getElementById('buyCoin');

connectWalletButton.addEventListener('click', connectWallet);
buyCoinButton.addEventListener('click', buyCoin);

async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            userAccount = accounts[0];
            accountAddress.textContent = userAccount;
            const balance = await web3.eth.getBalance(userAccount);
            accountBalance.textContent = web3.utils.fromWei(balance, 'ether');
            accountInfo.style.display = 'block';
            buyCoinButton.style.display = 'block';
            connectWalletButton.style.display = 'none';
        } catch (error) {
            console.error('User denied account access');
        }
    } else {
        console.log('Please install MetaMask!');
    }
}

async function buyCoin() {
    // Replace with your actual smart contract address and ABI
    const contractAddress = '0xYourContractAddress';
    const contractABI = []; // Your contract ABI goes here

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    try {
        // Replace with your actual function name and parameters
        await contract.methods.buyCoin().send({ from: userAccount, value: web3.utils.toWei('0.1', 'ether') });
        console.log('Coin purchased successfully!');
    } catch (error) {
        console.error('Error buying coin:', error);
    }
}
