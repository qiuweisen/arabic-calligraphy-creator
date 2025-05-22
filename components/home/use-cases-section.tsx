"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

export function UseCasesSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">What You Can Create</h2>
      <Tabs defaultValue="social" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-6">
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="print">Print</TabsTrigger>
          <TabsTrigger value="web">Web</TabsTrigger>
          <TabsTrigger value="art">Art</TabsTrigger>
        </TabsList>
        <TabsContent value="social">
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-amber-800 mb-3">Perfect for Social Media</h3>
                  <p className="text-amber-700 mb-4">
                    Create eye-catching posts, stories, and profile graphics with beautiful Arabic typography.
                  </p>
                  <ul className="space-y-2 text-amber-700">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Instagram posts and stories</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Facebook cover photos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Twitter graphics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Profile pictures with Arabic monograms</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-[300px] h-[200px] rounded-lg border border-amber-200">
                    <Image
                      src="/arabic-calligraphy-in-twitter-post.png"
                      alt="Social media examples"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                      sizes="300px"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="print">
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-amber-800 mb-3">Stunning Print Materials</h3>
                  <p className="text-amber-700 mb-4">
                    Design business cards, invitations, posters, and more with elegant Arabic calligraphy.
                  </p>
                  <ul className="space-y-2 text-amber-700">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Business cards with Arabic typography</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Wedding invitations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Posters and flyers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Greeting cards with Arabic messages</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-[300px] h-[200px] rounded-lg border border-amber-200">
                    <Image
                      src="/business-cards-with-arabic-typography.png"
                      alt="Print examples"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                      sizes="300px"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="web">
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-amber-800 mb-3">Elegant Web Design Elements</h3>
                  <p className="text-amber-700 mb-4">
                    Enhance your website with unique Arabic calligraphy for headers, logos, and decorative elements.
                  </p>
                  <ul className="space-y-2 text-amber-700">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Website headers and banners</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Arabic logos and branding</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Decorative text for online content</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Blog post featured images</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-[300px] h-[200px] rounded-lg border border-amber-200">
                    <Image
                      src="/website-header-with-arabic-calligraphy.png"
                      alt="Web design examples"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                      sizes="300px"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="art">
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-amber-800 mb-3">Creative Art & Decor</h3>
                  <p className="text-amber-700 mb-4">
                    Create personalized art pieces, home decor, and unique gifts with meaningful Arabic calligraphy.
                  </p>
                  <ul className="space-y-2 text-amber-700">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Wall art and posters</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Personalized gifts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Home decor items</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>Digital art projects</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-[300px] h-[200px] rounded-lg border border-amber-200">
                    <Image
                      src="/arabic-calligraphy-flat-lay-composition.png" 
                      alt="Art examples"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                      sizes="300px"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
} 