/*eslint-env node, mocha */
/*global expect,it */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { shallow, mount } from 'enzyme';
import * as sinon  from 'sinon';
import MovieList from '../../../src/components/views/MovieList';

describe('MovieList', () => {

  describe('given a movie list component', () => {
    it('should have its component name as default className', () => {
      let wrapper = shallow(<MovieList />);
      expect(wrapper.find('.MovieList')).to.have.length(1);
    });

    describe('given there are 2 movie item', () => {
      it('should have two movie items in the list', () => {
        let movieList =
          [
            {'rating': 8.8, 'genres': ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'], 'rated': 'PG', 'language': ['English'], 'title': 'Star Wars'},
            {'rating': 8.1, 'genres': ['Animation', 'Adventure', 'Comedy', 'Family'], 'rated': 'G', 'language': ['English'], 'title': 'Finding Nemo'}
          ];
        let wrapper = shallow(<MovieList movies={movieList}/>);
        expect(wrapper.find('.item')).to.have.length(2);
      });

    });
  });
});
