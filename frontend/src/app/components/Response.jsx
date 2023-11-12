"use client";

import OpenAI from 'openai';
import React, { useState, useEffect } from 'react';

function Response({uvvalue, city}) {
const [response, setResponse] = useState('');

useEffect(()=>{
    const fetchData = async () => 
        {
        const openai = new OpenAI({
            apiKey: "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", dangerouslyAllowBrowser: true // This is also the default, can be omitted
        });

        try{
            const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            max_tokens: 150,
            messages: [{"role": "user", "content": `this is my  uv index is ${uvvalue} in my city, ${city}, what precaution should i take , be rather specific about my area`}],
                }).then((res)=>{
                    console.log(res.choices[0].message.content)
                    setResponse(res.choices[0].message.content)
                });   
            } 
            
            catch(error){
                console.error('Error fetching data:', error);
            }
        };
    fetchData();    
}, [uvvalue])





  return (<>
      {response ? <p>{response}</p> : <p>Loading...</p>}
  </>)
}

export default Response;