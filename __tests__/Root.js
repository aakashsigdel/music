import 'react-native'
import React from 'react'
import Root from '../src'

import renderer from 'react-test-renderer'

it('should render <Root /> correctly', () => {
  const tree = renderer.create(
    <Root />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
