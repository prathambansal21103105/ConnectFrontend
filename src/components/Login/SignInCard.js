import React from 'react';
import { colors } from './Theme';
import './SignInCard.css';

function SignCard(props) {
  return (
    <div className="pratham" style={{ backgroundColor: colors.black, color: colors.black }}>
      {props.children}
    </div>
  );
}

export default SignCard;