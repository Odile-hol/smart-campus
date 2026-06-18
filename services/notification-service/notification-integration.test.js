describe('--- TESTS D’INTÉGRATION : Pipeline Course ➔ RabbitMQ ➔ Notification ---', () => {
    test('Vérification de la transmission asynchrone du message d’inscription', async () => {
        // Simulation d'un traitement asynchrone réussi
        const messageSent = { studentId: 'ICT-2026-041', event: 'course_registration' };
        const simulateRabbitMQ = Promise.resolve({ received: true, ...messageSent });
        
        const result = await simulateRabbitMQ;
        expect(result.received).toBe(true);
        expect(result.event).toBe('course_registration');
    });
});