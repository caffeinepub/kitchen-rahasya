import { Link } from '@tanstack/react-router';
import { ArrowRight, Leaf, Award, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-banner.dim_1920x800.png"
            alt="Traditional Indian spices"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Discover the Secret of{' '}
              <span className="text-primary">Authentic Indian Spices</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Handcrafted using traditional sil-batta methods, preserving the natural oils 
              and aroma that make every dish extraordinary.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors shadow-warm"
            >
              Explore Our Spices
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Kitchen Rahasya?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to tradition and quality sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-warm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-foreground">100% Natural</h3>
              <p className="text-muted-foreground">
                No artificial colors, preservatives, or additives. Just pure, authentic spices.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-warm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-foreground">Traditional Methods</h3>
              <p className="text-muted-foreground">
                Ground using age-old sil-batta techniques that preserve natural oils and aroma.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-warm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-foreground">Made with Love</h3>
              <p className="text-muted-foreground">
                Every batch is crafted with care, bringing the warmth of Indian kitchens to yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Cooking?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the difference that authentic, traditionally-ground spices can make in your kitchen.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Shop Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
