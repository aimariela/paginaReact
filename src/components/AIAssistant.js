import React, { useState } from "react";
import "../styles/AIAssistant.css";

function AiAssistant() {
  const [userQuestion, setUserQuestion] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [assistantOpen, setAssistantOpen] = useState(false);

  const handleToggleAssistant = () => {
    setAssistantOpen(!assistantOpen);
  };

  const handleSendQuestion = async () => {
    if (!userQuestion.trim()) return;

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: userQuestion,
            },
          ],
        }),
      });

      const data = await response.json();
      if (data?.choices?.[0]?.message?.content) {
        setAiResponse(data.choices[0].message.content);
      } else {
        setAiResponse("No response from AI.");
      }
    } catch (error) {
      console.error(error);
      setAiResponse("Error connecting to AI.");
    }
  };

  return (
    <div className="ai-assistant-container">
      <button onClick={handleToggleAssistant}>
        {assistantOpen ? "Close AI Assistant" : "Open AI Assistant"}
      </button>

      {assistantOpen && (
        <div className="assistant-panel">
          <h2>Ask our AI Assistant</h2>
          <textarea
            className="user-question"
            placeholder="Type your question here..."
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
          />
          <button onClick={handleSendQuestion}>Send</button>

          <textarea
            className="ai-response"
            placeholder="AI response will appear here..."
            value={aiResponse}
            readOnly
          />
        </div>
      )}
    </div>
  );
}

export default AiAssistant;
