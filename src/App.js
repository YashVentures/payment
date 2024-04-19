import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentGatewayPage from './components/home';

const stripePromise = loadStripe('pk_test_51P7PzpSAnxltcIkGsKOEB61hFAhVE9GYdb5EZdnKkdWJ9FsJqisjuJpCQb70kBX91tZr3S2XbUxzxAueNTMOVe4100jl8cwGaX');

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentGatewayPage />
    </Elements>
  );
};

export default App;
