// components/PaymentOverview.jsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, Radio, RadioGroup, FormControlLabel, Box } from '@mui/material';
import ApplePayIcon from '../resources/payment-applepay.png';
import GooglePayIcon from '../resources/payment-googlepay.png';
import CreditCardIcon from '../resources/payment-creditcard.png';
import CashIcon from '../resources/payment-cash.png';
import GiftCardIcon from '../resources/payment-giftcard.png';
import './PaymentOverview.css';

const PaymentOverview = () => {
  const [open, setOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ padding: 3, borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardContent>
          <Typography variant="h5">Price Details</Typography>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1">Sub Total: $0.00</Typography>
            <Typography variant="body1">Tax: $0.00</Typography>
            <Typography variant="h6" sx={{ marginTop: 1 }}>Total: $0.00</Typography>
          </Box>
        </CardContent>
        <Button
          variant="contained"
          color="warning"
          sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}
          onClick={handleOpen}
        >
          Pay →
        </Button>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose Payment Method</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={ApplePayIcon} alt="Apple Pay" style={{ width: 80, height: 80 }} />
              <FormControlLabel
                control={<Radio />}
                value="Apple Pay"
                label="Apple Pay"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={GooglePayIcon} alt="Google Pay" style={{ width: 80, height: 80 }} />
              <FormControlLabel
                control={<Radio />}
                value="Google Pay"
                label="Google Pay"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={CreditCardIcon} alt="Debit/Credit" style={{ width: 80, height: 80 }} />
              <FormControlLabel
                control={<Radio />}
                value="Debit/Credit"
                label="Debit/Credit"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={CashIcon} alt="Cash" style={{ width: 80, height: 80 }} />
              <FormControlLabel
                control={<Radio />}
                value="Cash"
                label="Cash"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={GiftCardIcon} alt="Giftcard" style={{ width: 80, height: 80 }} />
              <FormControlLabel
                control={<Radio />}
                value="Giftcard"
                label="Giftcard"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary" disabled={!paymentMethod}>
            Proceed with payment
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PaymentOverview;