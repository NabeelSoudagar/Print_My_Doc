# Task: Add Payment Gateway, Journal Bindings Type Option, and Document Printing to Order Page

## Steps:

### Backend
- [x] Update `backend/models/orders.model.js` to add a new field for journal bindings type.
- [x] Update `backend/controllers/orders.controller.js` to handle the new journal bindings type field and payment processing.
- [x] Add payment processing logic or integrate with a payment gateway API in the controller.
- [x] Add document printing logic or API integration in the controller if needed.
- [x] Update `backend/routes/orders.routes.js` if new routes are needed for payment or printing.

### Frontend
- [x] Update `frontend/src/pages/Upload.vue` to:
  - Add UI elements for payment gateway integration.
  - Add a journal bindings type option in the order form.
  - Add a document printing option or button.
  - Update form submission to include new fields and handle payment.
  - [x] Remove payment token input.
  - [x] Add cash on delivery option.
  - [x] Add delivery address field.

### Testing
- [ ] Test the full order flow including payment, journal bindings option, and document printing.

## Notes
- Confirm payment gateway provider or API details if available.
- Confirm document printing requirements and API if any.
