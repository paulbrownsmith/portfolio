import React, { Component } from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import PropTypes from 'prop-types';

export default class Entry extends Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    href: PropTypes.string,
    subTitle: PropTypes.string,
  };

  render() {
    return (
      <Box sx={{ mb: 2 }}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image={this.props.image}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                <a href={this.props.href}>{this.props.title}</a>
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: 'text.secondary' }}
              >
                {this.props.subTitle}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            </Box>
          </Box>
        </Card>
      </Box>
    );
  }
}