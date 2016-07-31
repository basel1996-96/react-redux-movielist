/*eslint-env node, mocha*/
/*global expect*/
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../../src/stores/store';
import MovieContainer from '../../../src/components/containers/MovieContainer';
import {LOAD_MOVIES, FILTER_BY_GENRE} from '../../../src/actions/MovieActionCreators';
import * as sinon  from 'sinon';

describe('MovieContainer', () => {

  describe('given a movie container', () => {
    let spy, wrapper, container;

    beforeEach(() => {
      spy = sinon.spy();
      store.dispatch = spy;
      wrapper = mount(
        <Provider store={store}>
          <MovieContainer />
        </Provider>
      );
      container = wrapper.find('MovieContainer');
    });

    describe('when the movie container is loaded', () => {
      it('should dispatch a message to load movies', () => {
        container.node.componentDidMount;
        expect(store.dispatch).to.be.called;
      });
    });

    describe('when the filtered by genre "documentary', () => {
      it('should dispatch a message to filter by genre', () => {
        spy.reset();
        container.node.filterByGenre('documentary');
        expect(store.dispatch).to.be.called;
      });
    });
  });
});
