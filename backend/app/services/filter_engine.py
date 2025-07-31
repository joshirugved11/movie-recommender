import json

def load_movies():
    with open("data/movies.json") as f:
        return json.load(f)

def filter_movies(genre, imdb_min, actor):
    movies = load_movies()
    results = []
    for m in movies:
        if genre and genre not in m["genre"]: continue
        if imdb_min and float(m["imdb"]) < imdb_min: continue
        if actor and actor.lower() not in m["actors"].lower(): continue
        results.append(m)
    return results
