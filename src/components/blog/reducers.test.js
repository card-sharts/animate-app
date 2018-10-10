import { 
  // selectedPhoto,
  essays,
  // PHOTO_SELECTED,
  // ESSAYS_LOADED
} from './reducers';

describe('essays reducer', () => {
  it('initializes to an empty array', () => {
    const state = essays(undefined, {});
    expect(state).toEqual([]);
  });
});