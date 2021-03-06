import findBy from '../src/app';

test('find item in array', () => {
  const recieved = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(findBy('name', 'урон'));
  const expected = [{
    name: 'урон',
    type: 'help',
    description: 'Страница описания элемента интерфейса',
  }];
  expect(recieved).toEqual(expected);
});

test('find two items in array', () => {
  const recieved = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'рубящий удар', type: 'attack', description: 'Атака мечом' },
  ].filter(findBy('type', 'attack'));
  const expected = [{ name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'рубящий удар', type: 'attack', description: 'Атака мечом' }];
  expect(recieved).toEqual(expected);
});

test('nothing found', () => {
  const recieved = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(findBy('name', 'воин'));
  const expected = [];
  expect(recieved).toEqual(expected);
});
