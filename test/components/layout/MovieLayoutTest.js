/*eslint-env node, mocha */
/*global expect,it */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { shallow, mount } from 'enzyme';
import * as sinon  from 'sinon';
import MovieLayout from '../../../src/components/layout/MovieLayout';

describe('MovieLayout', () => {
  describe('given a movie filter component', () => {
    it('should have its component name as default className', () => {
      let wrapper = shallow(<MovieLayout />);
      expect(wrapper.find('.MovieLayout')).to.have.length(1);
      expect(wrapper.find('MovieFilter')).to.have.length(1);
      expect(wrapper.find('MovieList')).to.have.length(1);
    });
  });
});
