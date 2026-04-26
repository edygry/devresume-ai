<template>
  <div class="landing">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Get More Interviews.<br>
            <span class="gradient-text">Land Better Jobs.</span>
          </h1>
          <p class="hero-subtitle">
            AI-powered resume optimization for software engineers. 
            Score your resume, get specific improvements, and stand out in a crowded market.
          </p>
          <div class="hero-actions">
            <router-link to="/upload" class="btn btn-primary btn-large">
              Analyze Your Resume Free
            </router-link>
            <router-link to="/pricing" class="btn btn-outline btn-large">
              View Pricing
            </router-link>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">10K+</span>
              <span class="stat-label">Resumes Analyzed</span>
            </div>
            <div class="stat">
              <span class="stat-number">85%</span>
              <span class="stat-label">Interview Rate Increase</span>
            </div>
            <div class="stat">
              <span class="stat-number">$150K</span>
              <span class="stat-label">Avg Salary Boost</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="score-card">
            <div class="score-header">
              <span class="score-label">Resume Score</span>
              <span class="score-value">78/100</span>
            </div>
            <div class="score-bar">
              <div class="score-fill" style="width: 78%"></div>
            </div>
            <div class="score-sections">
              <div class="section">
                <span>Experience</span>
                <span class="section-score">82</span>
              </div>
              <div class="section">
                <span>Skills</span>
                <span class="section-score">75</span>
              </div>
              <div class="section">
                <span>Education</span>
                <span class="section-score">88</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">Everything You Need to Get Hired</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Resume Scoring</h3>
            <p>Get an overall score plus breakdown by section. Know exactly where you stand.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">✍️</div>
            <h3>Specific Improvements</h3>
            <p>Not just "add metrics" — get actual rewritten bullet points you can use.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💼</div>
            <h3>Job Matching</h3>
            <p>Paste a job description and see how well you match. Find gaps before applying.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔗</div>
            <h3>LinkedIn Headline</h3>
            <p>AI-generated headlines that get more profile views and recruiter messages.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📝</div>
            <h3>Cover Letters</h3>
            <p>Premium: Tailored cover letters for each application. Save hours of writing.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Salary Insights</h3>
            <p>Know your worth. Get salary ranges based on your experience and skills.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <h2 class="section-title">How It Works</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Upload Resume</h3>
            <p>Paste your resume text or upload a PDF. Takes 10 seconds.</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>AI Analysis</h3>
            <p>Our AI reviews your resume against 50+ criteria for tech roles.</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Get Results</h3>
            <p>Receive score, improvements, and LinkedIn headline in seconds.</p>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <h3>Apply & Get Hired</h3>
            <p>Use the optimized resume to land more interviews and better offers.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="social-proof">
      <div class="container">
        <h2 class="section-title">What Engineers Are Saying</h2>
        <div class="testimonials">
          <div class="testimonial">
            <div class="testimonial-text">
              "Got 3x more interview requests after optimizing my resume. The AI suggestions were spot-on."
            </div>
            <div class="testimonial-author">
              <span class="author-name">Sarah K.</span>
              <span class="author-role">Senior Engineer @ FAANG</span>
            </div>
          </div>
          <div class="testimonial">
            <div class="testimonial-text">
              "Went from 0 callbacks to 5 interviews in 2 weeks. Best $9 I've ever spent."
            </div>
            <div class="testimonial-author">
              <span class="author-name">Marcus T.</span>
              <span class="author-role">Full Stack Developer</span>
            </div>
          </div>
          <div class="testimonial">
            <div class="testimonial-text">
              "The job matching feature saved me from applying to roles I wasn't qualified for. Focused my search."
            </div>
            <div class="testimonial-author">
              <span class="author-name">Priya M.</span>
              <span class="author-role">Backend Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Land Your Dream Job?</h2>
          <p>Join 10,000+ engineers who've optimized their resumes with AI.</p>
          <router-link to="/upload" class="btn btn-primary btn-large">
            Get Started Free →
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style scoped>
.landing {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero */
.hero {
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(90deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
}

/* Score Card */
.score-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  color: var(--dark);
}

.score-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.score-label {
  font-size: 1.125rem;
  font-weight: 600;
}

.score-value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary);
}

.score-bar {
  height: 12px;
  background: #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.score-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 6px;
  transition: width 1s ease;
}

.score-sections {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.section {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
}

.section-score {
  font-weight: 700;
  color: var(--primary);
}

/* Features */
.features {
  padding: 6rem 0;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  border-radius: 12px;
  background: var(--light);
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.feature-card p {
  color: var(--gray);
  line-height: 1.6;
}

/* How It Works */
.how-it-works {
  padding: 6rem 0;
  background: var(--light);
}

.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.step {
  text-align: center;
  padding: 2rem;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0 auto 1.5rem;
}

.step h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.step p {
  color: var(--gray);
}

/* Social Proof */
.social-proof {
  padding: 6rem 0;
  background: white;
}

.testimonials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.testimonial {
  padding: 2rem;
  border-radius: 12px;
  background: var(--light);
  border: 1px solid var(--border);
}

.testimonial-text {
  font-size: 1.125rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 700;
}

.author-role {
  color: var(--gray);
  font-size: 0.875rem;
}

/* CTA */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero .container {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-stats {
    justify-content: center;
  }

  .features-grid,
  .steps,
  .testimonials {
    grid-template-columns: 1fr;
  }
}
</style>
