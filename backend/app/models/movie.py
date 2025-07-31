from pydantic import BaseModel
from typing import List

class Movie(BaseModel):
    title: str
    year: int
    genre: List[str]
    imdb: float
    rt_score: int
    actors: List[str]
    director: str
    language: str
