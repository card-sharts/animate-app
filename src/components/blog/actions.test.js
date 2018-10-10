jest.mock('../../services/api', () => ({
  getAllEssays: jest.fn()
}));

import { loadEssays } from './actions';
import { ESSAYS_LOADED } from './reducers';
import { getAllEssays } from '../../services/api';

describe('essays action creators', () => {
  const essays = [
    {
      title: 'My Wedding',
      q1: 'My approach to wedding photography is to get wicked sick photos.',
      q2: 'Context of this wedding is that these people love each other, which is wicked sick.',
      q3: 'The biggest challenge was getting wicked sick photos.',
      q4: 'My greatest success was getting some wicked sick photos.',
      bangerUrl: 'https://res.cloudinary.com/dkbja8aak/image/upload/v1537564524/ajcjc8itv9z7rogs4r3j.jpg',
      tags: ['black & white', 'same-sex'],
      publishDate: '18-10-08',
    },
    {
      title: 'BEST WEDDING',
      q1: 'I only shoot the best of the best.',
      q2: 'Beautiful dresses make me happy.',
      q3: 'Having to not drink at the open bar.',
      q4: 'Every wedding is a great success.',
      bangerUrl: 'https://res.cloudinary.com/dkbja8aak/image/upload/v1537564524/ajcjc8itv9z7rogs4r3j.jpg',
      tags: ['jewish'],
      publishDate: '18-10-12',
    }
  ];

  it('should dispense ESSAYS_LOADED action; call to api', () => {
    const promise = Promise.resolve();
    getAllEssays.mockReturnValueOnce(promise);

    const { type, payload } = loadEssays();
    expect(type).toBe(ESSAYS_LOADED);
    expect(payload).toBe(promise);
    expect(getAllEssays.mock.calls.length).toBe(1);
  });

});

