import { 
  selectedPhoto,
  essays,
  PHOTO_SELECTED,
  ESSAYS_LOADED
} from './reducers';

describe('selectedPhoto reducer', () => {
  it('initializes to null', () => {
    const state = selectedPhoto(undefined, {});
    expect(state).toBe(null);
  });

  it('loads data', () => {
    const payload = { data: 1 };

    const state = selectedPhoto(null, {
      type: PHOTO_SELECTED,
      payload
    });

    expect(state).toBe(payload);
    expect(state.data).toBe(1);
  });
});

describe('essays reducer', () => {
  it('initializes to an empty array', () => {
    const state = essays(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads data', () => {
    const payload = [{ data: 1 }, { data: 2 }, { data: 3 }];

    const state = essays([], {
      type: ESSAYS_LOADED,
      payload
    });

    expect(state[0].data).toBe(1);
    expect(state[1].data).toBe(2);
    expect(state[2].data).toBe(3);
  });
});