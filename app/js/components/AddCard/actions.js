export const addCard = (title, columnId) => ({
    type: 'CARDS:ADD', payload: { title, columnId }
});