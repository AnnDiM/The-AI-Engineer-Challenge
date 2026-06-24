from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/api/chat")
def chat(request: ChatRequest):
    api_key = os.getenv("ANTHROPIC_API_KEY")
    if not api_key:
        raise HTTPException(status_code=500, detail="ANTHROPIC_API_KEY not configured")

    base_url = os.getenv("ANTHROPIC_BASE_URL", "").rstrip("/")

    if base_url:
        # Azure API Management proxy: key as query param, path includes /anthropic/v1/messages
        endpoint = f"{base_url}/anthropic/v1/messages"
        params = {"subscription-key": api_key}
        headers = {"Content-Type": "application/json"}
    else:
        endpoint = "https://api.anthropic.com/v1/messages"
        params = {}
        headers = {
            "Content-Type": "application/json",
            "x-api-key": api_key,
            "anthropic-version": "2023-06-01",
        }

    try:
        response = httpx.post(
            endpoint,
            params=params,
            headers=headers,
            json={
                "model": "claude-sonnet-4-6",
                "max_tokens": 1024,
                "system": "You are a supportive mental coach.",
                "messages": [{"role": "user", "content": request.message}],
            },
            timeout=30.0,
        )
        response.raise_for_status()
        data = response.json()
        return {"reply": data["content"][0]["text"]}
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=500, detail=f"API error {e.response.status_code}: {e.response.text}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calling Anthropic API: {str(e)}")
