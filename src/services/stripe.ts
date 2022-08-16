import Stripe from "stripe";
import { version } from "../../package-lock.json";
export const stripe = new Stripe(
  "sk_test_51LUb0JIDZvZ6ey4B64i6pzMp9DHUxHHfsReSliqMbMQWY1SUuQQaBzwqVub5wxqa4WvQS4JtaJaU56eYQkTajd9k00LGyguXJ1",
  {
    apiVersion: '2022-08-01',
    appInfo: {
      name: 'IgNews',
      version: version,

    }
  }
);