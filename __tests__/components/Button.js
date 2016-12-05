import 'react-native'
import React from 'react'
import Button from '../../src/components/Button'

import renderer from 'react-test-renderer'

it('should render <Button /> correctly', () => {
  const tree = renderer.create(
    <Button title={'Test Button'} onPress={() => {}} />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})


