export const changeCardColumn = (cardId, prevColumnId, nextColumnId) => ({
    type: 'CARDS:SET:COLUMN', payload: { cardId, prevColumnId, nextColumnId}
});