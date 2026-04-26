<template>
  <div class="pricing-page">
    <div class="container">
      <div class="pricing-header">
        <h1>Simple, Transparent Pricing</h1>
        <p>One-time payment. No subscriptions. Keep your results forever.</p>
      </div>

      <div class="pricing-grid">
        <!-- Free Tier -->
        <div class="pricing-card">
          <div class="pricing-header-section">
            <h2>Free</h2>
            <div class="price">
              <span class="price-amount">$0</span>
              <span class="price-period">forever</span>
            </div>
          </div>
          <ul class="features-list">
            <li>✓ Resume score (0-100)</li>
            <li>✓ Section breakdown</li>
            <li>✓ 5 improvement suggestions</li>
            <li>✓ LinkedIn headline</li>
            <li>✓ Missing keywords</li>
            <li class="disabled">✗ Job matching</li>
            <li class="disabled">✗ Cover letters</li>
            <li class="disabled">✗ Salary insights</li>
          </ul>
          <router-link to="/upload" class="btn btn-outline btn-full">
            Get Started Free
          </router-link>
        </div>

        <!-- Premium Tier -->
        <div class="pricing-card featured">
          <div class="featured-badge">Most Popular</div>
          <div class="pricing-header-section">
            <h2>Premium</h2>
            <div class="price">
              <span class="price-amount">$9</span>
              <span class="price-period">one-time</span>
            </div>
          </div>
          <ul class="features-list">
            <li>✓ Everything in Free</li>
            <li>✓ Job matching & gap analysis</li>
            <li>✓ Tailored cover letters</li>
            <li>✓ Salary insights</li>
            <li>✓ Unlimited analyses</li>
            <li>✓ PDF report download</li>
            <li>✓ Priority support</li>
          </ul>
          <button @click="purchasePremium" class="btn btn-primary btn-full">
            Upgrade to Premium
          </button>
        </div>

        <!-- Pro Tier -->
        <div class="pricing-card">
          <div class="pricing-header-section">
            <h2>Pro</h2>
            <div class="price">
              <span class="price-amount">$29</span>
              <span class="price-period">one-time</span>
            </div>
          </div>
          <ul class="features-list">
            <li>✓ Everything in Premium</li>
            <li>✓ Full resume rewrite</li>
            <li>✓ LinkedIn profile review</li>
            <li>✓ Interview prep guide</li>
            <li>✓ 1-on-1 consultation (15 min)</li>
            <li>✓ 30-day updates</li>
          </ul>
          <button @click="purchasePro" class="btn btn-secondary btn-full">
            Get Pro Package
          </button>
        </div>
      </div>

      <div class="guarantee">
        <div class="guarantee-icon">🛡️</div>
        <h3>30-Day Money-Back Guarantee</h3>
        <p>Not satisfied? Get a full refund within 30 days. No questions asked.</p>
      </div>

      <div class="faq">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3>How is this different from other resume tools?</h3>
            <p>We specialize in software engineering roles. Our AI understands tech stacks, quantifiable achievements, and what hiring managers look for in engineering resumes.</p>
          </div>
          <div class="faq-item">
            <h3>Is my resume data secure?</h3>
            <p>Absolutely. We don't store your resume after analysis. All processing happens in real-time and is immediately deleted.</p>
          </div>
          <div class="faq-item">
            <h3>Can I use this for non-tech roles?</h3>
            <p>Yes! While we specialize in tech, the core analysis works for any role. The job matching and keyword suggestions adapt to your field.</p>
          </div>
          <div class="faq-item">
            <h3>How long does analysis take?</h3>
            <p>Typically 10-30 seconds. Premium features like cover letters may take up to 2 minutes.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  methods: {
    purchasePremium() {
      // For MVP: redirect to Gumroad/LemonSqueezy
      // In production: integrate payment processor
      alert('Premium purchase coming soon! For now, analyze your resume for free.')
    },
    purchasePro() {
      alert('Pro package coming soon! For now, analyze your resume for free.')
    }
  }
}
</script>

<style scoped>
.pricing-page {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.pricing-header {
  text-align: center;
  margin-bottom: 4rem;
}

.pricing-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.pricing-header p {
  color: var(--gray);
  font-size: 1.125rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.pricing-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  position: relative;
  transition: transform 0.2s;
}

.pricing-card:hover {
  transform: translateY(-4px);
}

.pricing-card.featured {
  border: 2px solid var(--primary);
  transform: scale(1.05);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-4px);
}

.featured-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.pricing-header-section {
  text-align: center;
  margin-bottom: 2rem;
}

.pricing-header-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
}

.price-amount {
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary);
}

.price-period {
  color: var(--gray);
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.features-list li {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);
}

.features-list li.disabled {
  color: #cbd5e1;
}

.btn-full {
  width: 100%;
  text-align: center;
  display: block;
}

/* Guarantee */
.guarantee {
  text-align: center;
  padding: 3rem;
  background: #f0fdf4;
  border-radius: 16px;
  margin-bottom: 4rem;
}

.guarantee-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.guarantee h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.guarantee p {
  color: var(--gray);
}

/* FAQ */
.faq {
  max-width: 800px;
  margin: 0 auto;
}

.faq h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.faq-item {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.faq-item h3 {
  margin-bottom: 0.75rem;
  color: var(--dark);
}

.faq-item p {
  color: var(--gray);
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .pricing-card.featured {
    transform: none;
  }

  .pricing-card.featured:hover {
    transform: translateY(-4px);
  }
}
</style>
