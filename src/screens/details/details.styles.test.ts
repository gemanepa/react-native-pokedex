import { statColours } from './details.styles';

describe('details styles', () => {
  it('should generate the rgba based on opacity', () => {
    const opacity = 0.5;
    expect(statColours.hp(opacity)).toEqual('rgba(99, 187, 91, 0.5)');
    expect(statColours.attack(opacity)).toEqual('rgba(206, 64, 105, 0.5)');
    expect(statColours.defense(opacity)).toEqual('rgba(243, 210, 59, 0.5)');
    expect(statColours['sp. atk'](opacity)).toEqual('rgba(171, 106, 200, 0.5)');
    expect(statColours['sp. def'](opacity)).toEqual('rgba(236, 143, 230, 0.5)');
    expect(statColours.speed(opacity)).toEqual('rgba(116, 206, 192, 0.5)');
  });

  it('should default to 1 opacity', () => {
    expect(statColours.hp()).toEqual('rgba(99, 187, 91, 1)');
    expect(statColours.attack()).toEqual('rgba(206, 64, 105, 1)');
    expect(statColours.defense()).toEqual('rgba(243, 210, 59, 1)');
    expect(statColours['sp. atk']()).toEqual('rgba(171, 106, 200, 1)');
    expect(statColours['sp. def']()).toEqual('rgba(236, 143, 230, 1)');
    expect(statColours.speed()).toEqual('rgba(116, 206, 192, 1)');
  });
});
