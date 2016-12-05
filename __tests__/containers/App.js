import 'react-native'
import React from 'react'
import App from '../../src/containers'

import renderer from 'react-test-renderer'

it('should render <App /> correctly', () => {
  const tree = renderer.create(
    <App />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
