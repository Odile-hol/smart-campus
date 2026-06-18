// Mock local de la fonction de validation
const validateUserSignup = (userData) => {
    if (!userData.email.endsWith('@ict-university.cm')) {
        return { isValid: false, error: 'Email institutionnel requis' };
    }
    return { isValid: true };
};

describe('--- TESTS UNITAIRES : Gestion des utilisateurs ---', () => {
    test('Validation réussie avec des données d’étudiant valides', () => {
        const studentData = {
            email: 'odile.hol@ict-university.cm',
            role: 'student',
            password: 'SecurePassword123'
        };
        const result = validateUserSignup(studentData);
        expect(result.isValid).toBe(true);
    });

    test('Rejet systématique si l’email n’appartient pas au domaine de l’ICT University', () => {
        const fakeData = {
            email: 'hacker@gmail.com',
            role: 'student',
            password: 'SecurePassword123'
        };
        const result = validateUserSignup(fakeData);
        expect(result.isValid).toBe(false);
        expect(result.error).toContain('Email institutionnel requis');
    });
});