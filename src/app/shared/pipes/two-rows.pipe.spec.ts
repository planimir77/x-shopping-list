import { TwoRowsPipe } from './two-rows.pipe';

describe('TwoRowsPipe', () => {
  let pipe: TwoRowsPipe;

  beforeEach(() => {
    pipe = new TwoRowsPipe();
  });

  afterEach(() => {
    pipe = null;
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return null', () => {
    expect(pipe.transform(null)).toBe(null);
  });

  it('should add <br/>', () => {
    expect(pipe.transform('1234567890123456789012345')).toBe('12345678901234567890<br/>12345');
  });
});
