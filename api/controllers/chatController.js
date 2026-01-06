require("dotenv").config();
const OpenAI = require("openai")
const client = new OpenAI();

exports.OpenAI = async (req, res) => {
  const message = req.body.message
  const context = req.body.context || []

  const response = await client.responses.create({
    model: "o3-mini",
    input: [
      {
        role: "system",
        content:
          "Return only valid html components with Tailwind styling. Do not include any boilerplate code, imports, or wrappers—just the html and styling.",
      },

      ...context
        .filter(Boolean)
        .map((content, i) => ({
          role: i % 2 === 0 ? "user" : "assistant",
          content,
        })),

      { role: "user", content: message },
    ],
  })

  res.json({ code: response.output_text })
}
