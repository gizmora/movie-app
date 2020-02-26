import { SuggestMovieModule } from './suggest-movie.module';

describe('SuggestMovieModule', () => {
  let suggestMovieModule: SuggestMovieModule;

  beforeEach(() => {
    suggestMovieModule = new SuggestMovieModule();
  });

  it('should create an instance', () => {
    expect(suggestMovieModule).toBeTruthy();
  });
});
