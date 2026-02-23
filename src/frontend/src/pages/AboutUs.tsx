import { Sparkles, Users, Heart, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Story: The Kitchen Rahasya
          </h1>
          <p className="text-lg text-muted-foreground">
            Every kitchen has a secret. Ours is tradition.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-warm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-3xl font-bold text-foreground m-0">
                The Secret Revealed
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In every Indian household, there exists a <em>rahasya</em> — a secret passed down through 
              generations, whispered from grandmother to mother, from mother to daughter. It's not written 
              in cookbooks or taught in culinary schools. It's felt in the warmth of the kitchen, heard in 
              the rhythmic grinding of stone against stone, and tasted in every perfectly spiced dish.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Kitchen Rahasya, we've dedicated ourselves to preserving this ancient wisdom. Our secret? 
              The traditional <strong>sil-batta</strong> — a grinding stone that has been the heart of Indian 
              kitchens for centuries. Unlike modern machinery that generates heat and destroys delicate 
              essential oils, the sil-batta grinds slowly, gently, preserving every drop of natural aroma 
              and flavor that makes our spices truly extraordinary.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When you open a packet of Kitchen Rahasya spices, you're not just adding flavor to your food. 
              You're inviting centuries of tradition, the love of countless home cooks, and the authentic 
              taste of India into your kitchen.
            </p>
          </div>

          {/* Our Values */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-xl text-foreground m-0">Rooted in Tradition</h3>
              </div>
              <p className="text-muted-foreground text-sm m-0">
                We honor the age-old methods that have kept Indian cuisine vibrant and flavorful for 
                millennia. Every batch is a tribute to our ancestors' wisdom.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Award className="h-6 w-6 text-accent" />
                <h3 className="font-semibold text-xl text-foreground m-0">Uncompromising Quality</h3>
              </div>
              <p className="text-muted-foreground text-sm m-0">
                We source only the finest ingredients and grind them with care. No shortcuts, no 
                compromises — just pure, authentic spices.
              </p>
            </div>
          </div>

          {/* The Sil-Batta Story */}
          <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-7 w-7 text-accent" />
              <h2 className="font-serif text-2xl font-bold text-foreground m-0">
                The Woman Behind Our Logo
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our packaging features a woman using the traditional sil-batta, a powerful symbol of our 
              heritage. She represents the millions of Indian women who have been the guardians of 
              culinary tradition, the keepers of kitchen secrets, and the architects of flavor.
            </p>
            <p className="text-muted-foreground leading-relaxed m-0">
              With each rhythmic motion of the grinding stone, she doesn't just crush spices — she 
              releases their soul. This is the essence of Kitchen Rahasya: honoring the hands that have 
              fed generations, the wisdom that has flavored our lives, and the love that makes every 
              meal a celebration.
            </p>
          </div>

          {/* Closing */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <p className="text-lg text-foreground font-medium mb-2">
              Welcome to our kitchen. Welcome to our <em>rahasya</em>.
            </p>
            <p className="text-muted-foreground">
              Let us share our secret with you, one spice at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
