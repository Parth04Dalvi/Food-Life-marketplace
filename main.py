from fastapi import FastAPI, Depends
from sqlmodel import Session, create_engine, select
from .models import FoodItem
import os

app = FastAPI(title="Food-Life API")
engine = create_engine(os.getenv("DATABASE_URL"))

@app.get("/items")
def get_nearby_items(lat: float, lon: float, radius_meters: int = 1609):
    with Session(engine) as session:
        # Spatial query using PostGIS ST_DWithin
        statement = select(FoodItem).where(
            f"ST_DWithin(location, ST_MakePoint({lon}, {lat})::geography, {radius_meters})"
        )
        return session.exec(statement).all()

@app.post("/items")
def create_item(item: FoodItem):
    with Session(engine) as session:
        session.add(item)
        session.commit()
        return item
