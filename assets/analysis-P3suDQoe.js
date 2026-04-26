import{t as e}from"./index-DZdXcFcR.js";var t=e(`analysis`,{state:()=>({resumeText:``,jobDescription:``,analysis:null,loading:!1,error:null,isPremium:!1}),actions:{setResume(e){this.resumeText=e},setJobDescription(e){this.jobDescription=e},setPremium(e){this.isPremium=e},async analyzeResume(){this.loading=!0,this.error=null;try{let e=await this.callAIAnalysis();this.analysis=e}catch(e){this.error=e.message||`Analysis failed`}finally{this.loading=!1}},async callAIAnalysis(){let e=this.buildAnalysisPrompt(),t=await fetch(`/api/analyze`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({resume:this.resumeText,jobDescription:this.jobDescription,prompt:e,premium:this.isPremium})});if(!t.ok)throw Error(`Analysis service unavailable`);return await t.json()},buildAnalysisPrompt(){let e=`Analyze this software engineer resume and provide:
`;return e+=`1. Overall score (0-100)
`,e+=`2. Section scores (Experience, Skills, Education, Summary)
`,e+=`3. 5 specific improvements with examples
`,e+=`4. LinkedIn headline suggestion
`,e+=`5. Missing keywords for tech roles

`,this.jobDescription&&(e+=`Also compare against this job description:\n${this.jobDescription}\n\n`),e+=`Resume:\n${this.resumeText}`,e}}});export{t};