# QR Code Generator Demo

This project is a demo application built with **Next.js 14**, showcasing QR code generation as the main feature. Users can generate QR codes without limitations and explore the premium subscription options using Stripe's payment integration. 

## Features

- **QR Code Generation**: Create and download QR codes without any restrictions.
- **Authentication**: This demo integrates **Clerk** for user management, but no protected routes are implemented, making the app fully accessible.
- **Subscription Plans**: Users can select from monthly or yearly **Pro** subscriptions, managed through **Stripe**. Test cards can be used to simulate the payment flow.
- **UI Components**: Designed with **Tailwind CSS**, **shadcn** components, and **MagicUI** for a sleek and modern interface.

## Technology Stack

- **Next.js 14**: Latest version of Next.js for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **shadcn**: Collection of accessible UI components.
- **MagicUI**: Simplifies creating user interfaces with prebuilt design systems.
- **Clerk**: User authentication and management service.
- **Stripe**: Handles payments and subscription management for Pro plans.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/qrcode-demo.git
   cd qrcode-demo

2.	Install dependencies:
    npm install

3.	Create a new Stripe account and set up your API keys.

4.	Configure your .env file with your Stripe and Clerk keys and other necessary credentials.

5.	Start the development server:
    npm run dev

The application will be available at http://localhost:3000.

Stripe Testing

	•	Use Stripe’s test card numbers to simulate payments.
	•	For example, you can use the card number 4242 4242 4242 4242 with any future expiration date and a random CVC.

QR Code Generation

Users can generate QR codes directly on the main page without any restrictions. There is no need for authentication or payment to access this feature.

Subscription Plans

The app allows users to select a Pro subscription:

	•	Monthly Pro Plan: $12/month
	•	Yearly Pro Plan: $120/year

These subscriptions are handled via Stripe, and users can test the checkout process with the provided test card details.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

JOOBADAM