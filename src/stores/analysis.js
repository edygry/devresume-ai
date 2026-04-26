import { defineStore } from 'pinia'

export const useAnalysisStore = defineStore('analysis', {
  state: () => ({
    resumeText: '',
    jobDescription: '',
    analysis: null,
    loading: false,
    error: null,
    isPremium: false
  }),

  actions: {
    setResume(text) {
      this.resumeText = text
    },

    setJobDescription(text) {
      this.jobDescription = text
    },

    setPremium(status) {
      this.isPremium = status
    },

    async analyzeResume() {
      this.loading = true
      this.error = null

      try {
        // Call AI analysis service
        const result = await this.callAIAnalysis()
        this.analysis = result
      } catch (err) {
        this.error = err.message || 'Analysis failed'
      } finally {
        this.loading = false
      }
    },

    async callAIAnalysis() {
      // For MVP: use Gemini CLI or simple API call
      // In production, this would be a proper backend API
      
      const prompt = this.buildAnalysisPrompt()
      
      // Simulate API call for now - replace with actual AI service
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resume: this.resumeText,
          jobDescription: this.jobDescription,
          prompt: prompt,
          premium: this.isPremium
        })
      })

      if (!response.ok) {
        throw new Error('Analysis service unavailable')
      }

      return await response.json()
    },

    buildAnalysisPrompt() {
      let prompt = `Analyze this software engineer resume and provide:\n`
      prompt += `1. Overall score (0-100)\n`
      prompt += `2. Section scores (Experience, Skills, Education, Summary)\n`
      prompt += `3. 5 specific improvements with examples\n`
      prompt += `4. LinkedIn headline suggestion\n`
      prompt += `5. Missing keywords for tech roles\n\n`
      
      if (this.jobDescription) {
        prompt += `Also compare against this job description:\n${this.jobDescription}\n\n`
      }
      
      prompt += `Resume:\n${this.resumeText}`
      return prompt
    }
  }
})
