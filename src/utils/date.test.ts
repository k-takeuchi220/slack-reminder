const date = require('./date')

test('calcDateSettings calc week', () => {
  let week: number = 2;
  let befDate: string = date.now;
  let settings: { [key: string]: string } = { SETTINGS_WEEK_KEY: String(week) };

  let aftDate: string = date.getNextNoticedAt(befDate, settings);
  expect((new Date(aftDate)).getDay()).toBe(week);

  let diffTime: number = (new Date(aftDate)).getTime() - (new Date(befDate).getTime());
  let diffDay: number = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  expect(diffDay).toBeGreaterThan(0);
});
