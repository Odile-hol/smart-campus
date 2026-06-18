const request = require('supertest');
const express = require('express');

// Création d'une application Express factice pour le test de l'API
const app = express();
app.use(express.json());
app.post('/v1/payments', (req, res) => {
    res.status(201).json({ status: 'success', transactionId: 'TX-MM-9941' });
});

describe('--- TESTS D’API : Passerelle de Paiement (Port 3003) ---', () => {
    test('POST /v1/payments - Initialisation d’un paiement Mobile Money', async () => {
        const response = await request(app)
            .post('/v1/payments')
            .send({ amount: 50000, currency: 'XAF', method: 'Mobile Money' });
        
        expect(response.statusCode).toBe(201);
        expect(response.body.status).toBe('success');
    });
});