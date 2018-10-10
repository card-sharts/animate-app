import { 
  // selectedPhoto,
  essays,
  // PHOTO_SELECTED,
  ESSAYS_LOADED
} from './reducers';

describe('essays reducer', () => {
  it('initializes to an empty array', () => {
    const state = essays(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads data', () => {
    const payload = [{}, {}, {}];

    const state = essays([], {
      type: ESSAYS_LOADED,
      payload
    });

    expect(state).toBe(payload);
  });
});