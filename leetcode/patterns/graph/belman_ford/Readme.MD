Shortest path from one node to all nodes negative edges allowed

Pseudo-Code:

    for each vertex V in G
    distance[V] <- infinite
      previous[V] <- NULL
        distance[S] <- 0

    for each vertex V in G				
        for each edge (U,V) in G
        tempDistance <- distance[U] + edge_weight(U, V)
        if tempDistance < distance[V]
            distance[V] <- tempDistance
            previous[V] <- U

    for each edge (U,V) in G
        If distance[U] + edge_weight(U, V) < distance[V}
        Error: Negative Cycle Exists

    return distance[], previous[]

Time: O(VE)

Space: O(V)

[Watch the video of Michael Sambol](https://www.youtube.com/watch?v=obWXjtg0L64)