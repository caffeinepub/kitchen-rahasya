import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useSubmitOrder } from '../hooks/useQueries';
import { toast } from 'sonner';

interface Product {
  id: string;
  name: string;
  description: string;
  color: string;
  image: string;
  prices: {
    '100g': number;
    '200g': number;
    '500g': number;
  };
}

const products: Product[] = [
  {
    id: '1',
    name: 'Red Chilli Powder',
    description: 'Fiery and flavorful red chilli powder that adds the perfect heat to your dishes.',
    color: 'bg-primary',
    image: '/assets/generated/red-chilli-product.dim_400x400.png',
    prices: {
      '100g': 35,
      '200g': 70,
      '500g': 175,
    },
  },
  {
    id: '2',
    name: 'Turmeric Powder',
    description: 'Pure, vibrant turmeric ground to perfection. Known for its anti-inflammatory properties and golden color.',
    color: 'bg-secondary',
    image: '/assets/generated/turmeric-product.dim_400x400.png',
    prices: {
      '100g': 35,
      '200g': 70,
      '500g': 175,
    },
  },
  {
    id: '3',
    name: 'Coriander Powder',
    description: 'Aromatic coriander powder with a fresh, citrusy flavor that enhances any curry.',
    color: 'bg-accent',
    image: '/assets/generated/coriander-product.dim_400x400.png',
    prices: {
      '100g': 25,
      '200g': 50,
      '500g': 125,
    },
  },
];

const sizeOptions = ['100g', '200g', '500g'] as const;
type SizeOption = typeof sizeOptions[number];

export default function Shop() {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, SizeOption>>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: '100g' as SizeOption }), {})
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  const submitOrderMutation = useSubmitOrder();

  const handleSizeSelect = (productId: string, size: SizeOption) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleBuyNowClick = (product: Product) => {
    setCurrentProduct(product);
    setDialogOpen(true);
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentProduct) return;

    const selectedSize = selectedSizes[currentProduct.id];
    const price = currentProduct.prices[selectedSize];

    try {
      await submitOrderMutation.mutateAsync({
        productName: currentProduct.name,
        selectedWeight: selectedSize,
        price: BigInt(price),
        customerName: customerName.trim(),
        address: customerAddress.trim(),
      });

      toast.success('Order submitted successfully!', {
        description: `Your order for ${currentProduct.name} (${selectedSize}) has been received.`,
      });

      // Reset form and close dialog
      setCustomerName('');
      setCustomerAddress('');
      setDialogOpen(false);
      setCurrentProduct(null);
    } catch (error) {
      toast.error('Order submission failed', {
        description: error instanceof Error ? error.message : 'Please try again later.',
      });
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setCurrentProduct(null);
    setCustomerName('');
    setCustomerAddress('');
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Spices
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with traditional methods, each spice tells a story of authenticity and flavor
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => {
            const selectedSize = selectedSizes[product.id];
            const currentPrice = product.prices[selectedSize];

            return (
              <div
                key={product.id}
                className="bg-card rounded-lg overflow-hidden shadow-warm hover:shadow-warm-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="h-64 relative overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Size Selection */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Select Size:
                    </label>
                    <div className="flex gap-2">
                      {sizeOptions.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(product.id, size)}
                          className={`flex-1 py-2 px-3 rounded-md font-medium text-sm transition-all ${
                            selectedSizes[product.id] === size
                              ? 'bg-primary text-primary-foreground shadow-md'
                              : 'bg-muted text-muted-foreground hover:bg-muted/80'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="mb-4 text-center">
                    <div className="text-3xl font-bold text-primary">
                      ₹{currentPrice}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      for {selectedSize}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleBuyNowClick(product)}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4 text-center">
            The Kitchen Rahasya Promise
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Traditional Grinding</h3>
              <p className="text-sm">
                Each spice is ground using the traditional sil-batta method, ensuring the natural oils 
                and aroma are preserved.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
              <p className="text-sm">
                We source only the finest ingredients, ensuring every batch meets our high standards 
                of purity and flavor.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">No Additives</h3>
              <p className="text-sm">
                100% natural with no artificial colors, preservatives, or fillers. Just pure, 
                authentic spices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Fresh & Aromatic</h3>
              <p className="text-sm">
                Ground in small batches to ensure maximum freshness and potency in every package.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Now Dialog */}
      <Dialog open={dialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Complete Your Order</DialogTitle>
            <DialogDescription>
              {currentProduct && (
                <>
                  {currentProduct.name} - {selectedSizes[currentProduct.id]} - ₹
                  {currentProduct.prices[selectedSizes[currentProduct.id]]}
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitOrder}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Delivery Address *</Label>
                <Textarea
                  id="address"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Enter your complete delivery address"
                  rows={4}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="weight">Selected Weight</Label>
                <Input
                  id="weight"
                  value={currentProduct ? selectedSizes[currentProduct.id] : ''}
                  disabled
                  className="bg-muted"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={handleDialogClose}
                disabled={submitOrderMutation.isPending}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={submitOrderMutation.isPending}
              >
                {submitOrderMutation.isPending ? 'Submitting...' : 'Submit Order'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
