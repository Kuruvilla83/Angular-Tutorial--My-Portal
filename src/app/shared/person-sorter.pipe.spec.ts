import { PersonSorterPipe } from './person-sorter.pipe';

describe('PersonSorterPipe', () => {
  it('create an instance', () => {
    const pipe = new PersonSorterPipe();
    expect(pipe).toBeTruthy();
  });
});
