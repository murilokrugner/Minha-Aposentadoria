import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function ButtonClear({ children, loading, ...rest}) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

ButtonClear.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

ButtonClear.defaultProps = {
  loading: false,
}