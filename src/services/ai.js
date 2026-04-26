// AI Analysis Service
// MVP: Uses Gemini CLI for local analysis
// Production: Would use proper API backend

import { execSync } from 'child_process'

export async function analyzeResume(resumeText, jobDescription = '', isPremium = false) {
  const prompt = buildPrompt(resumeText, jobDescription, isPremium)
  
  try {
    // Use Gemini CLI for analysis
    const result = execSync(`gemini "${escapePrompt(prompt)}"`, {
      encoding: 'utf8',
      timeout: 30000
    })
    
    return parseAnalysis(result)
  } catch (err) {
    console.error('AI analysis failed:', err)
    // Fallback to mock analysis for development
    return getMockAnalysis(resumeText)
  }
}

function buildPrompt(resume, jobDesc, premium) {
  let prompt = `You are an expert resume reviewer for software engineering roles. Analyze this resume and return JSON with:\n`
  prompt += `{\n`
  prompt += `  "overallScore": 0-100,\n`
  prompt += `  "sectionScores": {"experience": 0-100, "skills": 0-100, "education": 0-100, "summary": 0-100},\n`
  prompt += `  "improvements": ["specific improvement 1", "specific improvement 2", ...],\n`
  prompt += `  "linkedinHeadline": "suggested headline",\n`
  prompt += `  "missingKeywords": ["keyword1", "keyword2", ...],\n`
  prompt += `  "strengths": ["strength 1", "strength 2", ...]\n`
  
  if (premium) {
    prompt += `  "coverLetter": "tailored cover letter template",\n`
    prompt += `  "salaryRange": "estimated salary range based on experience"\n`
  }
  
  prompt += `}\n\n`
  prompt += `Resume:\n${resume}\n`
  
  if (jobDesc) {
    prompt += `Job Description:\n${jobDesc}\n`
    prompt += `Also include a "matchScore" (0-100) and "gapAnalysis" explaining what skills are missing.\n`
  }
  
  return prompt
}

function escapePrompt(str) {
  return str.replace(/"/g, '\\"').replace(/\n/g, ' ')
}

function parseAnalysis(result) {
  try {
    // Extract JSON from Gemini response
    const jsonMatch = result.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0])
    }
  } catch (e) {
    console.error('Failed to parse AI response')
  }
  
  return getMockAnalysis(result)
}

function getMockAnalysis(resumeText) {
  // Mock analysis for development/testing
  const hasPython = /python/i.test(resumeText)
  const hasReact = /react/i.test(resumeText)
  const hasAWS = /aws|amazon/i.test(resumeText)
  const hasLeadership = /lead|manage|direct/i.test(resumeText)
  
  let score = 50
  if (hasPython) score += 15
  if (hasReact) score += 10
  if (hasAWS) score += 10
  if (hasLeadership) score += 10
  
  // Cap at 100
  score = Math.min(score, 100)
  
  return {
    overallScore: score,
    sectionScores: {
      experience: hasLeadership ? 85 : 65,
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
    ],
    coverLetter: hasLeadership ? 'Premium feature: Generate tailored cover letter' : null,
    salaryRange: '$120K - $180K depending on location and experience',
    matchScore: jobDescription ? 75 : null,
    gapAnalysis: jobDescription ? 'Missing some cloud infrastructure experience' : null
  }
}
