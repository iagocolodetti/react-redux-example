import text from './text';

describe('reducers', () => {
  describe('text', () => {
    it('should provide the initial state', () => {
      expect(text(undefined, {})).toBe('');
    });

    it('should ignore unknown actions', () => {
      expect(text('', { type: 'unknown' })).toBe('');
    });

    it('should handle SET_TEXT action', () => {
      expect(text('', { type: 'SET_TEXT', text: 'test' })).toBe('test');
    });
  });
});
