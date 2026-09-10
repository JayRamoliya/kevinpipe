/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { QuoteModal } from './components/QuoteModal';
import { CatalogueModal } from './components/CatalogueModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ClientsPage } from './pages/ClientsPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BecomePartnerPage } from './pages/BecomePartnerPage';
import { CareerPage } from './pages/CareerPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | undefined>(undefined);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);

  const handleOpenQuote = (productName?: string) => {
    setSelectedProductForQuote(productName);
    setIsQuoteOpen(true);
  };

  return (
    <BrowserRouter>
      {/* Ensures page resets to top on every navigation */}
      <ScrollToTop />

      <div id="app-root" className="min-h-screen bg-white text-[#111827] flex flex-col antialiased selection:bg-[#08A9D6] selection:text-white">
        
        {/* Global Navigation Header */}
        <Header onOpenQuote={() => handleOpenQuote()} />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            {/* Home Route */}
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenQuote={() => handleOpenQuote()} 
                  onOpenCatalogue={() => setIsCatalogueOpen(true)} 
                />
              } 
            />

            {/* About Page */}
            <Route 
              path="/about" 
              element={<AboutPage />} 
            />
            <Route 
              path="/clients" 
              element={<ClientsPage />} 
            />

            {/* Products Overview */}
            <Route 
              path="/products" 
              element={
                <ProductsPage 
                  onOpenQuote={() => handleOpenQuote()} 
                  onOpenCatalogue={() => setIsCatalogueOpen(true)} 
                />
              } 
            />

            {/* Explicit Individual Product Routes matching user specifications */}
            <Route 
              path="/products/upvc-pressure-pipe" 
              element={
                <ProductDetailPage 
                  forcedProductId="upvc-pressure-pipe"
                  onOpenQuote={() => handleOpenQuote('uPVC Pressure Pipe')}
                  onOpenCatalogue={() => setIsCatalogueOpen(true)}
                />
              } 
            />
            <Route 
              path="/products/upvc-column-pipe" 
              element={
                <ProductDetailPage 
                  forcedProductId="upvc-column-pipe"
                  onOpenQuote={() => handleOpenQuote('uPVC Column Pipe')}
                  onOpenCatalogue={() => setIsCatalogueOpen(true)}
                />
              } 
            />
            <Route 
              path="/products/upvc-casing-pipe" 
              element={
                <ProductDetailPage 
                  forcedProductId="upvc-casing-pipe"
                  onOpenQuote={() => handleOpenQuote('uPVC Casing Pipe')}
                  onOpenCatalogue={() => setIsCatalogueOpen(true)}
                />
              } 
            />
            <Route 
              path="/products/hdpe-pipe" 
              element={
                <ProductDetailPage 
                  forcedProductId="hdpe-pipe"
                  onOpenQuote={() => handleOpenQuote('HDPE Pipe')}
                  onOpenCatalogue={() => setIsCatalogueOpen(true)}
                />
              } 
            />
            <Route 
              path="/products/hdpe-sprinkler-pipe" 
              element={
                <ProductDetailPage 
                  forcedProductId="hdpe-sprinkler-pipe"
                  onOpenQuote={() => handleOpenQuote('HDPE Sprinkler Pipe')}
                  onOpenCatalogue={() => setIsCatalogueOpen(true)}
                />
              } 
            />

            {/* Dynamic Product Detail Fallback Route */}
            <Route 
              path="/products/:productId" 
              element={
                <ProductDetailPage 
                  onOpenQuote={() => handleOpenQuote()}
                  onOpenCatalogue={() => setIsCatalogueOpen(true)}
                />
              } 
            />

            {/* Become Partner Page */}
            <Route 
              path="/become-partner" 
              element={<BecomePartnerPage />} 
            />

            {/* Career Page */}
            <Route 
              path="/career" 
              element={<CareerPage />} 
            />

            {/* Contact Page */}
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />

            {/* Fallback Catch-All Route */}
            <Route 
              path="*" 
              element={<Navigate to="/" replace />} 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Quick Quote Modal */}
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => {
            setIsQuoteOpen(false);
            setSelectedProductForQuote(undefined);
          }}
          defaultProduct={selectedProductForQuote}
        />

        {/* Brochure / Catalogue Download Modal */}
        <CatalogueModal
          isOpen={isCatalogueOpen}
          onClose={() => setIsCatalogueOpen(false)}
          onGetQuote={() => handleOpenQuote()}
        />

      </div>
    </BrowserRouter>
  );
}
