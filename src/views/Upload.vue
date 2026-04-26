<template>
  <div class="upload-page">
    <div class="container">
      <div class="upload-header">
        <h1>Analyze Your Resume</h1>
        <p>Paste your resume text below or upload a PDF. Get AI-powered feedback in seconds.</p>
      </div>

      <div class="upload-form">
        <div class="form-group">
          <label for="resume">Resume Text</label>
          <textarea
            id="resume"
            v-model="resumeText"
            placeholder="Paste your resume here..."
            rows="15"
            class="textarea"
          ></textarea>
          <div class="form-hint">
            Or <label for="file-upload" class="file-label">upload a PDF</label>
            <input
              id="file-upload"
              type="file"
              accept=".pdf,.txt,.doc,.docx"
              @change="handleFileUpload"
              class="file-input"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="job-description">
            Job Description (Optional)
            <span class="optional-badge">Premium</span>
          </label>
          <textarea
            id="job-description"
            v-model="jobDescription"
            placeholder="Paste the job description to see how well you match..."
            rows="8"
            class="textarea"
          ></textarea>
          <div class="form-hint">
            Get a match score and gap analysis for specific roles
          </div>
        </div>

        <div class="upload-actions">
          <button
            @click="analyzeResume"
            :disabled="!resumeText || loading"
            class="btn btn-primary btn-large"
          >
            <span v-if="loading">Analyzing...</span>
            <span v-else>🚀 Analyze Resume</span>
          </button>
        </div>

        <div v-if="error" class="alert alert-error">
          {{ error }}
        </div>
      </div>

      <div class="upload-tips">
        <h3>💡 Tips for Best Results</h3>
        <ul>
          <li>Include your full work experience with dates</li>
          <li>List specific technologies and frameworks</li>
          <li>Add quantifiable achievements (e.g., "Improved performance by 40%")</li>
          <li>Include education and certifications</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useAnalysisStore } from '../stores/analysis.js'

export default {
  name: 'Upload',
  data() {
    return {
      resumeText: '',
      jobDescription: '',
      loading: false,
      error: null
    }
  },
  methods: {
    async analyzeResume() {
      if (!this.resumeText.trim()) {
        this.error = 'Please paste your resume text'
        return
      }

      this.loading = true
      this.error = null

      try {
        const store = useAnalysisStore()
        store.setResume(this.resumeText)
        store.setJobDescription(this.jobDescription)
        
        // Call AI analysis
        const result = await this.callAIAnalysis()
        store.analysis = result
        
        // Navigate to results
        this.$router.push('/results')
      } catch (err) {
        this.error = err.message || 'Analysis failed. Please try again.'
      } finally {
        this.loading = false
      }
    },

    async callAIAnalysis() {
      // For MVP: simulate AI analysis
      // In production, this calls your backend API
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock analysis result
      return this.generateMockAnalysis()
    },

    generateMockAnalysis() {
      const hasPython = /python/i.test(this.resumeText)
      const hasReact = /react/i.test(this.resumeText)
      const hasAWS = /aws|amazon/i.test(this.resumeText)
      const hasLeadership = /lead|manage|direct/i.test(this.resumeText)
      const hasMetrics = /\d+%|\$\d+|\d+x/i.test(this.resumeText)
      
      let score = 50
      if (hasPython) score += 10
      if (hasReact) score += 10
      if (hasAWS) score += 10
      if (hasLeadership) score += 10
      if (hasMetrics) score += 10
      score = Math.min(score, 100)

      return {
        overallScore: score,
        sectionScores: {
          experience: hasMetrics ? 85 : 65,
          skills: (hasPython && hasReact && hasAWS) ? 90 : 70,
          education: 75,
          summary: 60
        },
        improvements: [
          'Add quantifiable achievements (e.g., "Improved performance by 40%")',
          'Include more specific technologies and frameworks',
          'Add leadership/mentorship examples if applicable',
          'Tailor summary to target role',
          'Include GitHub/portfolio links'
        ],
        linkedinHeadline: `Senior Software Engineer | Python, JavaScript, AWS | Building Scalable Systems`,
        missingKeywords: ['Docker', 'Kubernetes', 'CI/CD', 'GraphQL', 'TypeScript'],
        strengths: [
          'Strong technical foundation',
          'Relevant experience',
          'Good technology stack'
        ]
      }
    },

    handleFileUpload(event) {
      const file = event.target.files[0]
      if (!file) return

      // For MVP: just read text files
      // PDF parsing would require a library like pdf.js
      if (file.type === 'text/plain') {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.resumeText = e.target.result
        }
        reader.readAsText(file)
      } else {
        this.error = 'For now, please paste resume text directly. PDF support coming soon.'
      }
    }
  }
}
</script>

<style scoped>
.upload-page {
  padding: 4rem 0;
  min-height: 80vh;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.upload-header {
  text-align: center;
  margin-bottom: 3rem;
}

.upload-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.upload-header p {
  color: var(--gray);
  font-size: 1.125rem;
}

.upload-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.form-group {
  margin-bottom: 2rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.optional-badge {
  background: var(--secondary);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: 0.5rem;
}

.textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.2s;
}

.textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.form-hint {
  margin-top: 0.5rem;
  color: var(--gray);
  font-size: 0.875rem;
}

.file-label {
  color: var(--primary);
  cursor: pointer;
  text-decoration: underline;
}

.file-input {
  display: none;
}

.upload-actions {
  text-align: center;
  margin-top: 2rem;
}

.upload-actions .btn {
  width: 100%;
  max-width: 300px;
}

.alert-error {
  background: #fee2e2;
  color: #dc2626;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.upload-tips {
  margin-top: 3rem;
  padding: 2rem;
  background: #f0f9ff;
  border-radius: 12px;
  border-left: 4px solid var(--primary);
}

.upload-tips h3 {
  margin-bottom: 1rem;
}

.upload-tips ul {
  padding-left: 1.5rem;
}

.upload-tips li {
  margin-bottom: 0.5rem;
  color: var(--gray);
}
</style>
