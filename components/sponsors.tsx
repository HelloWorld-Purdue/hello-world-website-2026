import React from "react";
import FlowingMenu from "./ui/FlowingMenu";

interface Sponsor {
  text: string;
  image: string;
  link: string;
}

interface SponsorsProps {
  sponsors: Sponsor[];
}

export default function Sponsors ({ sponsors }: SponsorsProps) {
    return (
        <section id="sponsors" className="py-20 px-4">
            <div style={{ height: '100px', position: 'relative' }}>
                <FlowingMenu items={sponsors} />
            </div>
            {/* <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Our Sponsors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Thank you to our sponsors for making this event happen!</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor) => (
                <Card
                key={sponsor.name}
                className="hover:shadow-lg transition-shadow duration-300 border-2 border-border hover:border-primary/50"
                >
                <CardContent className="p-8 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-muted to-card rounded-lg flex items-center justify-center">
                    <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="w-full h-full object-contain"
                    />
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>


          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-background to-muted rounded-2xl p-8 border border-border inline-block">
              <p className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Special thanks section or any other note
              </p>
            </div>
          </div>
        </div> */}
        </section>
    );
};

