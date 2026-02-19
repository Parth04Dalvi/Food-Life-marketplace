from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime

class FoodItem(SQLModel, table=True):
    __tablename__ = "food_items"
    id: Optional[int] = Field(default=None, primary_key=True)
    vendor_name: str
    item_name: str
    original_price: float
    discount_price: float
    expiry_time: datetime
    # We use a raw SQL column for the PostGIS Geography type
    location: Optional[str] = Field(sa_column=None)
