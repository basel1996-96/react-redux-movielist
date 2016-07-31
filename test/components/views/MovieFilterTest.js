/*eslint-env node, mocha */
/*global expect,it */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { shallow, mount } from 'enzyme';
import * as sinon  from 'sinon';
import MovieFilter from '../../../src/components/views/MovieFilter';

describe('MovieFilter', () => {

  describe('given a movie filter component', () => {
    it('should have its component name as default className', () => {
      let wrapper = shallow(<MovieFilter />);
      expect(wrapper.find('.MovieFilter')).to.have.length(1);
    });


    describe('given it has two genres', () => {
      let genres = [];
      beforeEach(()=> {
        genres = ['adventure', 'fantasy'];
      });

      it('should have its  name as default className', () => {
        let wrapper = shallow(<MovieFilter genres={genres}/>);
        expect(wrapper.find('option')).to.have.length(3);
        expect(wrapper.find('option[value="All"]')).to.have.length(1);
        expect(wrapper.find('option[value="adventure"]')).to.have.length(1);
        expect(wrapper.find('option[value="fantasy"]')).to.have.length(1);

      });

      it('should invoke filter function when genre is selected', () => {
        let spy = sinon.spy();
        const wrapper = mount(
          <MovieFilter filterByGenre={spy} genres={genres}/>
        );
        wrapper.find('.genreSelect').simulate('change', {target: { value : 'adventure'}});
        expect(spy).to.be.called;
      });
    });
  });
});
