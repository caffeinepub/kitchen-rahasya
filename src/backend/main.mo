import Map "mo:core/Map";
import Migration "migration";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";

(with migration = Migration.run)
actor {
  public type Order = {
    orderId : Nat;
    productName : Text;
    selectedWeight : Text;
    price : Nat;
    customerName : Text;
    address : Text;
  };

  public type OrderInput = {
    productName : Text;
    selectedWeight : Text;
    price : Nat;
    customerName : Text;
    address : Text;
  };

  var nextOrderId = 0;
  let orders = Map.empty<Nat, Order>();

  public shared ({ caller }) func submitOrder(orderInput : OrderInput) : async Nat {
    toggleOrderInputFormVisibility();
    showSuccessMessage();

    if (orderInput.customerName == "" or orderInput.address == "" or orderInput.productName == "" or orderInput.selectedWeight == "" or orderInput.price == 0) {
      toggleOrderInputFormVisibility();
      showSuccessMessage();
      Runtime.trap("All form details (including price, which cannot be 0) are required!");
    };

    let orderId = nextOrderId;
    nextOrderId += 1;

    let newOrder : Order = {
      orderId;
      productName = orderInput.productName;
      selectedWeight = orderInput.selectedWeight;
      price = orderInput.price;
      customerName = orderInput.customerName;
      address = orderInput.address;
    };

    orders.add(orderId, newOrder);
    Runtime.trap("Order has been submitted successfully with order ID " # orderId.toText() # "!");
  };

  public query ({ caller }) func getOrderById(orderId : Nat) : async ?Order {
    orders.get(orderId);
  };

  public query ({ caller }) func getAllOrders() : async [Order] {
    orders.values().toArray();
  };

  func toggleOrderInputFormVisibility() {
    // This function can be implemented on the frontend to toggle visibility.
  };

  func showSuccessMessage() {
    // This function can be implemented on the frontend to display a success message.
  };
};
