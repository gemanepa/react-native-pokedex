import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import HomeScreen from './index';

describe('<HomeScreen />', () => {
  const props = {
    navigation: {
      navigate: jest.fn()
    }
  };

  // @ts-ignore
  const { getByTestId } = render(<HomeScreen {...props} />);
  it('should render', () => {
    expect(getByTestId('home')).toBeDefined();
  });

  it(
    'should render a search bar',
    () => expect(getByTestId('search-bar')).toBeDefined()
  );

  it(
    'should render a pokemon list',
    () => expect(getByTestId('pokemon-list')).toBeDefined()
  );

  it(
    'should render a copyright disclaimer',
    () => expect(getByTestId('copyright-disclaimer')).toBeDefined()
  );

  it('should render pokemon in a list', () => {
    expect(getByTestId('list-grookey')).toBeDefined();
    expect(getByTestId('list-thwackey')).toBeDefined();
    expect(getByTestId('list-rillaboom')).toBeDefined();
  });

  it('should update the list of pokemon if searching', () => {
    const search = getByTestId('search-bar');
    fireEvent.changeText(search, 'chu');
    expect(getByTestId('list-pikachu')).toBeDefined();
    expect(getByTestId('list-raichu')).toBeDefined();
    expect(getByTestId('list-pichu')).toBeDefined();
  });

  it('should attempt to navigate when a pokemon is tapped', () => {
    fireEvent.press(getByTestId('list-pikachu'));
    expect(props.navigation.navigate).toHaveBeenCalled();
  });
});
