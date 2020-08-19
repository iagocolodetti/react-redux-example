import todo from './todo';

const MOCK_TODO_LIST = [
  {
    id: 0,
    todo: 'TODO 1'
  }
];

const MOCK_TODO_LIST_TO_REMOVE = [
  {
    id: 0,
    todo: 'TODO 1'
  },
  {
    id: 1,
    todo: 'TODO 2'
  }
];

describe('reducers', () => {
  describe('todo', () => {
    it('should provide the initial state', () => {
      expect(todo(undefined, {})).toStrictEqual([]);
    });

    it('should ignore unknown actions', () => {
      expect(todo([], { type: 'unknown' })).toStrictEqual([]);
    });

    it('should handle ADD_TODO action', () => {
      expect(todo([], { type: 'ADD_TODO', todo: 'TODO 1' })).toStrictEqual(MOCK_TODO_LIST);
    });

    it('should handle REMOVE_TODO_ID action', () => {
      expect(todo(MOCK_TODO_LIST_TO_REMOVE, { type: 'REMOVE_TODO_ID', id: 1 })).toStrictEqual(MOCK_TODO_LIST);
    });
  });
});
