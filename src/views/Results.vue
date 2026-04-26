<template>
  <div class="results-page">
    <div class="container">
      <div v-if="!analysis" class="loading-state">
        <div class="spinner"></div>
        <p>Analyzing your resume...</p>
      </div>

      <div v-else class="results">
        <div class="results-header">
          <h1>Your Resume Analysis</h1>
          <p>Here's how your resume stacks up for software engineering roles.</p>
        </div>

        <!-- Overall Score -->
        <div class="score-section">
          <div class="score-card">
            <div class="score-circle" :class="scoreClass">
              <span class="score-number">{{ analysis.overallScore }}</span>
              <span class="score-label">/ 100</span>
            </div>
            <div class="score-message">
              <h2>{{ scoreMessage }}</h2>
              <p>{{ scoreDescription }}</p>
            </div>
          </div>
        </div>

        <!-- Section Scores -->
        <div class="section-scores">
          <h2>Section Breakdown</h2>
          <div class="scores-grid">
            <div v-for="(score, section) in analysis.sectionScores" :key="section" class="score-item">
              <div class="score-item-header">
                <span class="section-name">{{ capitalize(section) }}</span>
                <span class="section-score">{{ score }}</span>
              </div>
              <div class="score-bar">
                <div class="score-fill" :style="{ width: score + '%' }" :class="scoreClass"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Strengths -->
        <div class="strengths-section">
          <h2>✅ Your Strengths</h2>
          <ul class="strengths-list">
            <li v-for="(strength, index) in analysis.strengths" :key="index">{{ strength }}</li>
          </ul>
        </div>

        <!-- Improvements -->
        <div class="improvements-section">
          <h2>🔧 Areas for Improvement</h2>
          <div class="improvements-list">
            <div v-for="(improvement, index) in analysis.improvements" :key="index" class="improvement-item">
              <span class="improvement-number">{{ index + 1 }}</span>
              <p>{{ improvement }}</p>
            </div>
          </div>
        </div>

        <!-- Missing Keywords -->
        <div class="keywords-section">
          <h2>🔑 Missing Keywords</h2>
          <p>These keywords are commonly searched by recruiters for tech roles:</p>
          <div class="keywords-list">
            <span v-for="(keyword, index) in analysis.missingKeywords" :key="index" class="keyword-tag">
              {{ keyword }}
            </span>
          </div>
        </div>

        <!-- LinkedIn Headline -->
        <div class="headline-section">
          <h2>🔗 Suggested LinkedIn Headline</h2>
          <div class="headline-card">
            <p class="headline-text">{{ analysis.linkedinHeadline }}</p>
            <button @click="copyHeadline" class="btn btn-outline">
              📋 Copy to Clipboard
            </button>
          </div>
        </div>

        <!-- Job Match (if provided) -->
        <div v-if="analysis.matchScore !== null" class="match-section">
          <h2>🎯 Job Match Analysis</h2>
          <div class="match-card">
            <div class="match-score">
              <span class="match-number">{{ analysis.matchScore }}</span>
              <span class="match-label">% Match</span>
            </div>
            <p class="match-description">{{ analysis.gapAnalysis }}</p>
          </div>
        </div>

        <!-- Premium Upsell -->
        <div class="premium-section">
          <div class="premium-card">
            <h2>💎 Unlock Premium Features</h2>
            <div class="premium-features">
              <div class="premium-feature">
                <span class="feature-icon">📝</span>
                <div>
                  <h4>Tailored Cover Letters</h4>
                  <p>AI-generated cover letters for each application</p>
                </div>
              </div>
              <div class="premium-feature">
                <span class="feature-icon">💰</span>
                <div>
                  <h4>Salary Insights</h4>
                  <p>Know your worth with accurate salary ranges</p>
                </div>
              </div>
              <div class="premium-feature">
                <span class="feature-icon">🔄</span>
                <div>
                  <h4>Unlimited Analyses</h4>
                  <p>Analyze as many resumes as you want</p>
                </div>
              </div>
            </div>
            <router-link to="/pricing" class="btn btn-primary btn-large">
              Upgrade to Premium - $9
            </router-link>
          </div>
        </div>

        <!-- Actions -->
        <div class="results-actions">
          <router-link to="/upload" class="btn btn-outline">
            🔄 Analyze Another Resume
          </router-link>
          <button @click="downloadReport" class="btn btn-primary">
            📥 Download Report
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAnalysisStore } from '../stores/analysis.js'

export default {
  name: 'Results',
  computed: {
    analysis() {
      const store = useAnalysisStore()
      return store.analysis
    },
    scoreClass() {
      if (!this.analysis) return ''
      const score = this.analysis.overallScore
      if (score >= 80) return 'score-excellent'
      if (score >= 60) return 'score-good'
      if (score >= 40) return 'score-average'
      return 'score-poor'
    },
    scoreMessage() {
      if (!this.analysis) return ''
      const score = this.analysis.overallScore
      if (score >= 80) return 'Excellent Resume!'
      if (score >= 60) return 'Good Foundation'
      if (score >= 40) return 'Needs Improvement'
      return 'Major Updates Needed'
    },
    scoreDescription() {
      if (!this.analysis) return ''
      const score = this.analysis.overallScore
      if (score >= 80) return 'Your resume is strong. Small tweaks could make it perfect.'
      if (score >= 60) return 'Solid base, but there are clear areas to improve.'
      if (score >= 40) return 'Several key areas need attention before applying.'
      return 'Significant improvements needed to compete in the job market.'
    }
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    copyHeadline() {
      if (this.analysis?.linkedinHeadline) {
        navigator.clipboard.writeText(this.analysis.linkedinHeadline)
        alert('Headline copied to clipboard!')
      }
    },
    downloadReport() {
      if (!this.analysis) return
      
      const report = `
DEVRESUME AI - RESUME ANALYSIS REPORT
======================================

Overall Score: ${this.analysis.overallScore}/100

Section Scores:
${Object.entries(this.analysis.sectionScores).map(([k, v]) => `  ${this.capitalize(k)}: ${v}/100`).join('\n')}

Strengths:
${this.analysis.strengths.map(s => `  ✓ ${s}`).join('\n')}

Improvements:
${this.analysis.improvements.map((imp, i) => `  ${i + 1}. ${imp}`).join('\n')}

Missing Keywords:
${this.analysis.missingKeywords.join(', ')}

LinkedIn Headline:
${this.analysis.linkedinHeadline}

======================================
Generated by DevResume AI
      `.trim()

      const blob = new Blob([report], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'resume-analysis.txt'
      a.click()
      URL.revokeObjectURL(url)
    }
  }
}
</script>

<style scoped>
.results-page {
  padding: 4rem 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.loading-state {
  text-align: center;
  padding: 4rem 0;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 4px solid var(--border);
  border-top-color: var(--primary);
  border-radius: 50%;
  margin: 0 auto 1rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.results-header {
  text-align: center;
  margin-bottom: 3rem;
}

.results-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.results-header p {
  color: var(--gray);
  font-size: 1.125rem;
}

/* Score Section */
.score-section {
  margin-bottom: 3rem;
}

.score-card {
  display: flex;
  align-items: center;
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.score-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  flex-shrink: 0;
}

.score-number {
  font-size: 2.5rem;
  line-height: 1;
}

.score-label {
  font-size: 0.875rem;
  opacity: 0.9;
}

.score-excellent { background: linear-gradient(135deg, #10b981, #059669); }
.score-good { background: linear-gradient(135deg, #6366f1, #4f46e5); }
.score-average { background: linear-gradient(135deg, #f59e0b, #d97706); }
.score-poor { background: linear-gradient(135deg, #ef4444, #dc2626); }

.score-message h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.score-message p {
  color: var(--gray);
}

/* Section Scores */
.section-scores {
  margin-bottom: 3rem;
}

.section-scores h2 {
  margin-bottom: 1.5rem;
}

.scores-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.score-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.score-item-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.section-name {
  font-weight: 600;
}

.section-score {
  font-weight: 700;
  color: var(--primary);
}

.score-bar {
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.score-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease;
}

.score-fill.score-excellent { background: #10b981; }
.score-fill.score-good { background: #6366f1; }
.score-fill.score-average { background: #f59e0b; }
.score-fill.score-poor { background: #ef4444; }

/* Strengths */
.strengths-section {
  margin-bottom: 3rem;
}

.strengths-section h2 {
  margin-bottom: 1rem;
}

.strengths-list {
  list-style: none;
  padding: 0;
}

.strengths-list li {
  padding: 0.75rem 1rem;
  background: #f0fdf4;
  border-left: 4px solid #10b981;
  margin-bottom: 0.5rem;
  border-radius: 4px;
}

/* Improvements */
.improvements-section {
  margin-bottom: 3rem;
}

.improvements-section h2 {
  margin-bottom: 1rem;
}

.improvements-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.improvement-item {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.improvement-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

/* Keywords */
.keywords-section {
  margin-bottom: 3rem;
}

.keywords-section h2 {
  margin-bottom: 1rem;
}

.keywords-section p {
  color: var(--gray);
  margin-bottom: 1rem;
}

.keywords-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.keyword-tag {
  padding: 0.5rem 1rem;
  background: #fef3c7;
  color: #92400e;
  border-radius: 20px;
  font-weight: 500;
}

/* Headline */
.headline-section {
  margin-bottom: 3rem;
}

.headline-section h2 {
  margin-bottom: 1rem;
}

.headline-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.headline-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary);
}

/* Match */
.match-section {
  margin-bottom: 3rem;
}

.match-section h2 {
  margin-bottom: 1rem;
}

.match-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  gap: 2rem;
}

.match-score {
  text-align: center;
}

.match-number {
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary);
}

.match-label {
  display: block;
  color: var(--gray);
}

/* Premium */
.premium-section {
  margin-bottom: 3rem;
}

.premium-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  border-radius: 16px;
  text-align: center;
}

.premium-card h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.premium-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  text-align: left;
}

.premium-feature {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.feature-icon {
  font-size: 2rem;
}

.premium-feature h4 {
  margin-bottom: 0.25rem;
}

.premium-feature p {
  opacity: 0.9;
  font-size: 0.875rem;
}

/* Actions */
.results-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
}

/* Responsive */
@media (max-width: 768px) {
  .score-card {
    flex-direction: column;
    text-align: center;
  }

  .scores-grid {
    grid-template-columns: 1fr;
  }

  .premium-features {
    grid-template-columns: 1fr;
  }

  .headline-card {
    flex-direction: column;
    text-align: center;
  }

  .results-actions {
    flex-direction: column;
  }
}
</style>
