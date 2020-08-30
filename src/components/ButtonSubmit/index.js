import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function ButtonSubmit({ children, loading, ...rest}) {
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

ButtonSubmit.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

ButtonSubmit.defaultProps = {
  loading: false,
}