import produce from 'immer';
import { combineReducers } from 'redux';

let savedState = localStorage.getItem('AppState');
let initialState = {
    cards: [],
    columns: [
        { id: 0, title: 'To Do', cards: [] },
        { id: 1, title: 'In Progress', cards: [] },
        { id: 2, title: 'Done', cards: [] }
    ]
};

let cardId = 0;

if (savedState) {
    try {
        initialState = JSON.parse(savedState);
    } catch (error) {
        console.warn('Be aware: app state saved in localStorage can`t be parsed correctly');
    }
}

const columns = (state = initialState.columns, action) => produce(state, (draftState) => {
    switch (action.type) {
        case 'CARDS:ADD': {
            const { title, columnId } = action.payload;
            const column = draftState.find(column => column.id === columnId);

            column.cards.push({ id: cardId, title, columnId });

            cardId++;

            break;
        }

        case 'CARDS:SET:COLUMN': {
            const { cardId, prevColumnId, nextColumnId } = action.payload;
            const prevColumn = draftState.find(column => column.id === prevColumnId);
            const nextColumn = draftState.find(column => column.id === nextColumnId);
            const card = prevColumn.cards.find(card => card.id === cardId);

            card.columnId = nextColumnId;
            prevColumn.cards = prevColumn.cards.filter(card => card.id !== cardId);
            nextColumn.cards = [...nextColumn.cards, card];

            break;
        }
    }
});

const cards = (state = initialState.cards, action) => produce(state, (draftState) => {
    switch (action.type) {
       /* case 'CARDS:ADD': {
            const { title, columnId } = action.payload;

            draftState.push({ id: draftState.length, title, columnId });

            break;
        }

        case 'CARDS:SET:COLUMN': {
            const { cardId, columnId } = action.payload;
            const card = draftState.find(card => card.id === cardId);

            card.columnId = columnId;

            break;
        }*/
    }
});

export default combineReducers({
    cards,
    columns
});