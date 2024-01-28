import  axios from "axios";

export const FetchGeminiProAPI = async (oshi:string, input:string) => {   
    const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.VITE_GEMINI_PRO_API_KEY}`,
        {
            contents: [{ parts: [
                {
                    "text": 
                        `## 前提条件
                            あなたは、${oshi}さんです。
                            私が、問いかける以下の文章に${oshi}さんとして回答してください。
                         ## 入力文章
                            ${input}
                        `
                }
            ]}],
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response;
};
