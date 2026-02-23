# Specification

## Summary
**Goal:** Add weight-based pricing and a "Buy Now" flow that collects customer orders with name, address, and product details.

**Planned changes:**
- Display specific prices for each weight option (100g, 200g, 500g) on the Shop page for all three spice products
- Replace "Add to Cart" buttons with "Buy Now" buttons that open a form to collect customer name, address, and weight selection
- Create backend method to store order details (product, weight, price, customer name, address) in stable storage
- Connect form submission to backend to save orders and display success confirmation

**User-visible outcome:** Customers can see prices for different weights, click "Buy Now" on any product, fill in their details, and submit orders that are stored in the backend.
