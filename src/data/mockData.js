export const mockIncidents = [
  {
    id: "1",
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in product recommendations, causing unequal access to resources and opportunities. Initial investigation suggests the training data contained inherent biases that were amplified by the model.",
    severity: "High",
    reported_at: "2023-03-15T10:00:00Z"
  },
  {
    id: "2",
    title: "LLM Hallucination in Critical Info",
    description: "Large language model provided incorrect safety procedure information when queried about emergency protocols. The system generated plausible-sounding but dangerously inaccurate instructions that could have led to physical harm if followed.",
    severity: "High",
    reported_at: "2023-04-01T14:30:00Z"
  },
  {
    id: "3",
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata in responses. While no personally identifiable information was revealed, the incident indicates a potential vulnerability in the system's data handling protocols.",
    severity: "Low",
    reported_at: "2023-03-20T09:15:00Z"
  },
  {
    id: "4",
    title: "Model Vulnerability to Prompt Injection",
    description: "Security testing revealed that our deployed AI assistant is vulnerable to certain prompt injection techniques, potentially allowing users to bypass safety filters. No known exploitation in production, but requires immediate patching.",
    severity: "Medium",
    reported_at: "2023-02-10T16:45:00Z"
  },
  {
    id: "5",
    title: "Image Generation Inappropriate Content",
    description: "Image generation model occasionally produces subtly inappropriate content when given certain ambiguous prompts. Content moderation systems caught 98% of cases, but some edge cases are still getting through to users.",
    severity: "Medium",
    reported_at: "2023-01-05T11:20:00Z"
  }
]