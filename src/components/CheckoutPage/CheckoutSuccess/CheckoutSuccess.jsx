import React from 'react';
import { Link, Typography } from '@material-ui/core';

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
              Your order number is #2001539. We have emailed your order confirmation,
              and will send you an update when your order has shipped.
      </Typography>
      <Typography variant="h4" color="inherit" noWrap align="center">
            <Link color="inherit" href="/">
                Return to Start 
            </Link>
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
