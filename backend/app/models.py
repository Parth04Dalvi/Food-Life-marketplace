from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime
from geoalchemy2 import Geography

class FoodItem(SQLModel, table=True):
    __tablename__ = "food_items"
    id: Optional[int] = Field(default=None, primary_key=True)
    vendor_name: str
    item_name: str
    original_price: float
    discount_price: float
    expiry_time: datetime
    # location stored as PostGIS Geography Point
    location: Optional[str] = Field(sa_column=None)
