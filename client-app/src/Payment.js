import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import "./styles.css";

//var stripe = Stripe("pk_test_51JdLtPGpIHjF5QqdH3AHtdr7zbozzzjxgfZZ33Aunfldts6trb6dB4HhCPfVKai8LAPfPMyxbvNAsm7nWU1mCDam005DPTejDH")