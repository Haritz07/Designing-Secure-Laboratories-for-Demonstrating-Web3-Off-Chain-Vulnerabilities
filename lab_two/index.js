const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// Vulnerable signing endpoint: Lack of validation of recipient!
app.post('/api/v1/wallet/:wallet_alias/sign', (req, res) => {
  const { recipient_address, amount } = req.body;
  const walletAlias = req.params.wallet_alias;
  
  // Here, proper validation of recipient_address (e.g., checking length, prefix, hex format) is skipped.
  // However in a secure version, you'd check that recipient_address is a valid Ethereum address.
  
  // Simulate signing the transaction (returning a fake signature string)
  const fakeSignature = `signed-${walletAlias}-${recipient_address}-${amount}`;
  
  res.json({
    wallet_alias: walletAlias,
    recipient_address: recipient_address,
    amount: amount,
    signature: fakeSignature
  });
});

app.listen(port, () => {
  console.log(`Signing service listening at http://localhost:${port}`);
});
