// components/ProductOverview.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, IconButton } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';

const ProductOverview = () => {
  return (
    <Card sx={{ padding: 3, borderRadius: 3, height: '100%' }}>
      <CardMedia
        component="img"
        height="200"
        image="/frontend/resources/barcode.svg"
        alt="barcode-image"
        sx={{ marginBottom: 2 }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Start scanning
        </Typography>
        <Typography variant="body1" color="text.secondary">
          your items
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, marginTop: 3 }}>
          <Button variant="contained" color="warning" sx={{ width: 60, height: 60 }}>-</Button>
          <Typography variant="h4">0</Typography>
          <Button variant="contained" color="warning" sx={{ width: 60, height: 60 }}>+</Button>
        </Box>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 3 }}>
        <IconButton color="warning">
          <VolumeUpIcon />
        </IconButton>
        <IconButton color="warning">
          <TextFieldsIcon />
        </IconButton>
        <IconButton color="warning">
          <HelpIcon />
        </IconButton>
        <IconButton color="warning">
          <InfoIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default ProductOverview;