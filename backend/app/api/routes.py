from fastapi import APIRouter, Query
from app.services.filter_engine import filter_movies

router = APIRouter()

@router.get("/movies")
def get_movies(
    genre: str = Query(None),
    imdb_min: float = Query(0),
    actor: str = Query(None)
):
    return filter_movies(genre, imdb_min, actor)
