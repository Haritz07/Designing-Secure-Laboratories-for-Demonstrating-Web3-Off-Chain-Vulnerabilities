const express = require('express');
const app = express();
const port = 3000;

// Hardcoding 3 demo users
const transactions = {
    '1': [{ txId: 'tx1001', amount: 10 }, { txId: 'tx1002', amount: 30}],
    '2': [{ txId: 'tx2001', amount: 50 }, { txId: 'tx2002', amount: 70 }],
    '3': [{ txId: 'tx3001', amount: 90 }, { txId: 'tx2002', amount: 110 }],
}

// Route definition
app.get('/api/v1/user/:user_id/transactions', (req, res) => {
    const userId = req.params.user_id;
    if (transactions[userId]) {
        res.json({ user: userId, transactions: transactions[userId] });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Relayer API listening at http://localhost:${port}`);
    
});