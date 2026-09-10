import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/home';
import { About } from '@/pages/about';
import { Products } from '@/pages/products';
import { Solutions } from '@/pages/solutions';
import { Brands } from '@/pages/brands';
import { Contact } from '@/pages/contact';
import NotFound from '@/pages/not-found';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { LeadPopup } from '@/components/LeadPopup';

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/brands" component={Brands} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
          <LeadPopup />
        </WouterRouter>
        <WhatsAppButton />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
