from fastapi import FastAPI

app = FastAPI()

#to start copy bottom command and paste to terminal
#uvicorn main:app --reload

@app.get("/")
async def root():
    return {"message": "Hello World"}