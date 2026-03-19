import getHealthStatus from '../src/index';

test.each([
    [{ name: 'Маг', health: 90 }, 'healthy'],
    [{ name: 'Маг', health: 45 }, 'wounded'],
    [{ name: 'Маг', health: 10 }, 'critical'],
])('should return correct health status for %s', (character, expected) => {
    const result = getHealthStatus(character);
    expect(result).toBe(expected);
});