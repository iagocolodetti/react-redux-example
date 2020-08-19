import counter from './counter';

describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
      expect(counter(undefined, {})).toBe(0);
    });

    it('should ignore unknown actions', () => {
      expect(counter(0, { type: 'unknown' })).toBe(0);
    });

    it('should handle INCREMENT action', () => {
      expect(counter(0, { type: 'INCREMENT' })).toBe(1);
    });

    it('should handle DECREMENT action', () => {
      expect(counter(0, { type: 'DECREMENT' })).toBe(-1);
    });
  });
});
