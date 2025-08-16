import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Globe, Smartphone } from "lucide-react";

const Packages = () => {
  return (
    <section className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Service <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Packages</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            Choose the perfect package for your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Website Development Packages */}
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                Website Development Packages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Package</TableHead>
                    <TableHead>Web Development (US$)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Basic</TableCell>
                    <TableCell>500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Standard</TableCell>
                    <TableCell>1000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Premium</TableCell>
                    <TableCell>1800</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <div>
                  <span className="font-bold text-foreground">Basic:</span> A professional landing page or simple business site with up to 3 pages, responsive design, and contact form integration. <span className="font-bold text-foreground">($500)</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Standard:</span> Multi-page website (up to 6 pages) with custom UI, basic animations, data storage, user login, and SEO optimization. <span className="font-bold text-foreground">($1000)</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Premium:</span> Full-featured custom website (unlimited pages), user authentication, data storage, AI integration, messaging, and payment integration. <span className="font-bold text-foreground">($1800)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile App Development Packages */}
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-primary" />
                Mobile App Development Packages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Package</TableHead>
                    <TableHead>Mobile Development (US$)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Basic</TableCell>
                    <TableCell>2000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Standard</TableCell>
                    <TableCell>3500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Premium</TableCell>
                    <TableCell>6750</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <div>
                  <span className="font-bold text-foreground">Basic:</span> Simple app with 2-3 core features (e.g., form submission, login, display info). <span className="font-bold text-foreground">($2000)</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Standard:</span> Full-stack mobile app with backend, multiple screens, data storage, user authentication, Android and iOS (optional). <span className="font-bold text-foreground">($3500)</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Premium:</span> Advanced app with backend, push notifications, payment integration, real-time updates, and deployment support for both Android and iOS. <span className="font-bold text-foreground">($6750)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg font-bold text-foreground">
            • We offer flexible payment options for our services
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;